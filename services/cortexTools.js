import Bloqueos from "../model/BloqueoAgenda.js";
import Profesionales from '../model/Profesionales.js';
import ReservaPacientes from "../model/ReservaPacientes.js";
import DocumentacionAgenda from "../services/documentacionCortex/DocumentacionAgenda.js"
import Tarifas_profesional from "../model/Tarifas_profesional.js";
import Logs from "../services/generadorLogsBackend.js"


export const tools = [

    {
        type: "function",
        function: {
            name: "listar_profesionales",
            description: "Lista todos los profesionales activos de la clínica con su ID y nombre",
            parameters: { type: "object", properties: {} },
        },
        required: []

    },



    {
        type: "function",
        function: {
            name: "listar_profesionales_servicios",
            description: `
   Recibe el nombre completo del profesional previamente confirmado por el usuario.

  - Si el usuario ya indicó un profesional, utiliza ese nombre.
  - Si no indicó un profesional, ejecuta listar_profesionales, muestra los profesionales
  disponibles y solicita que seleccione uno.
  - No inventes ni solicites al usuario el ID del profesional.
  - No uses IDs recordados de mensajes anteriores.
  - Envía a esta herramienta únicamente el nombre completo del profesional confirmado.
  - El backend buscará el profesional activo, obtendrá su ID real y devolverá solo los
  servicios activos asociados.
  - Si el profesional no existe, no está activo o no tiene servicios disponibles, informa
  el resultado claramente al usuario  `,
            parameters: { type: "object", properties: {
                    nombreProfesional: { type: "string", description: "El usuario entrega el nombre completo del profesional" },
                },
                required: ["nombreProfesional"] },
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
* Si el usuario solicita bloquear días separados, debes ingresar un bloqueo independiente para cada día indicado.
* La hora indicada por el usuario corresponde a la hora de inicio.
* Si el usuario indica la duración en minutos, debes calcular automáticamente la hora de término.
* Verifica que la hora de término permanezca dentro de la misma fecha.
* El motivo del bloqueo debe obtenerse de la solicitud del usuario, por ejemplo: vacaciones, reunión, almuerzo o trámite personal.
* Si el usuario pide bloquear todo el dia bloquea especificamente el dia que te dice usando la fecha indicada y la horaInicio de  de  8.00 AM y horaFinalizacion 23.00 PM hrs.
* El usuario debe si o si especificar las fechas para hacer el bloqueo.
* Si el usuario dice bloquea todas las fechas de algun mes o la solicitud es ambigua se le debe indicar: Para proceder con los bloqueos indicame las fechas , por ejemplo 25 de diciembre, 23 de diciembre etc.
* No debes calcular los dias del calendario solo dar el ejemplo
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
            description: `
 # PROTOCOLO OBLIGATORIO PARA CREAR RESERVAS

  ## Rol del solicitante

  Asume siempre que quien conversa contigo es un usuario de Agenda Clínica, una persona del
  centro médico, recepción, administración o un profesional.

  No asumas que el solicitante es el paciente.

  Por lo tanto:
  - Habla siempre de “paciente”, no de “usted” ni de “tu cita”.
  - Solicita los datos del paciente que se desea agendar.
  - No pidas datos personales del solicitante, salvo que sean necesarios para otra función.
  - Un mismo usuario puede crear reservas para distintos pacientes.

  ## Regla de conversación

  - Solicita un solo dato por mensaje.
  - Espera la respuesta antes de solicitar el siguiente dato.
  - Si el usuario entrega varios datos en un solo mensaje, guárdalos y pide solo el
  siguiente dato faltante.
  - No vuelvas a preguntar un dato que ya fue recibido y validado.
  - No inventes nombres, IDs, servicios, fechas, horarios, correos, teléfonos ni montos.
  - No menciones al usuario los nombres internos de las herramientas.
  - No ejecutes crear_reservacion hasta completar todas las validaciones y recibir una
  confirmación explícita.

  ## Orden obligatorio de datos

  Solicita y valida en este orden:

  1. RUT del paciente.
  2. Nombre del paciente.
  3. Apellido del paciente.
  4. Nombre del profesional.
  5. Servicio requerido.
  6. Fecha de la cita.
  7. Hora de inicio.
  8. Duración en minutos.
  9. Teléfono del paciente.
  10. Correo electrónico del paciente.
  11. Confirmación final.

  ## Validación del profesional

  Cuando el usuario indique el nombre de un profesional:

  1. Ejecuta listar_profesionales.
  2. Busca el profesional por nombre, ignorando mayúsculas, minúsculas, tildes y espacios
  adicionales.
  3. Verifica que el profesional esté activo.
  4. Usa únicamente el id_profesional devuelto por listar_profesionales para ese
  profesional.

  Reglas obligatorias:

  - Nunca inventes, adivines, supongas ni reutilices un id_profesional de otra reserva.
  - Si hay una coincidencia exacta, usa únicamente el ID de esa coincidencia.
  - Si el nombre es parcial y hay una sola coincidencia posible, muestra el nombre completo
  y solicita confirmación antes de usar su ID.
  - Si existen varias coincidencias, muestra las opciones y pide al usuario seleccionar
  una.
  - Si no existe coincidencia, solicita otro nombre.
  - Si el usuario cambia de profesional, elimina el ID anterior y realiza nuevamente la
  búsqueda.
  - Antes de crear la reserva, comprueba que el id_profesional corresponde al profesional
  mostrado en el resumen.

  ## Validación del servicio

  Solo después de validar correctamente al profesional:

  1. Ejecuta listar_profesionales_servicios enviando el nombre completo confirmado del
     profesional.
  2. Muestra únicamente los servicios activos devueltos para ese profesional.
  3. Solicita al usuario que seleccione uno de esos servicios.
  4. El motivo_reserva debe coincidir con uno de los servicios devueltos.
  5. Obtén el monto_reserva desde el precio del servicio seleccionado. Nunca solicites al
     usuario el valor del servicio.

  Reglas obligatorias:

  - No aceptes un servicio que no esté disponible para el profesional seleccionado.
  - Si no existen servicios activos, informa al usuario y no continúes con la reserva.
  - Nunca afirmes que un profesional no tiene servicios activos sin haber ejecutado
  listar_profesionales_servicios con su nombre validado.
  - Cuando el usuario consulte los servicios de un profesional, ejecuta siempre listar_profesionales en la misma solicitud antes de ejecutar listar_profesionales_servicios.

  ## Validación de fecha

  Solicita que el usuario indique expresamente el día y el mes.

  Ejemplo válido: “28 de julio”.

  - Si indica solo un día, solicita el mes.
  - Si indica solo un mes, solicita el día.
  - No aceptes como fecha final frases ambiguas como “el 28”, “mañana”, “este viernes”, “la
  próxima semana” o “a fin de mes”.
  - Si no indica año, utiliza el año actual solamente si la fecha aún no ha pasado.
  - Si la fecha ya pasó durante el año actual, solicita el año.
  - Convierte la fecha validada al formato YYYY-MM-DD.

  ## Validación de horario

  - Solicita la hora de inicio.
  - Solicita la duración en minutos.
  - Calcula la hora de finalización.
  - Verifica que el término corresponda al mismo día de la cita.
  - Si el horario termina al día siguiente, solicita otra hora o duración válida.
  - Convierte las horas al formato HH:MM:SS.

  ## Estado de reserva

  - No preguntes al usuario por el estado de la reserva.
  - No muestres el estado en el resumen final.
  - Al ejecutar crear_reservacion, envía siempre:
    estadoReserva: “reservada”.

  ## Confirmación final

  Cuando todos los datos estén completos y validados, muestra este resumen:

  Antes de mostrar el resumen, ejecuta listar_profesionales_servicios con el nombre completo
  confirmado del profesional para obtener su ID real. No solicites confirmación si no tienes
  ese ID.

  - Paciente: nombre, apellido y RUT.
  - Profesional: nombre completo validado.
  - ID del profesional validado.
  - Servicio: servicio activo seleccionado.
  - Fecha.
  - Hora de inicio.
  - Hora de término.
  - Teléfono.
  - Correo electrónico.

  El resumen debe incluir obligatoriamente el número real recibido en
  profesional.id_profesional, con este formato: "ID del profesional: 123".

  Nunca escribas "[id_profesional]", "id_profesional" ni marcadores entre corchetes. Si no
  tienes un ID numérico real, consulta la herramienta y no pidas confirmación.

  Antes de ejecutar la reserva, muestra todos los datos anteriores y pregunta solamente:

  “¿Confirmas que deseas crear esta reserva?”

  Solo si el usuario responde explícitamente “sí”, “confirmo”, “confirmar” o equivalente:

  1. Verifica nuevamente que el id_profesional corresponde al profesional del resumen.
  2. Ejecuta crear_reservacion con los datos validados.
  3. Envía estadoReserva con el valor exacto “reservada”.

  ## Resultado

  - Indica que la reserva fue creada únicamente si la herramienta devuelve una respuesta
  exitosa.
  - Si la herramienta devuelve un error, informa el mensaje de forma clara.
  - Si el usuario modifica algún dato, actualiza solo ese dato, muestra nuevamente el
  resumen completo y solicita una nueva confirmación.

`,
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
                    monto_reserva:{ type: "number", description: "Precio del servicio seleccionado, obtenido desde la tarifa activa. Nunca solicitar este valor al usuario."},
                    motivo_reserva:{ type: "string", description: "Motivo o razón de la reserva "},
                    estadoReserva:{ type: "string", description: " Estado de la reserva (ej: confirmada, pendiente)"},
                    id_profesional:{ type: "number", description: "ID numérico del profesional"},
                },
                required: ["nombrePaciente", "apellidoPaciente", "nombreProfesional", "rut", "fechaInicio", "horaInicio", "fechaFinalizacion", "horaFinalizacion", "monto_reserva", "motivo_reserva", "id_profesional"]
            },
        },

    },
]



