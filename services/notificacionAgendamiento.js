import { construirEnlacesReservaToken } from "./notificacionReservaToken.js";
import { obtenerDatosEmpresaConfig } from "./datosEmpresaConfig.js";

function formatearMontoCorreo(monto) {
    const numero = Number(monto ?? 0);
    if (!Number.isFinite(numero)) return String(monto ?? "-");
    return numero.toLocaleString("es-CL");
}

function normalizarTextoCorreo(valor, fallback = "-") {
    const texto = String(valor ?? "").trim();
    return texto || fallback;
}

function construirUrlLogoCorreo(apiUrl) {
    const baseUrl = String(apiUrl || process.env.API_URL || "http://localhost:3001").replace(/\/$/, "");
    return `${baseUrl}/logoAC3.png`;
}

function construirHtmlCorreoPaciente({
    accent = "#2f6fed",
    eyebrow = "Agenda Clinica",
    titulo,
    subtitulo,
    saludo,
    nombrePaciente,
    nombreProfesional,
    rut,
    telefono,
    fechaInicio,
    horaInicio,
    fechaFinalizacion,
    horaFinalizacion,
    motivo_reserva,
    monto_reserva,
    estadoReserva,
    ctaTitulo,
    ctaTexto,
    urlConfirmar,
    urlCancelar,
    fromName,
    logoUrl
}) {
    const detalleReserva = [
        {label: "Paciente", value: normalizarTextoCorreo(nombrePaciente)},
        {label: "Profesional", value: normalizarTextoCorreo(nombreProfesional)},
        {label: "RUT", value: normalizarTextoCorreo(rut)},
        {label: "Telefono", value: normalizarTextoCorreo(telefono)},
        {label: "Inicio", value: `${normalizarTextoCorreo(fechaInicio)} ${normalizarTextoCorreo(horaInicio)}`},
        {label: "Termino", value: `${normalizarTextoCorreo(fechaFinalizacion)} ${normalizarTextoCorreo(horaFinalizacion)}`},
        {label: "Motivo", value: normalizarTextoCorreo(motivo_reserva)},
        {label: "Monto", value: `$${formatearMontoCorreo(monto_reserva)}`},
        {label: "Estado", value: normalizarTextoCorreo(estadoReserva)}
    ];

    const filas = detalleReserva.map(({label, value}) => `
      <tr>
        <td style="padding: 12px 0; border-bottom: 1px solid #d9e4ec; width: 38%; color: #5e7386; font-size: 13px; letter-spacing: 0.02em;">
          ${label}
        </td>
        <td style="padding: 12px 0; border-bottom: 1px solid #d9e4ec; color: #17324d; font-size: 14px; font-weight: 700;">
          ${value}
        </td>
      </tr>
    `).join("");

    return `
      <div style="margin: 0; padding: 32px 16px; background: #edf3f6;">
        <div style="max-width: 680px; margin: 0 auto; font-family: Helvetica, Arial, sans-serif; color: #17324d;">
          <div style="background: linear-gradient(135deg, #0f2740 0%, ${accent} 58%, #76b7d8 100%); border-radius: 28px 28px 0 0; padding: 22px 28px; color: #ffffff; box-shadow: 0 28px 60px rgba(15, 39, 64, 0.18);">
            <div style="margin-bottom: 14px;">
              <img src="${logoUrl}" alt="${fromName}" style="display: block; height: 42px; width: auto; max-width: 180px;" />
            </div>
            <div style="display: inline-block; padding: 5px 11px; border-radius: 999px; background: rgba(255,255,255,0.16); border: 1px solid rgba(255,255,255,0.18); font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;">
              ${eyebrow}
            </div>
            <h1 style="margin: 14px 0 8px; font-size: 22px; line-height: 1.2; font-weight: 800;">
              ${titulo}
            </h1>
            <p style="margin: 0; max-width: 520px; font-size: 13px; line-height: 1.65; color: rgba(255,255,255,0.9);">
              ${subtitulo}
            </p>
          </div>

          <div style="background: #ffffff; border: 1px solid #dbe7ef; border-top: none; border-radius: 0 0 28px 28px; overflow: hidden; box-shadow: 0 28px 60px rgba(15, 39, 64, 0.12);">
            <div style="padding: 30px 32px 18px;">
              <div style="padding: 18px 20px; border-radius: 22px; background: linear-gradient(180deg, #f8fbfd 0%, #eef5f8 100%); border: 1px solid #d7e4ec;">
                <p style="margin: 0 0 10px; font-size: 15px; color: #4c6477;">${saludo}</p>
                <p style="margin: 0; font-size: 15px; line-height: 1.8; color: #17324d;">
                  ${nombrePaciente}, ${ctaTexto}
                </p>
              </div>

              <div style="margin-top: 24px; padding: 24px; border-radius: 24px; background: #f9fcfd; border: 1px solid #dce9f0;">
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 18px;">
                  <tr>
                    <td style="vertical-align: top; padding: 0 16px 0 0;">
                      <p style="margin: 0; color: #6f8798; font-size: 11px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase;">Resumen Clinico</p>
                      <h2 style="margin: 8px 0 0; font-size: 22px; line-height: 1.25; color: #17324d;">Detalle de la reserva</h2>
                    </td>
                    <td style="width: 1%; white-space: nowrap; text-align: right; vertical-align: top;">
                      <div style="display: inline-block; padding: 10px 16px; border-radius: 16px; background: #eef6fb; border: 1px solid #d6e6f1; color: #24506e; font-size: 12px; font-weight: 700;">
                        ${normalizarTextoCorreo(estadoReserva)}
                      </div>
                    </td>
                  </tr>
                </table>

                <table style="width: 100%; border-collapse: collapse;">
                  ${filas}
                </table>
              </div>

              <div style="margin-top: 24px; padding: 24px; border-radius: 24px; background: linear-gradient(180deg, #0f2740 0%, #173b5c 100%); color: #ffffff;">
                <p style="margin: 0; font-size: 11px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.76);">
                  Gestion de asistencia
                </p>
                <h3 style="margin: 10px 0 10px; font-size: 24px; line-height: 1.25;">
                  ${ctaTitulo}
                </h3>
                <p style="margin: 0 0 22px; font-size: 14px; line-height: 1.8; color: rgba(255,255,255,0.84);">
                  Usa una de las siguientes acciones para confirmar o cancelar tu atencion.
                </p>

                <div style="font-size: 0;">
                  <a href="${urlConfirmar}" style="display: inline-block; margin: 0 12px 12px 0; padding: 14px 24px; border-radius: 16px; background: linear-gradient(135deg, #1aa37a 0%, #1f8f6c 100%); color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 800; letter-spacing: 0.02em; box-shadow: 0 16px 30px rgba(26, 163, 122, 0.24);">
                    Confirmar asistencia
                  </a>
                  <a href="${urlCancelar}" style="display: inline-block; margin: 0 0 12px; padding: 14px 24px; border-radius: 16px; background: linear-gradient(135deg, #d85c6d 0%, #c94658 100%); color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 800; letter-spacing: 0.02em; box-shadow: 0 16px 30px rgba(201, 70, 88, 0.22);">
                    Cancelar cita
                  </a>
                </div>
              </div>
            </div>

            <div style="padding: 18px 32px 30px; background: #f6fafc; border-top: 1px solid #dce8ef; color: #688093;">
              <p style="margin: 0 0 8px; font-size: 13px; line-height: 1.7;">
                Si necesitas ayuda, responde este correo o comunicate con el centro para ajustar tu agenda de forma segura.
              </p>
              <p style="margin: 0; font-size: 12px; font-weight: 700; letter-spacing: 0.04em; color: #17324d;">
                ${fromName}
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
}

function construirHtmlCorreoEquipo({
    accent = "#2f6fed",
    titulo,
    subtitulo,
    nombreProfesional,
    nombrePaciente,
    apellidoPaciente,
    fechaInicio,
    horaInicio,
    motivo_reserva,
    monto_reserva,
    id_reserva,
    detalleAccion,
    fromName,
    logoUrl
}) {
    return `
      <div style="margin: 0; padding: 28px 16px; background: #eef3f6; font-family: Helvetica, Arial, sans-serif; color: #17324d;">
        <div style="max-width: 620px; margin: 0 auto; background: #ffffff; border: 1px solid #d9e5ec; border-radius: 26px; overflow: hidden; box-shadow: 0 24px 50px rgba(15, 39, 64, 0.12);">
          <div style="padding: 20px 24px; background: linear-gradient(135deg, #0f2740 0%, ${accent} 100%); color: #ffffff;">
            <div style="margin-bottom: 12px;">
              <img src="${logoUrl}" alt="${fromName}" style="display: block; height: 38px; width: auto; max-width: 170px;" />
            </div>
            <p style="margin: 0 0 8px; font-size: 10px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.76);">
              Notificacion Interna
            </p>
            <h2 style="margin: 0 0 6px; font-size: 22px; line-height: 1.2;">${titulo}</h2>
            <p style="margin: 0; font-size: 13px; line-height: 1.6; color: rgba(255,255,255,0.86);">${subtitulo}</p>
          </div>

          <div style="padding: 28px 30px;">
            <div style="display: grid; gap: 18px;">
              <div style="padding: 18px 20px; border-radius: 18px; background: #f7fbfd; border: 1px solid #dce8ef;">
                <div style="font-size: 11px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; color: #73899a;">Paciente</div>
                <div style="margin-top: 8px; font-size: 18px; font-weight: 800; color: #17324d;">${nombrePaciente} ${apellidoPaciente}</div>
              </div>
              <div style="padding: 18px 20px; border-radius: 18px; background: #f7fbfd; border: 1px solid #dce8ef;">
                <div style="font-size: 11px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; color: #73899a;">Profesional</div>
                <div style="margin-top: 8px; font-size: 16px; font-weight: 700; color: #17324d;">${normalizarTextoCorreo(nombreProfesional)}</div>
              </div>
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-top: 22px;">
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #dbe6ed; color: #6a8092; width: 40%;">ID Reserva</td><td style="padding: 12px 0; border-bottom: 1px solid #dbe6ed; font-weight: 700;">${id_reserva}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #dbe6ed; color: #6a8092;">Fecha</td><td style="padding: 12px 0; border-bottom: 1px solid #dbe6ed; font-weight: 700;">${fechaInicio}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #dbe6ed; color: #6a8092;">Hora</td><td style="padding: 12px 0; border-bottom: 1px solid #dbe6ed; font-weight: 700;">${horaInicio}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #dbe6ed; color: #6a8092;">Motivo</td><td style="padding: 12px 0; border-bottom: 1px solid #dbe6ed; font-weight: 700;">${normalizarTextoCorreo(motivo_reserva)}</td></tr>
              <tr><td style="padding: 12px 0; border-bottom: 1px solid #dbe6ed; color: #6a8092;">Monto</td><td style="padding: 12px 0; border-bottom: 1px solid #dbe6ed; font-weight: 700;">$${formatearMontoCorreo(monto_reserva)}</td></tr>
              <tr><td style="padding: 12px 0; color: #6a8092; vertical-align: top;">Accion</td><td style="padding: 12px 0; font-weight: 600; font-size: 13px; line-height: 1.55; color: #486274;">${detalleAccion}</td></tr>
            </table>
          </div>

          <div style="padding: 18px 30px 28px; background: #f6fafc; border-top: 1px solid #dce7ee;">
            <p style="margin: 0; font-size: 12px; color: #6d8496;">
              Correo automatico del sistema de agendamiento de ${fromName}.
            </p>
          </div>
        </div>
      </div>
    `;
}

// Servicio de notificaciones por correo relacionadas con reservas.
// Estructura del archivo:
// 1. Correo al paciente/usuario cuando la reserva fue actualizada.
// 2. Correo al paciente/usuario cuando la reserva fue creada.
// 3. Correo interno al equipo cuando ocurre una accion sobre la reserva.



export default class NotificacionAgendamiento {
    // =========================================================
    // BLOQUE 1: CORREO AL PACIENTE/USUARIO POR ACTUALIZACION
    // =========================================================
    // Este correo se envia al paciente que ya tenia una reserva
    // y cuya fecha, hora o datos fueron modificados.
    static async enviarCorreoActualizacionReserva({
                                                      to,
                                                      nombreProfesional,
                                                      nombrePaciente,
                                                      apellidoPaciente,
                                                      rut,
                                                      telefono,
                                                      fechaInicio,
                                                      horaInicio,
                                                      fechaFinalizacion,
                                                      horaFinalizacion,
                                                      monto_reserva,
                                                      motivo_reserva,
                                                      estadoReserva,
                                                      id_reserva
                                                  }) {
        const { BREVO_API_KEY, CORREO_REMITENTE } = process.env;
        const { correoEmpresa, nombreEmpresa } = await obtenerDatosEmpresaConfig();

        if (!BREVO_API_KEY) {
            console.warn("[MAIL] BREVO_API_KEY no configurada. Correo no enviado.");
            return;
        }

        if (!to) {
            console.warn("[MAIL] Destinatario vacío. Correo no enviado.");
            return;
        }

        const emailOk = typeof to === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to);
        if (!emailOk) {
            console.warn("[MAIL] Email inválido:", to, "Correo no enviado.");
            return;
        }

        const fromEmail = CORREO_REMITENTE;
        const fromName = nombreEmpresa || "Sistema de Agendamiento";

        if (!fromEmail) {
            console.warn("[MAIL] CORREO_REMITENTE no configurado. Correo no enviado.");
            return;
        }

        const subject = `Tu cita en ${fromName} ha sido actualizada`;
        const logoUrl = construirUrlLogoCorreo(process.env.API_URL);

        const { urlConfirmar, urlCancelar } = construirEnlacesReservaToken({
            id_reserva,
            nombrePaciente,
            apellidoPaciente,
            fechaInicio,
            horaInicio
        });
        const empresa = nombreEmpresa || "Sistema de Agendamiento";

        const text =
            `Tu cita en ${empresa} ha sido actualizada.\n\n` +
            `Detalle actualizado:\n` +
            `• Nombre: ${nombrePaciente} ${apellidoPaciente}\n` +
            `• Profesional: ${nombreProfesional}\n` +
            `• RUT: ${rut}\n` +
            `• Teléfono: ${telefono}\n` +
            `• Inicio: ${fechaInicio} ${horaInicio}\n` +
            `• Término: ${fechaFinalizacion} ${horaFinalizacion}\n` +
            `• Motivo: ${motivo_reserva}\n` +
            `• Monto: $${monto_reserva}\n` +
            `• Estado: ${estadoReserva}\n\n` +
            `Te pedimos confirmar tu asistencia con la nueva fecha/hora usando los enlaces de este correo.\n` +
            `Si no puedes asistir, por favor cancela con anticipación.\n\n` +
            `Saludos, ${empresa}.`;

        const html = construirHtmlCorreoPaciente({
            accent: "#2c7fb8",
            eyebrow: "Actualizacion de Reserva",
            titulo: `Tu cita en ${fromName} fue actualizada`,
            subtitulo: "Hemos registrado cambios en tu agenda. Revisa el nuevo detalle clinico y confirma tu asistencia desde este mismo correo.",
            saludo: "Hola,",
            nombrePaciente: `${nombrePaciente} ${apellidoPaciente}`,
            nombreProfesional,
            rut,
            telefono,
            fechaInicio,
            horaInicio,
            fechaFinalizacion,
            horaFinalizacion,
            motivo_reserva,
            monto_reserva,
            estadoReserva,
            ctaTitulo: "Confirma el horario actualizado",
            ctaTexto: "tu reserva fue modificada y ya se encuentra actualizada en nuestro sistema.",
            urlConfirmar,
            urlCancelar,
            fromName,
            logoUrl
        });

        const payload = {
            sender: { name: fromName, email: fromEmail },
            to: [{ email: to }],
            replyTo: correoEmpresa ? { email: correoEmpresa, name: fromName } : undefined,
            subject,
            textContent: text,
            htmlContent: html
        };

        if (typeof fetch !== "function") {
            console.warn("[MAIL] Tu Node no tiene fetch (requiere Node 18+). Correo no enviado.");
            return;
        }

        console.log("[MAIL] Enviando actualización a:", to, "| id_reserva:", id_reserva, "| from:", fromEmail);

        const resp = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                "api-key": BREVO_API_KEY
            },
            body: JSON.stringify(payload)
        });

        if (!resp.ok) {
            const errText = await resp.text().catch(() => "");
            console.error("[MAIL] Brevo error:", resp.status, errText);
            return;
        }

        console.log("[MAIL] Actualización enviada OK a:", to, "| id_reserva:", id_reserva);
    }

    // =========================================================
    // BLOQUE 2: CORREO AL PACIENTE/USUARIO POR NUEVA RESERVA
    // =========================================================
    // Este correo se envia al paciente/usuario cuando la reserva
    // fue ingresada correctamente en el sistema.
    static async enviarCorreoConfirmacionReserva({
                                                     to,
                                                     nombreProfesional,
                                                     nombrePaciente,
                                                     apellidoPaciente,
                                                     rut,
                                                     telefono,
                                                     fechaInicio,
                                                     horaInicio,
                                                     fechaFinalizacion,
                                                     horaFinalizacion,
                                                     monto_reserva,
                                                     motivo_reserva,
                                                     estadoReserva,
                                                     id_reserva
                                                 }) {
        const { BREVO_API_KEY, API_URL, CORREO_REMITENTE } = process.env;
        const { correoEmpresa, nombreEmpresa } = await obtenerDatosEmpresaConfig();

        // No romper el flujo principal si falta configuración
        if (!BREVO_API_KEY) {
            console.warn("[MAIL] BREVO_API_KEY no configurada. Correo no enviado.");
            return;
        }

        if (!to) {
            console.warn("[MAIL] Destinatario vacío. Correo no enviado.");
            return;
        }

        const emailOk = typeof to === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to);
        if (!emailOk) {
            console.warn("[MAIL] Email inválido:", to, "Correo no enviado.");
            return;
        }

        // En Brevo, el 'from' debe ser un remitente verificado.
        const fromEmail = CORREO_REMITENTE;
        const fromName = nombreEmpresa || "Sistema de Agendamiento";

        if (!fromEmail) {
            console.warn("[MAIL] CORREO_REMITENTE no configurado. Correo no enviado.");
            return;
        }

        const subject = `Tu cita en ${fromName} ha sido registrada`;
        const logoUrl = construirUrlLogoCorreo(API_URL);

        // Construir URLs
        const { urlConfirmar, urlCancelar } = construirEnlacesReservaToken({
            id_reserva,
            nombrePaciente,
            apellidoPaciente,
            fechaInicio,
            horaInicio
        });
        const empresa = nombreEmpresa || "Sistema de Agendamiento";

        const text =
            `Tu cita en ${empresa} ha sido registrada.\n\n` +
            `Detalle de tu reserva:\n` +
            `• Nombre: ${nombrePaciente} ${apellidoPaciente}\n` +
            `• Profesional: ${nombreProfesional}\n` +
            `• RUT: ${rut}\n` +
            `• Teléfono: ${telefono}\n` +
            `• Inicio: ${fechaInicio} ${horaInicio}\n` +
            `• Término: ${fechaFinalizacion} ${horaFinalizacion}\n` +
            `• Motivo: ${motivo_reserva}\n` +
            `• Monto: $${monto_reserva}\n` +
            `• Estado: ${estadoReserva}\n\n` +
            `Te recordamos confirmar tu cita a través de los enlaces de este correo.\n` +
            `En caso de no poder asistir, te pedimos cancelarla con anticipación para poder reasignar ese horario a otro paciente.\n` +
            `Muchas gracias por tu colaboracion.\n\n` +
            `Saludos, ${empresa}.`;

        const html = construirHtmlCorreoPaciente({
            accent: "#4d8fb4",
            eyebrow: "Reserva Confirmada",
            titulo: `Tu cita en ${fromName} fue registrada`,
            subtitulo: "Tu agendamiento fue ingresado correctamente. A continuacion puedes revisar el detalle clinico de la atencion y gestionar tu asistencia.",
            saludo: "Hola,",
            nombrePaciente: `${nombrePaciente} ${apellidoPaciente}`,
            nombreProfesional,
            rut,
            telefono,
            fechaInicio,
            horaInicio,
            fechaFinalizacion,
            horaFinalizacion,
            motivo_reserva,
            monto_reserva,
            estadoReserva,
            ctaTitulo: "Gestiona tu asistencia",
            ctaTexto: "tu reserva fue registrada exitosamente en nuestra agenda.",
            urlConfirmar,
            urlCancelar,
            fromName,
            logoUrl
        });

        const payload = {
            sender: { name: fromName, email: fromEmail },
            to: [{ email: to }],
            replyTo: correoEmpresa ? { email: correoEmpresa, name: fromName } : undefined,
            subject,
            textContent: text,
            htmlContent: html
        };

        // Node 18+ trae fetch. Si tu runtime es más antiguo, actualiza Node.
        if (typeof fetch !== "function") {
            console.warn("[MAIL] Tu Node no tiene fetch (requiere Node 18+). Correo no enviado.");
            return;
        }

        console.log("[MAIL] Enviando a:", to, "| id_reserva:", id_reserva, "| from:", fromEmail);

        const resp = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                "api-key": BREVO_API_KEY
            },
            body: JSON.stringify(payload)
        });

        if (!resp.ok) {
            const errText = await resp.text().catch(() => "");
            console.error("[MAIL] Brevo error:", resp.status, errText);
            return;
        }

        console.log("[MAIL] Enviado OK a:", to, "| id_reserva:", id_reserva);
    }

    // =========================================================
    // BLOQUE 3: CORREO INTERNO AL EQUIPO / NEGOCIO
    // =========================================================
    // Este correo NO va al paciente.
    // Va al contactoEmail configurado en datos_empresa para
    // avisar al equipo que una cita fue agendada, actualizada,
    // confirmada o cancelada.
    static async enviarCorreoConfirmacionEquipo({
                                                    nombreProfesional,
                                                    nombrePaciente,
                                                    apellidoPaciente,
                                                    fechaInicio,
                                                    horaInicio,
                                                    monto_reserva,
                                                    motivo_reserva,
                                                    accion, // "CONFIRMADA", "CANCELADA" o "AGENDADA"
                                                    id_reserva
                                                }) {
        const { BREVO_API_KEY, CORREO_REMITENTE } = process.env;
        const { correoEmpresa, nombreEmpresa } = await obtenerDatosEmpresaConfig();

        if (!BREVO_API_KEY) {
            console.warn("[MAIL EQUIPO] BREVO_API_KEY no configurada. Correo no enviado.");
            return;
        }

        const fromEmail = CORREO_REMITENTE;
        const fromName = nombreEmpresa || "Sistema de Agendamiento";

        if (!fromEmail) {
            console.warn("[MAIL EQUIPO] CORREO_REMITENTE no configurado. Correo no enviado.");
            return;
        }

        const destinatario = correoEmpresa;
        if (!destinatario) {
            console.warn("[MAIL EQUIPO] contactoEmail no configurado en datos_empresa. Correo no enviado.");
            return;
        }
        const logoUrl = construirUrlLogoCorreo(process.env.API_URL);

        let subject, text, colorAccion, iconoAccion, textoAccion, detalleAccion;

        switch (accion) {
            case "CONFIRMADA":
                subject = `Cita CONFIRMADA por ${nombrePaciente} ${apellidoPaciente}`;
                textoAccion = "CONFIRMADA";
                iconoAccion = "✅";
                colorAccion = "#10b981";
                detalleAccion = "El paciente confirmó su cita desde el enlace del correo.";
                text = `El paciente ${nombrePaciente} ${apellidoPaciente} ha CONFIRMADO su cita.\n\n` +
                    `• ID Reserva: ${id_reserva}\n` +
                    `• Fecha: ${fechaInicio}\n` +
                    `• Hora: ${horaInicio}\n` +
                    `• Profesional: ${nombreProfesional}\n` +
                    `• Motivo: ${motivo_reserva}\n` +
                    `• Monto: $${monto_reserva}\n\n` +
                    `${detalleAccion}`;
                break;

            case "AGENDADA":
                subject = `Nueva Reserva (Agenda Clinica) - ${nombrePaciente} ${apellidoPaciente}`;
                textoAccion = "NUEVA RESERVA";
                iconoAccion = "🗓️";
                colorAccion = "#3b82f6"; // Azul para nueva reserva
                detalleAccion = "La reserva fue creada manualmente desde la agenda clínica.";
                text = `Se ha creado una nueva reserva desde la agenda clínica para ${nombrePaciente} ${apellidoPaciente}.\n\n` +
                    `• ID Reserva: ${id_reserva}\n` +
                    `• Fecha: ${fechaInicio}\n` +
                    `• Hora: ${horaInicio}\n` +
                    `• Profesional: ${nombreProfesional}\n` +
                    `• Motivo: ${motivo_reserva}\n` +
                    `• Monto: $${monto_reserva}\n\n` +
                    `${detalleAccion}`;
                break;

            case "ACTUALIZADA":
                subject = `Cita ACTUALIZADA - ${nombrePaciente} ${apellidoPaciente}`;
                textoAccion = "ACTUALIZADA";
                iconoAccion = "🔄";
                colorAccion = "#2563eb";
                detalleAccion = "La reserva fue actualizada desde la agenda clínica.";
                text = `Se actualizó una reserva para ${nombrePaciente} ${apellidoPaciente}.\n\n` +
                    `• ID Reserva: ${id_reserva}\n` +
                    `• Fecha: ${fechaInicio}\n` +
                    `• Hora: ${horaInicio}\n` +
                    `• Profesional: ${nombreProfesional}\n` +
                    `• Motivo: ${motivo_reserva}\n` +
                    `• Monto: $${monto_reserva}\n\n` +
                    `${detalleAccion}`;
                break;

            case "CANCELADA":
            default:
                subject = `Cita CANCELADA por ${nombrePaciente} ${apellidoPaciente}`;
                textoAccion = "CANCELADA";
                iconoAccion = "❌";
                colorAccion = "#ef4444";
                detalleAccion = "El paciente canceló su cita desde el enlace del correo.";
                text = `El paciente ${nombrePaciente} ${apellidoPaciente} ha CANCELADO su cita.\n\n` +
                    `• ID Reserva: ${id_reserva}\n` +
                    `• Fecha: ${fechaInicio}\n` +
                    `• Hora: ${horaInicio}\n` +
                    `• Profesional: ${nombreProfesional}\n` +
                    `• Motivo: ${motivo_reserva}\n` +
                    `• Monto: $${monto_reserva}\n\n` +
                    `${detalleAccion}`;
                break;
        }

        const html = construirHtmlCorreoEquipo({
            accent: colorAccion,
            titulo: `Cita ${textoAccion}`,
            subtitulo: detalleAccion,
            nombreProfesional,
            nombrePaciente,
            apellidoPaciente,
            fechaInicio,
            horaInicio,
            motivo_reserva,
            monto_reserva,
            id_reserva,
            detalleAccion,
            fromName,
            logoUrl
        });

        const payload = {
            sender: { name: fromName, email: fromEmail },
            to: [{ email: destinatario }],
            subject,
            textContent: text,
            htmlContent: html
        };

        if (typeof fetch !== "function") {
            console.warn("[MAIL EQUIPO] Tu Node no tiene fetch (requiere Node 18+). Correo no enviado.");
            return;
        }

        const resp = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                "api-key": BREVO_API_KEY
            },
            body: JSON.stringify(payload)
        });

        if (!resp.ok) {
            const errText = await resp.text().catch(() => "");
            console.error("[MAIL EQUIPO] Brevo error:", resp.status, errText);
            return;
        }

        console.log(`[MAIL EQUIPO] Notificación enviada: Cita ${textoAccion}`);
    }
}
