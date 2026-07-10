import DatosEmpresa from "../model/DatosEmpresa.js";

function normalizarTelefono(valor) {
    return String(valor || "").trim();
}

async function obtenerDatosEmpresaConfig() {
    const datosEmpresaModel = new DatosEmpresa();
    const respuesta = await datosEmpresaModel.seleccionarDatosEmpresa();
    const datos = Array.isArray(respuesta) ? respuesta[0] : respuesta;

    const telefono = normalizarTelefono(datos?.contactoTelefono || datos?.contactoWhatsapp);
    const whatsapp = normalizarTelefono(datos?.contactoWhatsapp || datos?.contactoTelefono);

    return {
        datos,
        nombreEmpresa: datos?.empresaNombre || "Clinica",
        direccionEmpresa: datos?.contactoDireccion || "",
        telefonoEmpresa: telefono,
        whatsappEmpresa: whatsapp,
        correoEmpresa: datos?.contactoEmail || "",
        frontUrl: datos?.socialOtraUrl || "",
    };
}

export { obtenerDatosEmpresaConfig };
