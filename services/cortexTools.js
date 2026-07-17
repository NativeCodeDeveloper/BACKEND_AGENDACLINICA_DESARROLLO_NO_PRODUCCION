import Bloqueos from "../model/BloqueoAgenda.js";
import Profesionales from '../model/Profesionales.js';
import ReservaPacientes from "../model/ReservaPacientes.js";
import DocumentacionAgenda from "../services/documentacionCortex/DocumentacionAgenda.js"


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
            name: "documentacionAgenda",
            description: "Cuando el usuario solicite informacion respecto al uso de la agenda o del calendario reservas, bloqueos, horarios, profesionales o estados de citas.",
            parameters: {
                type: "object",
                properties: {},
                required: []
            },
        },
    },



    {
        type: "function",
        function: {
            name: "documentacionBloqueos",
            description: "Cuando el usuario solicite informacion respecto al uso del modulo de bloqueos o como bloquear agendas",
            parameters: {
                type: "object",
                properties: {},
                required: []
            },
        },
    },



    {
        type: "function",
        function: {
            name: "bloquear_agenda",
            description: `
Crea un bloqueo en la agenda de un profesional para impedir que se agenden citas durante un periodo determinado.

Utiliza esta función cuando el usuario solicite bloquear un horario por motivos como vacaciones, reuniones, almuerzo, trámites, capacitaciones u otras actividades.

El usuario normalmente realizará la solicitud en lenguaje natural, por lo que debes interpretar los datos entregados y convertirlos al formato requerido por la función.

Considera las siguientes reglas:
* Cuando el usuario indique el nombre del profesional sigue los siguientes pasos previo al agendamiento:
- Ver si el profesional solicitado esta disponible mediante su estado_Profesional que devuelve la propia consulta.
- Si el profesional esta activo extrae el id_profesional del profesional solicitado por el usuario.
- Usa este  id para insertar en la funcion de la tool
* La fecha indicada por el usuario corresponde tanto a la fecha de inicio como a la fecha de término del bloqueo.
* Cada bloqueo debe realizarse dentro de un único día. No se deben crear bloqueos que abarquen dos días consecutivos.
* La hora indicada por el usuario corresponde a la hora de inicio.
* Si el usuario indica la duración en minutos, debes calcular automáticamente la hora de término.
* Verifica que la hora de término permanezca dentro de la misma fecha.
* El motivo del bloqueo debe obtenerse de la solicitud del usuario, por ejemplo: vacaciones, reunión, almuerzo o trámite personal.
            `,
            parameters: {
                type: "object",
                properties: {
                    id_profesional: { type: "number", description: "Cuando el usuario indique el nombre del profesional si este esta activo toma su id y ese es el id del profesional que debes insertar en la consulta" },
                    fechaInicio :{ type: "string", description: "Recibes la fecha de inicio en formato de lenguaje natural despues tu la conviertes en el formato correcto que es YYYY-MM-DD" },
                    horaInicio:{ type: "string", description: "Recibes la hora de inicio en formato natural despues tu la conviertes en el formato correcto que es HH:MM:SS "},
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


            case "documentacionAgenda":
                return DocumentacionAgenda;


            case "bloquear_agenda":
                const profesionales = new Profesionales();
                const listadoProfesionales = await profesionales.seleccionarProfesionales();

               let profesionalBuscado =  Number(argumentos.id_profesional);

               let resultadoBusqueda = listadoProfesionales.find((profesional)=> Number(profesional.id_profesional) === profesionalBuscado);

               if (!resultadoBusqueda ) {
                   return {
                       resultado: false,
                       mensaje: "No se pudo ingresar el bloqueo. Revise los datos e intente nuevamente."
                   };
               }

               if(resultadoBusqueda){
                   const BloqueoClass = new Bloqueos();
                   const respuestaModel = await BloqueoClass.insertarBloqueoAgendaModel(
                       resultadoBusqueda.id_profesional,
                       argumentos.fechaInicio,
                       argumentos.horaInicio,
                       argumentos.fechaFinalizacion,
                       argumentos.horaFinalizacion,
                       argumentos.motivo,
                   );

                   let message;

                   if (respuestaModel?.affectedRows > 0) {
                       return message = {
                           resultado: true,
                           mensaje: `Bloqueo de Horario ingresado correctamente`
                       }
                   }

                   if(respuestaModel?.conflicto === "bloqueo"){
                       return message = {
                           resultado: false,
                           mensaje: `Hay un conflicto con  un bloqueo previo debe revisar previamente que no haya bloqueos previos`
                       }
                   }

                   if(respuestaModel?.conflicto === "reserva"){
                       return message = {
                           resultado: false,
                           mensaje:`Hay un conflicto de reservas, debe verificar que no hayan reservas para proceder con este bloqueo`
                       }
                   }

                   return {
                       resultado: false,
                       mensaje: "No se pudo ingresar el bloqueo. Revise los datos e intente nuevamente."
                   };
               }



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