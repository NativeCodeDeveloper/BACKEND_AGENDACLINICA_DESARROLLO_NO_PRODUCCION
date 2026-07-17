const DocumentacionAgenda = `
# Guía de usuario: Calendario y Reservas

Esta guía explica cómo utilizar el módulo Calendario de AgendaClínica. Está dirigida a usuarios administrativos y profesionales de salud. No requiere conocimientos técnicos.

## 1. ¿Para qué sirve el Calendario?

El Calendario permite organizar la agenda diaria de cada profesional del centro clínico. Desde esta pantalla es posible:

- Consultar las reservas de un profesional.
- Cambiar entre vistas de mes, semana, día y lista de agenda.
- Crear reservas nuevas.
- Consultar y editar reservas existentes.
- Mover una reserva a otro horario.
- Cambiar la duración de una reserva.
- Cambiar el estado de atención de una reserva.
- Eliminar una reserva.
- Crear bloqueos de horario.
- Consultar y eliminar bloqueos existentes.
- Filtrar visualmente las reservas según su estado.

La información mostrada siempre corresponde al profesional seleccionado en la parte superior de la pantalla.

## 2. Antes de comenzar

Para trabajar correctamente en el Calendario deben existir:

- Al menos un profesional activo.
- Una agenda seleccionada.
- Horarios de atención configurados.
- Servicios y tarifas configurados para el profesional cuando se quiera crear una reserva.

Si no existen profesionales o servicios configurados, el sistema puede mostrar un mensaje indicando que no hay profesionales o servicios ingresados.

## 3. Seleccionar la agenda de un profesional

En la parte superior se encuentra el selector Seleccionar Agenda.

1. Abra el selector.
2. Elija al profesional que desea consultar.
3. Espere mientras el sistema carga sus reservas, bloqueos, servicios y tarifas.

Al cambiar de profesional, el Calendario reemplaza la información anterior por la agenda del profesional seleccionado.

Si intenta seleccionar un horario sin haber escogido un profesional, el sistema mostrará el mensaje Primero debes seleccionar un profesional.

## 4. Partes principales de la pantalla

La pantalla está organizada en las siguientes áreas:

### Encabezado

Muestra el título Calendario, el período actualmente visible, el selector de profesional y el botón Nueva reserva.

### Navegación por fechas

Incluye los botones:

- Anterior: retrocede un mes, una semana o un día, según la vista activa.
- Hoy: vuelve inmediatamente a la fecha actual.
- Siguiente: avanza un mes, una semana o un día, según la vista activa.

### Selector de vista

En computadores permite elegir Mes, Semana, Día o Agenda.

### Grilla o lista de reservas

Muestra las reservas y bloqueos del profesional seleccionado.

### Filtros por estado

Permiten destacar reservas de determinados estados.

### Gestión de bloqueos

En la parte inferior se muestra la lista de bloqueos correspondientes al profesional seleccionado.

## 5. Vistas disponibles

### Vista Mes

Muestra el mes completo.

- Cada reserva aparece resumida con el nombre del paciente y el color de su estado.
- Los bloqueos aparecen en color gris.
- Cuando un día contiene más elementos de los que caben en pantalla, aparece la opción Ver más.
- Al seleccionar Ver más se abre una lista con los horarios de ese día.
- Desde esa lista se puede abrir una reserva o revisar el detalle de un bloqueo.

### Vista Semana

Muestra los días de una semana en columnas y las horas en filas.

- Es la vista inicial en computadores.
- Permite seleccionar espacios disponibles.
- Permite mover reservas arrastrándolas.
- Permite modificar su duración desde los bordes de la reserva.
- Los bloqueos se muestran como zonas grises no disponibles.

### Vista Día

Muestra un solo día con mayor espacio para cada reserva.

- Es útil para revisar detalles como paciente, horario, servicio, profesional y estado.
- En dispositivos móviles es la única vista disponible.

### Vista Agenda

Muestra una lista cronológica agrupada por fecha.

- Incluye las reservas ordenadas por hora.
- Muestra nombre del paciente, profesional y estado.
- No incluye los bloqueos dentro de esta lista.
- Al seleccionar una reserva se abre su panel de edición.

## 6. Horario visible y precisión de selección

El Calendario trabaja entre las 08:00 y las 23:00 horas.

Los horarios pueden seleccionarse en intervalos de 15 minutos. Por ejemplo:

- 09:00
- 09:15
- 09:30
- 09:45

No se permite crear, mover ni extender una reserva fuera del rango de 08:00 a 23:00.

## 7. Cómo interpretar las reservas

Cada reserva utiliza un color relacionado con su estado. Los estados disponibles son:

- Reservada: la hora fue creada y está pendiente de las siguientes etapas.
- Confirmada: la asistencia fue confirmada.
- Asiste: el paciente se presentó a la atención.
- No asiste: el paciente no se presentó.
- Finalizado: la atención fue terminada.
- Anulada: la reserva fue anulada.

La cantidad de información visible depende del espacio disponible:

- Las reservas muy breves muestran principalmente hora y paciente.
- Las reservas más largas pueden mostrar estado, paciente, servicio y profesional.
- Al mantener el puntero sobre una reserva se puede ver información resumida adicional.

Los bloqueos se distinguen por su color gris y el símbolo de candado.

## 8. Filtrar reservas por estado

En la parte inferior se encuentran filtros como:

- Todas
- Reservada
- Confirmada
- Asiste
- No asiste
- Finalizado
- Anulada
- Bloqueado

### Funcionamiento de los filtros

- Si está seleccionada la opción Todas, se muestran normalmente todos los estados.
- Al seleccionar un estado, las reservas de otros estados se atenúan en las vistas de calendario.
- Es posible seleccionar más de un estado.
- Si se desactivan todos los filtros específicos, el sistema vuelve automáticamente a mostrar todos.
- En la vista Agenda solo aparecen en la lista las reservas que coinciden con los filtros seleccionados.

Los filtros no eliminan ni modifican reservas. Solo cambian temporalmente su visualización.

## 9. Crear una reserva desde el botón Nueva reserva

1. Seleccione la agenda del profesional.
2. Presione Nueva reserva.
3. El sistema propondrá un bloque inicial de 30 minutos.
4. Si la hora actual está dentro de la jornada permitida, se propone el siguiente bloque disponible redondeado a media hora.
5. Si la hora actual está fuera del rango permitido, se propone el día siguiente a las 09:00.
6. Se abrirá un panel lateral llamado Nueva reserva.
7. Revise o modifique la fecha, hora de inicio y hora de término.
8. Complete los datos del paciente.
9. Seleccione el servicio o tipo de atención.
10. Revise el monto asociado al servicio.
11. Presione Agendar.

## 10. Crear una reserva seleccionando un horario

También puede crear una reserva directamente sobre el Calendario:

1. Seleccione al profesional.
2. Ubique un espacio disponible.
3. Haga clic y arrastre sobre el rango horario deseado.
4. Mientras selecciona, el sistema muestra una vista previa con fecha, inicio y término.
5. Si el horario es válido, se abrirá el panel Nueva reserva.
6. Complete la información solicitada.
7. Presione Agendar.

El sistema rechazará la selección si corresponde a una fecha pasada, está fuera del horario permitido o se superpone con otra reserva o bloqueo.

## 11. Datos solicitados al crear una reserva

### Horario

- Fecha.
- Hora de inicio.
- Hora de término.
- Profesional seleccionado.

Cuando se cambia la hora de inicio desde el panel, el sistema conserva inicialmente la duración original y desplaza la hora de término.

### Datos del paciente

- Nombre.
- Apellido.
- RUT.
- Teléfono.
- Correo electrónico, opcional.

El RUT se normaliza antes de guardar la reserva. El teléfono es obligatorio y el correo puede quedar sin indicar.

### Servicio

El panel muestra los servicios y tarifas configurados para el profesional seleccionado.

Al elegir un servicio:

- Se registra como motivo o tipo de atención.
- Se carga automáticamente su valor.
- El monto se muestra debajo del selector.

Si el profesional no tiene servicios o tarifas disponibles, puede ser necesario configurarlos antes de agendar.

## 12. Reglas para crear una reserva

Una reserva solo puede guardarse cuando cumple todas estas condiciones:

- Tiene profesional seleccionado.
- Tiene nombre y apellido del paciente.
- Tiene RUT.
- Tiene teléfono.
- Tiene servicio o motivo de reserva.
- Tiene fecha y horas válidas.
- Comienza y termina el mismo día.
- Está dentro del horario de 08:00 a 23:00.
- La hora de término es posterior a la hora de inicio.
- No corresponde a una fecha pasada.
- No se superpone con otra reserva.
- No se superpone con un bloqueo.

Cuando se guarda correctamente, aparece el mensaje Se ha ingresado correctamente el agendamiento y el Calendario se actualiza.

## 13. Abrir y editar una reserva existente

Para revisar una reserva:

1. Seleccione la reserva en cualquier vista.
2. Se abrirá el panel lateral Editar reserva.
3. Revise los datos del paciente, horario, servicio, monto y estado.

Desde este panel se puede modificar:

- Fecha.
- Hora de inicio.
- Hora de término.
- Nombre y apellido.
- RUT.
- Teléfono.
- Correo electrónico.
- Servicio.
- Estado de la reserva.

Después de realizar cambios, presione Actualizar.

Si la actualización es correcta, aparece el mensaje Se ha actualizado la reserva correctamente.

## 14. Cambiar el estado de una reserva

Al editar una reserva aparecen las siguientes acciones:

- Confirmar.
- Asiste.
- No asiste.
- Finalizar.
- Anular.

Al seleccionar una de estas opciones, el sistema actualiza el estado de la reserva. Esta acción no es lo mismo que eliminarla.

Anular cambia el estado a Anulada. Eliminar quita la reserva del Calendario.

## 15. Mover una reserva mediante arrastre

En las vistas Semana y Día se puede mover una reserva:

1. Mantenga presionada la reserva.
2. Arrástrela hasta el nuevo horario.
3. Suéltela en el espacio deseado.

El cambio se guarda directamente si el nuevo horario es válido.

No se puede mover una reserva:

- A una fecha u hora pasada.
- Fuera del rango de 08:00 a 23:00.
- Sobre otra reserva.
- Sobre un bloqueo.

Los bloqueos no se pueden mover mediante arrastre.

## 16. Cambiar la duración desde el Calendario

En las vistas Semana y Día se puede modificar la duración de una reserva usando su borde de ajuste.

1. Ubique el borde superior o inferior de la reserva.
2. Arrástrelo hasta la nueva hora de inicio o término.
3. Suelte cuando el rango sea correcto.

El cambio se guarda directamente si no existe conflicto.

Los bloqueos no se pueden redimensionar desde la grilla.

## 17. Eliminar una reserva

1. Abra la reserva.
2. Presione Eliminar en el panel lateral.
3. Si la operación termina correctamente, la reserva desaparece del Calendario.

La opción Eliminar es diferente de Anular. Si solamente necesita registrar que la cita fue cancelada, utilice el estado Anulada cuando corresponda al procedimiento del centro.

## 18. Crear un bloqueo rápido desde el Calendario

El panel Nueva reserva también permite bloquear el horario seleccionado.

1. Seleccione un espacio libre en el Calendario.
2. En el panel lateral busque Bloqueo rápido, que es opcional.
3. Escriba el motivo, por ejemplo vacaciones, reunión o pausa.
4. Al ingresar un motivo, el botón Agendar cambia a Bloquear horario.
5. Presione Bloquear horario.

Cuando se utiliza esta opción, el sistema crea un bloqueo y no una reserva de paciente.

El bloqueo debe:

- Tener un profesional seleccionado.
- Tener fecha, inicio y término.
- Tener un motivo.
- Estar dentro del horario de 08:00 a 23:00.
- No superponerse con una reserva o bloqueo existente.

## 19. Consultar bloqueos existentes

Los bloqueos pueden revisarse de tres maneras:

- Como zonas grises dentro de las vistas Mes, Semana o Día.
- Seleccionando directamente un bloqueo en el Calendario.
- En la tabla Bloqueos ubicada debajo del Calendario.

La tabla muestra:

- Motivo.
- Fecha de inicio.
- Hora de inicio.
- Fecha de término.
- Hora de término.
- Acción Ver detalle.

El botón Mostrar u Ocultar permite expandir o contraer la tabla. Gestionar bloqueos desplaza la pantalla hacia esta sección.

## 20. Ver y eliminar un bloqueo

1. Seleccione el bloqueo en el Calendario o presione Ver detalle en la tabla.
2. Se abrirá una ventana con profesional, motivo, fecha y horario.
3. Presione Cerrar si solo desea consultarlo.
4. Presione Eliminar Bloqueo si desea quitarlo.

Cuando la eliminación termina correctamente, el Calendario y la tabla se actualizan.

## 21. Uso en teléfonos y pantallas pequeñas

En dispositivos móviles:

- El Calendario utiliza únicamente la vista Día.
- Se muestra un selector de fecha para cambiar rápidamente de jornada.
- La selección de horarios puede requerir mantener presionado brevemente antes de arrastrar.
- El panel de reserva ocupa el ancho disponible de la pantalla.
- Los botones Anterior, Hoy y Siguiente siguen disponibles.

Las vistas Mes, Semana y Agenda están disponibles únicamente en pantallas de mayor tamaño.

## 22. Atajos de teclado disponibles

Cuando el cursor no está dentro de un campo de texto, puede utilizar:

- T: volver a hoy.
- 1: abrir la vista Mes en computadores.
- 2: abrir la vista Semana en computadores.
- 3: abrir la vista Día.
- 4: abrir la vista Agenda en computadores.
- Escape: cerrar el panel o cancelar la selección temporal.

Para crear una reserva utilice el botón Nueva reserva o seleccione un horario directamente en la grilla.

## 23. Mensajes frecuentes y qué significan

### Primero debes seleccionar un profesional

No existe una agenda activa. Seleccione un profesional antes de crear o mover una reserva.

### Debe llenar todos los campos

Falta al menos un dato obligatorio. Revise paciente, RUT, teléfono, servicio, fecha y horario.

### No es posible agendar en fechas pasadas

La fecha seleccionada es anterior a hoy. Elija una fecha actual o futura.

### Solo puedes agendar entre 08:00 y 23:00 horas

El inicio o el término queda fuera de la jornada permitida.

### La hora de término debe ser posterior al inicio

La hora final es igual o anterior a la hora inicial.

### Esta hora tiene un bloqueo u hora preexistente

El rango elegido se superpone con una reserva o bloqueo existente. Seleccione otro horario.

### Solo se permite agendar si es en el mismo día

La reserva comienza y termina en fechas distintas. Ajuste ambas horas para que correspondan al mismo día.

### No fue posible identificar el profesional seleccionado

Vuelva a seleccionar la agenda del profesional e intente nuevamente.

### El servidor no responde o no hay conexión

Espere unos momentos e intente nuevamente. Si el problema continúa, contacte a soporte.

## 24. Preguntas frecuentes

### ¿Por qué no puedo seleccionar un espacio vacío?

Compruebe que exista un profesional seleccionado, que el horario no sea pasado, que esté entre 08:00 y 23:00 y que no exista un bloqueo o reserva superpuesta.

### ¿Por qué no aparece un servicio para agendar?

Los servicios y tarifas dependen del profesional seleccionado. Deben estar configurados previamente en AgendaClínica.

### ¿Por qué algunas reservas se ven transparentes?

Existe uno o más filtros de estado activos. Presione Todas para recuperar la visualización normal.

### ¿Por qué no veo los bloqueos en la vista Agenda?

La vista Agenda presenta solamente reservas. Los bloqueos pueden verse en las vistas de calendario o en la tabla inferior.

### ¿Puedo mover un bloqueo arrastrándolo?

No. Actualmente solo las reservas admiten movimiento y cambio de duración desde la grilla.

### ¿Puedo crear una reserva que termine al día siguiente?

No. La reserva debe comenzar y terminar durante el mismo día.

### ¿Qué ocurre si llego desde la ficha o búsqueda de un paciente?

El formulario puede aparecer con nombre, apellido, RUT, teléfono o correo precargados. Revise los datos antes de confirmar.

### ¿El correo electrónico es obligatorio?

No. Puede dejarse sin indicar. El teléfono sí es obligatorio.

### ¿Cambiar el estado a Anulada elimina la reserva?

No. Anulada es un estado. La acción Eliminar es una operación diferente.

## 25. Límites actuales del módulo

- Los horarios disponibles están limitados al rango de 08:00 a 23:00.
- Las reservas deben comenzar y terminar el mismo día.
- Los bloqueos no se pueden mover ni redimensionar mediante arrastre.
- La vista móvil está limitada al modo Día.
- La selección de tipo de consulta independiente y modalidad Presencial u Online no está habilitada actualmente en el formulario; el usuario trabaja con el servicio o tipo de atención asociado a la tarifa del profesional.
- Para crear una reserva deben existir servicios y tarifas configurados para el profesional.

## 26. Recomendaciones de uso

- Verifique siempre el profesional antes de crear o mover una reserva.
- Revise fecha, inicio y término antes de guardar.
- Utilice los estados para mantener actualizado el avance de cada atención.
- Use Anular cuando quiera conservar la reserva con estado cancelado y Eliminar solamente cuando corresponda retirarla del Calendario.
- Revise la tabla de bloqueos antes de configurar ausencias o pausas nuevas.
- Si una operación falla repetidamente, anote el mensaje mostrado y contacte a soporte.
`;

export default DocumentacionAgenda;