export async function ejecutarTool(nombre, argumentos) {
    try {
        switch (nombre) {

            case "documentacionAgenda":
                return DocumentacionAgenda;


            case "listar_profesionales_servicios":

                const nombreProfesionalChat = argumentos.nombreProfesional;

                const normalizarNombre = (nombre) => {
                    return nombre.trim().toLowerCase();
                }

                const nombreProfesionalNormalizado = normalizarNombre(nombreProfesionalChat);

                const profesionalesModel = new Profesionales();
                const listadoProfesionales1 = await profesionalesModel.seleccionarProfesionales();
                const profesionalBuscado1 = listadoProfesionales1.find(profesional => profesional.nombreProfesional.toLowerCase().includes(nombreProfesionalNormalizado));

                if (profesionalBuscado1 === undefined){
                    return JSON.stringify({
                        message: `Profesional no encontrado`
                    })
                }else{


                    const tarifasProfesionales = new Tarifas_profesional();
                    const dataServicioProfesionales = await tarifasProfesionales.seleccionarTarifasProfesionalesConNombresPor_id_profesional(profesionalBuscado1.id_profesional);
                    return JSON.stringify({
                        profesional:{nombreProfesional: profesionalBuscado1.nombreProfesional, id_profesional: profesionalBuscado1.id_profesional},
                        servicios: dataServicioProfesionales
                    });
                }






            case "bloquear_agenda":
                const profesionales = new Profesionales();
                const listadoProfesionales = await profesionales.seleccionarProfesionales();

               let profesionalBuscado =  Number(argumentos.id_profesional);

               let resultadoBusqueda = listadoProfesionales.find((profesional)=> Number(profesional.id_profesional) === profesionalBuscado);

               if (!resultadoBusqueda) {
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

                    let id_profesional = null;
                    const nombreProfesional = argumentos.nombrePaciente;

                    const profesionalesModelTool = new Profesionales();
                    const listaProfesionales = await profesionalesModelTool.seleccionarProfesionales();
                    const profesionalSolicitado = listaProfesionales.find(profesional => profesional.nombreProfesional.includes(nombreProfesional));

                    if(profesionalSolicitado) {
                        id_profesional = profesionalSolicitado.id;

                    }else {

                        return JSON.stringify({
                            message: `no fue posible encontrar el id del profesional indicado`
                        });
                    }

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
                            "reservada",
                            id_profesional
                        );
                        Logs.createLog(`RESPUESTA BACKEND: `, JSON.stringify(respuestaReservacion) )
                        return JSON.stringify(respuestaReservacion);

        }

    }catch(err) {
        throw err;
    }

}
