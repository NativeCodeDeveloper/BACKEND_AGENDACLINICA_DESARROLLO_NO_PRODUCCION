import Bloqueos from "../model/BloqueoAgenda.js";
import Profesionales from '../model/Profesionales.js';
import ReservaPacientes from "../model/ReservaPacientes.js";

export const tools = [

    {
        type: "function",
        function: {
            name: "listar_profesionales",
            description: "Lista todos los profesionales activos de la clínica con su ID y nombre",
            parameters: { type: "object", properties: {} },
        },
    },

    {
        type: "function",
        function: {
            name: "bloquear_agenda",
            description: "Crea un bloqueo en la agenda de un profesional para que no se puedan agendar citas en ese horario. Usa esta función cuando el usuario quiera bloquear un horario por vacaciones, reunión, almuerzo, etc.",
            parameters: {
                type: "object",
                properties: {
                    id_profesional: { type: "number", description: "ID numérico del profesional" },
                    fechaInicio :{ type: "string", description: "Fecha de inicio en formato YYYY-MM-DD" },
                    horaInicio:{ type: "string", description: "Fecha de inicio en formato HH:MM:SS "},
                    fechaFinalizacion:{ type: "string", description: "Fecha de finalizacion en formato YYYY-MM-DD" },
                    horaFinalizacion:{ type: "string", description: "Fecha de inicio en formato HH:MM:SS "},
                    motivo:{ type: "string", description: "motivo del bloqueo debe ser breve"}
                }},
        },

    },


// RESERVA DE PACIENTES POR CORTEX ( HECHO POR NICOLAS NO IA)


    {
        type: "function",
        function: {
            name: "crear_reservacion",
            description: "Crea una reserva médica para un paciente con un profesional específico en una fecha y hora determinada. Solo ejecutar cuando se tengan todos los datos necesarios confirmados por el usuario",
            parameters: {
                type: "object",
                properties: {
                    nombrePaciente: { type: "string", description: " Nombre del paciente " },
                    apellidoPaciente :{ type: "string", description: "Apellido del paciente  " },
                    nombreProfesional:{ type: "string", description: "Nombre del profesional que atenderá   "},
                    rut:{ type: "string", description: "RUT del paciente en formato SIN PUNTOS NI GUION" },
                    telefono:{ type: "string", description: "Teléfono de contacto del paciente "},
                    email:{ type: "string", description: "Correo electrónico del paciente   "},
                    fechaInicio:{ type: "string", description: "Fecha de inicio de la reserva en formato YYYY-MM-DD   "},
                    horaInicio:{ type: "string", description: "Hora de inicio de la reserva en formato HH:MM:SS  "},
                    fechaFinalizacion:{ type: "string", description: "Fecha de finalización de la reserva en formato YYYY-MM-DD"},
                    horaFinalizacion:{ type: "string", description: "Hora de finalización de la reserva en formato HH:MM:SS"},
                    monto_reserva:{ type: "number", description: " Monto o precio de la reserva "},
                    motivo_reserva:{ type: "string", description: "Motivo o razón de la reserva "},
                    estadoReserva:{ type: "string", description: " Estado de la reserva (ej: confirmada, pendiente)"},
                    id_profesional:{ type: "number", description: "ID numérico del profesional"},
                },
                required: ["nombrePaciente", "apellidoPaciente", "rut", "fechaInicio", "horaInicio", "fechaFinalizacion", "horaFinalizacion", "id_profesional"]
            },
        },

    },
]



export async function ejecutarTool(nombre, argumentos) {
    try {
        switch (nombre) {
            case "bloquear_agenda":
                const bloqueosClase = new Bloqueos();
                const bloquear = await bloqueosClase.insertarBloqueoAgendaModel(
                    argumentos.id_profesional,
                    argumentos.fechaInicio,
                    argumentos.horaInicio,
                    argumentos.fechaFinalizacion,
                    argumentos.horaFinalizacion,
                    argumentos.motivo
                    );
                return JSON.stringify(bloquear);

            case "listar_profesionales":
                const profesionalesClase = new Profesionales();
                const respuesta = await profesionalesClase.seleccionarProfesionales();
                return JSON.stringify(respuesta);


            case "crear_reservacion":
                const reservacionClase = new ReservaPacientes();
                const respuestaReservacion = await reservacionClase.insertarReservaPaciente(
                    argumentos.nombrePaciente,
                    argumentos.apellidoPaciente,
                    argumentos.rut,
                    argumentos.telefono,
                    argumentos.email,
                    argumentos.fechaInicio,
                    argumentos.horaInicio,
                    argumentos.fechaFinalizacion,
                    argumentos.horaFinalizacion,
                    argumentos.monto_reserva,
                    argumentos.motivo_reserva,
                    argumentos.estadoReserva,
                    argumentos.id_profesional);

                    return JSON.stringify(respuestaReservacion);
        }

    }catch(err) {
        throw err;
    }

}