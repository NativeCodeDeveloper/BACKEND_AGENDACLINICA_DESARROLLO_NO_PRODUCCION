import DataBase from "../config/Database.js";

export default class ArchivoPaciente {

    constructor() {
    }

    //SUBIR ARCHIVO EN AL BUCKET (GUARDADO EN LA BASE DE DATOS)
    insertarArchivo(
        id_paciente,
        nombre_documento,
        tipo_archivo,
        profesional,
        r2_key,
        r2_url,
        tamano_bytes
    ){
        try {
        const conexion  = DataBase.getInstance();
        const query = `
        INSERT INTO archivoPaciente (
        id_paciente,
        nombre_documento,
        tipo_archivo,
        profesional,
        r2_key,
        r2_url,
        tamano_bytes) VALUES(?,?,?,?,?,?,?)`;

        const params = [
            id_paciente,
            nombre_documento,
            tipo_archivo,
            profesional,
            r2_key,
            r2_url,
            tamano_bytes
        ];
        return conexion.ejecutarQuery(query, params);

        }catch(err){
            throw err;
        }
    }



    //SELECCIONAR TODOS LOS ARCHIVOS CUYO ESTADO SEA DISTINTO DE 0
    seleccionarTodos(){
        try {
            const conexion  = DataBase.getInstance();
            const query = `SELECT * FROM archivoPaciente WHERE estado_archivo <> 0 `;
            return conexion.ejecutarQuery(query);
        }catch (error) {
            throw error;
        }
    }


    //SELECCIONAR ARCHIVOS ESPECIFICOS POR ID
    seleccionarEspecificoPorId(id_archivo){
        try {
            const conexion  = DataBase.getInstance();
            const query = `SELECT * FROM archivoPaciente WHERE  id_archivo = ? AND estado_archivo <> 0`;

            const params = [
                id_archivo
            ];
            return conexion.ejecutarQuery(query, params);

        }catch(err){
            throw err;
        }
    }


    //SELECCIONAR TODOS LOS ARCHIVOS DONDE POR ID DEL PACIENTE
    seleccionarEspecificoPorPaciente(id_paciente){
        try {
            const conexion  = DataBase.getInstance();
            const query = `SELECT * FROM archivoPaciente WHERE  id_paciente = ? AND estado_archivo <> 0`;

            const params = [
                id_paciente
            ];
            return conexion.ejecutarQuery(query, params);

        }catch(err){
            throw err;
        }
    }


    //ELIMINAR ARCHIVO POR ID_ARCHIVO ELIMINADO LOGICO
    eliminarArchivo(id_archivo){
        try {
            const conexion  = DataBase.getInstance();
            const query = `UPDATE archivoPaciente SET estado_archivo = 0 WHERE id_archivo  = ? `;
            const params = [id_archivo]
            return conexion.ejecutarQuery(query, params);
        }catch (error) {
            throw error;
        }
    }

}