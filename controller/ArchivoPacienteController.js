import ArchivoPaciente from "../model/ArchivoPaciente.js";
import { construirKey, subirArchivo, eliminarArchivoR2, generarUrlDescarga } from "../services/r2Storage.js";

export default class ArchivoPacienteController {
    constructor() {}

    // POST /archivoPaciente/subir
    // multer ya procesó el archivo y lo dejó en req.file
    static async subirArchivo(req, res) {
        try {
            if (!req.file) {
                return res.status(400).json({ message: "sinarchivo" });
            }

            const { id_paciente, profesional, nombre_documento } = req.body;

            if (!id_paciente || !profesional) {
                return res.status(400).json({ message: "Faltan datos obligatorios" });
            }

            // Determinar tipo segun mimetype
            const mimetype = req.file.mimetype;
            let tipo_archivo = "Otro";
            if (mimetype.startsWith("image/")) tipo_archivo = "Imagen";
            else if (mimetype === "application/pdf") tipo_archivo = "PDF";
            else if (mimetype.includes("word") || mimetype.includes("document")) tipo_archivo = "Word";

            // Subir archivo a Cloudflare R2
            const key = construirKey(id_paciente, req.file.originalname);
            await subirArchivo(req.file.buffer, key, mimetype);

            // Generar URL de acceso
            const r2_url = await generarUrlDescarga(key, 86400);

            // Guardar metadata en la base de datos
            const nombre = nombre_documento || req.file.originalname;
            const modelo = new ArchivoPaciente();
            const resultado = await modelo.insertarArchivo(
                id_paciente,
                nombre,
                tipo_archivo,
                profesional,
                key,
                r2_url,
                req.file.size
            );

            return res.json({ ok: true, id_archivo: resultado.insertId });

        } catch (error) {
            console.error("[ArchivoPacienteController] Error subir:", error);
            return res.status(500).json({ error: "Error al subir archivo" });
        }
    }

    // POST /archivoPaciente/listar
    static async listarArchivosPaciente(req, res) {
        try {
            const { id_paciente } = req.body;

            if (!id_paciente) {
                return res.status(400).json({ message: "sindato" });
            }

            const modelo = new ArchivoPaciente();
            const archivos = await modelo.seleccionarEspecificoPorPaciente(id_paciente);

            return res.json(archivos);

        } catch (error) {
            console.error("[ArchivoPacienteController] Error listar:", error);
            return res.status(500).json({ error: "Error al listar archivos" });
        }
    }

    // POST /archivoPaciente/eliminar
    static async eliminarArchivo(req, res) {
        try {
            const { id_archivo } = req.body;

            if (!id_archivo) {
                return res.status(400).json({ message: "sindato" });
            }

            // Obtener el r2_key para borrar del bucket
            const modelo = new ArchivoPaciente();
            const registros = await modelo.seleccionarEspecificoPorId(id_archivo);

            if (!registros || registros.length === 0) {
                return res.status(404).json({ message: "Archivo no encontrado" });
            }

            const { r2_key } = registros[0];

            // Eliminar del bucket R2
            await eliminarArchivoR2(r2_key);

            // Soft delete en la base de datos
            await modelo.eliminarArchivo(id_archivo);

            return res.json({ message: true });

        } catch (error) {
            console.error("[ArchivoPacienteController] Error eliminar:", error);
            return res.status(500).json({ error: "Error al eliminar archivo" });
        }
    }

    // POST /archivoPaciente/descargar
    static async descargarArchivo(req, res) {
        try {
            const { id_archivo } = req.body;

            if (!id_archivo) {
                return res.status(400).json({ message: "sindato" });
            }

            const modelo = new ArchivoPaciente();
            const registros = await modelo.seleccionarEspecificoPorId(id_archivo);

            if (!registros || registros.length === 0) {
                return res.status(404).json({ message: "Archivo no encontrado" });
            }

            const { r2_key } = registros[0];
            const url = await generarUrlDescarga(r2_key, 3600);

            return res.json({ ok: true, url });

        } catch (error) {
            console.error("[ArchivoPacienteController] Error descargar:", error);
            return res.status(500).json({ error: "Error al generar descarga" });
        }
    }
}
