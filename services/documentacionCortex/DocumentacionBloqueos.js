const documentacionBloqueos=`
# Guía de usuario: Bloqueo de Agenda

Esta guía explica cómo bloquear horarios de atención para que no se puedan tomar reservas en esos espacios. Sirve para vacaciones, reuniones, almuerzos, congresos, licencias, pausas administrativas o cualquier horario en que un profesional no atenderá pacientes.

## 1. ¿Para qué sirve un bloqueo?

Un bloqueo deja un horario como no disponible.

Ejemplo:

- Si la profesional Camila no atenderá el viernes de 10:00 a 12:00, se crea un bloqueo para ese día y horario.
- Si un profesional estará de vacaciones todos los lunes de un mes, se pueden generar varios bloqueos usando rango de fechas.

Cuando un horario está bloqueado, el sistema evita que se agenden citas en ese mismo espacio.

## 2. Dónde está la pantalla

Ingrese al módulo llamado Bloqueo de Agenda.

En la pantalla verá dos zonas principales:

- A la izquierda: una tarjeta blanca llamada Nuevo Bloqueo. Esta es la zona donde se crea un bloqueo nuevo.
- A la derecha: una tarjeta blanca llamada Bloqueos Activos. Esta es la zona donde se revisan los bloqueos ya creados.

El formulario de la izquierda sirve para crear bloqueos nuevos. La tabla de la derecha sirve para revisar y eliminar bloqueos existentes.

Si el usuario está perdido, indíquele primero que mire la mitad izquierda de la pantalla. Todo lo necesario para crear un bloqueo está dentro de esa tarjeta blanca.

En pantallas pequeñas o notebooks con menos ancho, las secciones pueden verse una debajo de la otra. En ese caso, primero aparece Nuevo Bloqueo y más abajo aparece Bloqueos Activos.

## 3. Partes importantes de la pantalla

### Encabezado

Arriba verá el título Bloqueo de Agenda y una breve explicación. También aparece un botón de información.

### Botón de información

El botón de información aparece en la parte superior derecha del encabezado. Sirve para recordar que debe seleccionar días en el calendario y luego definir el horario.

### Formulario Nuevo Bloqueo

Está en la columna izquierda. Se reconoce porque arriba dice Nuevo Bloqueo y tiene un icono de candado dentro de un recuadro morado claro.

Dentro de esa tarjeta, los campos están de arriba hacia abajo en este orden:

1. Profesional.
2. Días a bloquear.
3. Calendario o rango de fechas.
4. Rango horario.
5. Motivo del bloqueo.
6. Botón morado Ingresar Bloqueo(s).

El usuario debe completar el formulario en ese mismo orden para evitar errores.

### Tabla Bloqueos Activos

Está en la columna derecha. Se reconoce porque arriba dice Bloqueos Activos y tiene un icono de calendario dentro de un recuadro amarillo claro.

Arriba a la derecha de esta tarjeta pueden aparecer estos botones:

- Refrescar: texto morado. Recarga la tabla.
- Eliminar todos: texto rosado/rojo. Aparece solo si hay un profesional seleccionado y existen bloqueos para ese profesional.

La tabla muestra los bloqueos existentes con:

- Profesional.
- Motivo.
- Día.
- Horario.
- Botón de ver detalle.

El botón de ver detalle está al final derecho de cada fila. Es un icono de ojo de color morado.

## 4. Cómo elegir el profesional si hay muchos profesionales

El primer campo del formulario se llama Profesional. Está en la parte superior de la tarjeta Nuevo Bloqueo, en la columna izquierda.

Para elegir el profesional:

1. Haga clic en el campo que dice Selecciona un profesional.
2. Se abrirá una lista con los profesionales disponibles.
3. Busque el nombre del profesional que quiere bloquear.
4. Haga clic sobre ese nombre.
5. Confirme que el nombre elegido quedó visible en el campo Profesional.

Si hay muchos profesionales:

- Desplácese dentro de la lista hasta encontrar el nombre.
- Revise bien el nombre antes de guardar, porque el bloqueo se aplicará solo al profesional seleccionado.
- Si eligió el profesional incorrecto, vuelva a abrir el selector y elija el profesional correcto.
- Si no aparece el profesional, use el módulo de profesionales o contacte al administrador para revisar si está activo.

Importante: si el usuario tiene pocos box o pocos espacios físicos, el bloqueo no se elige por box en esta pantalla. Esta pantalla bloquea la agenda del profesional seleccionado. Por eso, el paso más importante es elegir correctamente el profesional.

Si necesita bloquear a varios profesionales, debe repetir el proceso por cada profesional. El sistema no bloquea automáticamente a todos al mismo tiempo desde este formulario.

## 5. Cómo crear un bloqueo para días específicos

Use esta opción cuando quiere elegir manualmente uno o varios días exactos.

Esta opción está pensada para casos como:

- Bloquear un solo día.
- Bloquear días sueltos que no siguen un patrón.
- Bloquear un feriado, reunión o ausencia puntual.

Pasos detallados:

1. Mire la tarjeta blanca de la izquierda llamada Nuevo Bloqueo.
2. En la parte superior de esa tarjeta, busque Profesional.
3. Haga clic en el selector que dice Selecciona un profesional.
4. Elija el profesional al que se le bloqueará la agenda.
5. Más abajo, busque la sección Días a bloquear.
6. Verá dos botones juntos: Días específicos y Rango de fechas.
7. Deje activo Días específicos. Cuando está activo, se ve con fondo blanco, texto morado y una pequeña sombra.
8. Debajo aparecerá el calendario.
9. Haga clic sobre cada día que desea bloquear.
10. Cada día seleccionado queda marcado y además aparece debajo como una etiqueta morada.
11. Si se equivocó en un día, baje un poco y presione la X dentro de la etiqueta morada de ese día.
12. Si quiere partir de nuevo, presione Limpiar todo, que aparece en color rosado a la derecha del contador de días.
13. Luego busque Rango horario.
14. En Desde, seleccione la hora en que empieza el bloqueo.
15. En Hasta, seleccione la hora en que termina el bloqueo.
16. Después busque Motivo del bloqueo.
17. Escriba una razón clara. Ejemplo: Vacaciones, Reunión, Congreso, Almuerzo.
18. Antes de guardar, mire el recuadro morado claro de resumen. Ahí verá cuántos bloqueos se crearán.
19. Presione el botón morado grande Ingresar Bloqueo(s), ubicado al final del formulario.

El botón principal para guardar es morado, ocupa todo el ancho del formulario y está al final de la sección Nuevo Bloqueo.

Si el usuario pregunta "¿dónde hago clic para bloquear días?", dígale:

Primero seleccione el profesional arriba a la izquierda. Después, en Días a bloquear, deje marcado Días específicos y haga clic directamente sobre los días del calendario. Los días elegidos aparecerán abajo en etiquetas moradas. Finalmente complete las horas, el motivo y presione el botón morado Ingresar Bloqueo(s).

## 6. Cómo crear bloqueos usando rango de fechas

Use esta opción cuando quiere bloquear varios días repetidos dentro de un periodo.

Ejemplo: bloquear todos los lunes y miércoles entre el 1 y el 30 de agosto.

Esta opción está pensada para casos como:

- Vacaciones por varios días.
- Bloquear todos los lunes de un mes.
- Bloquear todas las tardes de una semana.
- Bloquear días repetidos para un profesional.

Pasos detallados:

1. Mire la tarjeta blanca de la izquierda llamada Nuevo Bloqueo.
2. Seleccione el Profesional.
3. En Días a bloquear, haga clic en el botón Rango de fechas.
4. Cuando Rango de fechas está activo, se ve con fondo blanco, texto morado y una pequeña sombra.
5. Debajo aparecerá una caja gris clara con los campos Desde, Hasta y Días de la semana.
6. En Desde, seleccione la primera fecha del periodo.
7. En Hasta, seleccione la última fecha del periodo.
8. En Días de la semana, haga clic en las letras de los días que quiere bloquear:
   - L: lunes.
   - M: martes.
   - X: miércoles.
   - J: jueves.
   - V: viernes.
   - S: sábado.
   - D: domingo.
9. Las letras seleccionadas quedan con fondo morado y texto blanco.
10. Presione el botón Generar días.
11. El botón Generar días está debajo de las letras de la semana. Tiene borde morado punteado y texto morado.
12. Al presionarlo, el sistema calcula los días y los agrega al formulario.
13. Los días agregados aparecerán como etiquetas moradas debajo.
14. Complete Rango horario.
15. Complete Motivo del bloqueo.
16. Presione el botón morado grande Ingresar Bloqueo(s), ubicado al final del formulario.

El botón Generar días tiene borde morado punteado. Este botón no guarda todavía; solo agrega los días al formulario. Para guardar definitivamente debe presionar Ingresar Bloqueo(s).

Si el usuario pregunta "quiero bloquear muchos días y no entiendo cómo", dígale:

Use Rango de fechas. Primero elija Desde y Hasta, después marque las letras de los días de la semana, luego presione Generar días. Cuando vea las etiquetas moradas debajo, complete el horario y el motivo. El último paso siempre es presionar el botón morado Ingresar Bloqueo(s).

## 7. Cómo saber qué días están seleccionados

Cuando selecciona días, debajo del calendario aparece un contador como:

3 día(s) seleccionado(s)

También verá etiquetas moradas con cada día seleccionado.

Cada etiqueta tiene una X. Si se equivocó en un día, haga clic en la X de esa etiqueta para quitarlo.

Si quiere borrar todos los días seleccionados, presione Limpiar todo. Este texto aparece a la derecha del contador de días seleccionados y se ve en color rosado.

Las etiquetas moradas son la confirmación visual más importante. Si no aparecen etiquetas moradas, todavía no hay días seleccionados para guardar.

Si el usuario dice que hizo clic en el calendario pero no sabe si funcionó, pídale que revise debajo del calendario. Debe ver:

- El contador de días seleccionados.
- Una o más etiquetas moradas con las fechas.

Si no ve esas etiquetas, debe seleccionar nuevamente los días.

## 8. Diferencia entre Días específicos y Rango de fechas

Días específicos sirve para elegir días manualmente en el calendario.

Use Días específicos cuando:

- Quiere bloquear un solo día.
- Quiere bloquear pocos días.
- Los días no siguen un patrón.
- El usuario quiere hacer clic directamente en el calendario.

Rango de fechas sirve para generar varios días automáticamente.

Use Rango de fechas cuando:

- Quiere bloquear muchos días.
- Quiere bloquear ciertos días de la semana.
- Quiere bloquear todos los lunes, martes o viernes dentro de un periodo.
- Quiere evitar hacer clic día por día.

Regla simple para explicar al usuario:

- Si son pocos días: use Días específicos.
- Si son muchos días o se repiten por semana: use Rango de fechas.

## 9. Límite de fechas

El sistema permite bloquear desde hoy hasta máximo 3 meses hacia adelante.

En el formulario verá un aviso gris que dice Límite de bloqueo y muestra la fecha máxima permitida.

No podrá seleccionar días anteriores a hoy ni días posteriores a ese límite.

## 10. Rango horario

En Rango horario existen dos campos:

- Desde: hora en que comienza el bloqueo.
- Hasta: hora en que termina el bloqueo.

La hora Hasta siempre debe ser posterior a la hora Desde.

Ejemplo correcto:

- Desde: 09:00.
- Hasta: 11:00.

Ejemplo incorrecto:

- Desde: 12:00.
- Hasta: 10:00.

Si la hora de término es igual o anterior a la hora de inicio, el sistema mostrará una alerta.

## 11. Motivo del bloqueo

El motivo explica por qué ese horario no estará disponible.

Ejemplos recomendados:

- Vacaciones.
- Almuerzo.
- Reunión clínica.
- Congreso.
- Licencia médica.
- Capacitación.
- Trámite personal.

El motivo es obligatorio. Si no lo escribe, el sistema no permitirá guardar.

## 12. Qué ocurre al guardar

Cuando presiona Ingresar Bloqueo(s), el sistema intenta crear un bloqueo independiente por cada día seleccionado.

Mientras guarda, el botón cambia a un estado de carga y puede mostrar:

Bloqueando X día(s)...

Cuando termina, el formulario se limpia automáticamente:

- Se limpia el profesional.
- Se limpian los días seleccionados.
- Se limpian las horas.
- Se limpia el motivo.

Luego la tabla de Bloqueos Activos se actualiza.

## 13. Mensajes de éxito al guardar

### Se bloquearon X día(s) correctamente

Significa que todos los bloqueos fueron creados sin problemas.

### X día(s) bloqueados. Y no se bloquearon por citas o bloqueos previos

Significa que algunos días sí se guardaron y otros no.

Los que no se guardaron tenían una cita o bloqueo previo en el mismo horario.

## 14. Alertas que pueden aparecer al crear bloqueos

### Debes seleccionar un profesional

Aparece cuando intenta guardar sin elegir un profesional.

Qué hacer:

1. Vaya al campo Profesional.
2. Abra el selector.
3. Elija un profesional.
4. Intente guardar nuevamente.

### Completa todos los campos y selecciona al menos un día

Aparece cuando falta algún dato obligatorio.

Revise que tenga:

- Profesional seleccionado.
- Al menos un día seleccionado.
- Hora Desde.
- Hora Hasta.
- Motivo del bloqueo.

### La hora de término debe ser posterior a la hora de inicio

Aparece cuando la hora Hasta es menor o igual que la hora Desde.

Qué hacer:

- Corrija la hora Hasta para que quede después de la hora Desde.

### X día(s) superan el límite de 3 meses

Aparece cuando uno o más días seleccionados están fuera del rango permitido.

Qué hacer:

- Quite esos días.
- Use fechas dentro del límite indicado en el aviso gris del formulario.

### Ya existe una cita agendada o un bloqueo previo en ese horario

Aparece cuando ningún bloqueo pudo guardarse porque el horario ya estaba ocupado.

Puede ocurrir por dos razones:

- Ya existe una reserva/cita para ese profesional en ese día y horario.
- Ya existe otro bloqueo que se cruza con ese horario.

Qué hacer:

1. Revise la tabla Bloqueos Activos.
2. Revise la agenda del profesional.
3. Cambie la hora o el día.
4. Intente guardar nuevamente.

## 15. Alertas del modo Rango de fechas

### Debes definir una fecha de inicio y término

Aparece cuando presiona Generar días sin completar Desde y Hasta.

### Selecciona al menos un día de la semana

Aparece cuando eligió un rango, pero no marcó L, M, X, J, V, S o D.

### La fecha de término debe ser posterior al inicio

Aparece cuando la fecha Hasta es anterior a la fecha Desde.

### Solo puedes bloquear hasta 3 meses adelante

Aparece cuando el rango termina después del límite permitido.

### No hay días disponibles en ese rango para los días seleccionados

Aparece cuando la combinación de fechas y días de semana no genera ningún día válido.

Ejemplo:

- El rango no contiene el día de semana elegido.
- Las fechas seleccionadas ya quedaron fuera del periodo permitido.

### Se agregaron X día(s) al calendario

Este mensaje es positivo. Significa que el sistema agregó los días encontrados al formulario.

Importante: este mensaje no significa que los bloqueos ya estén guardados. Después debe presionar Ingresar Bloqueo(s).

## 16. Cómo revisar bloqueos activos

En la columna derecha está la tabla Bloqueos Activos.

Cada fila representa un bloqueo independiente.

La tabla muestra:

- Profesional.
- Motivo.
- Día.
- Horario.
- Un botón de ver detalle.

También puede hacer clic directamente sobre una fila para abrir el detalle.

El botón de ver detalle es un botón pequeño con icono de ojo. Está al extremo derecho de cada fila y se muestra en color morado.

## 17. Cómo filtrar bloqueos por profesional

Cuando selecciona un profesional en el formulario de la izquierda, la tabla de la derecha muestra los bloqueos de ese profesional.

Esto es importante cuando hay muchos profesionales. La tabla de la derecha responde al profesional seleccionado en el formulario de la izquierda.

Ejemplo:

- Si selecciona Dra. Andrea, la tabla muestra los bloqueos de Dra. Andrea.
- Si cambia a Dr. Pedro, la tabla cambia y muestra los bloqueos de Dr. Pedro.

Si no hay bloqueos, verá un mensaje indicando que no hay bloqueos registrados.

Si no hay profesional seleccionado, la tabla puede mostrar el mensaje:

Selecciona un profesional para ver sus bloqueos

Si el usuario no encuentra un bloqueo, debe revisar primero si está seleccionado el profesional correcto.

## 18. Botón Refrescar

El botón Refrescar está arriba a la derecha de la tabla Bloqueos Activos.

Es un texto/botón morado.

Sirve para volver a cargar la lista de bloqueos.

Use Refrescar si:

- Acaba de crear un bloqueo y quiere confirmar que aparece.
- Otro usuario pudo haber creado o eliminado bloqueos.
- La tabla parece no estar actualizada.

## 19. Cómo ver el detalle de un bloqueo

Tiene dos opciones:

1. Hacer clic sobre la fila del bloqueo.
2. Hacer clic en el botón morado con icono de ojo, ubicado al lado derecho de la fila.

Se abrirá una ventana llamada Detalle del Bloqueo.

En esa ventana verá:

- Profesional.
- Motivo.
- Día.
- Horario.

## 20. Cómo cerrar el detalle

Dentro de Detalle del Bloqueo, presione el botón Cerrar.

También puede hacer clic fuera de la ventana para cerrarla.

El botón Cerrar es blanco con borde gris.

## 21. Cómo eliminar un solo bloqueo

Use esta opción cuando quiere liberar solo un día u horario específico.

1. En la tabla Bloqueos Activos, busque el bloqueo.
2. Haga clic sobre la fila o sobre el icono de ojo.
3. Se abrirá Detalle del Bloqueo.
4. Revise que el profesional, día y horario sean correctos.
5. Presione el botón rojo Eliminar este día.

Si se elimina correctamente, verá el mensaje:

Bloqueo eliminado correctamente.

El horario quedará disponible nuevamente para reservas.

## 22. Alertas al eliminar un bloqueo

### Debe seleccionar el bloqueo a eliminar

Aparece si el sistema no recibió correctamente el bloqueo seleccionado.

Qué hacer:

- Cierre el detalle.
- Abra nuevamente el bloqueo desde la tabla.
- Intente eliminarlo otra vez.

### No se pudo eliminar el bloqueo

Aparece si el sistema no logró eliminar el bloqueo.

Qué hacer:

- Presione Refrescar.
- Revise si el bloqueo sigue en la tabla.
- Intente nuevamente.
- Si continúa el problema, contacte soporte.

### No se pudo eliminar el bloqueo. Contacte soporte

Aparece cuando hubo un error de comunicación o un problema inesperado.

Qué hacer:

- Verifique conexión a internet.
- Intente nuevamente.
- Si se repite, contacte soporte.

## 23. Cómo eliminar todos los bloqueos de un profesional

El botón Eliminar todos aparece arriba a la derecha de la tabla Bloqueos Activos, al lado de Refrescar.

Importante: este botón aparece solo cuando hay un profesional seleccionado y ese profesional tiene bloqueos.

Pasos:

1. Seleccione el profesional en el campo Profesional.
2. Revise que la tabla muestre los bloqueos de ese profesional.
3. Presione Eliminar todos.
4. Aparecerá una primera confirmación.
5. Presione el botón rojo Sí, continuar.
6. Aparecerá una segunda confirmación.
7. Si está completamente seguro, presione el botón rojo Sí, eliminar todo.

Esta acción elimina todos los bloqueos listados para ese profesional.

Los bloqueos de otros profesionales no se eliminan.

## 24. Confirmaciones al eliminar todos

### Primera confirmación

La primera ventana pregunta si desea eliminar todos los bloqueos del profesional seleccionado.

Botones:

- Cancelar: botón blanco con borde gris.
- Sí, continuar: botón rojo.

### Segunda confirmación

La segunda ventana indica que la acción no se puede deshacer.

Botones:

- Cancelar: botón blanco con borde gris.
- Sí, eliminar todo: botón rojo.

Mientras elimina, el botón puede mostrar:

Eliminando...

## 25. Mensajes al eliminar todos

### No hay bloqueos para eliminar

Aparece si intenta eliminar todos, pero la lista está vacía.

### Se eliminaron X bloqueo(s) correctamente

Significa que todos los bloqueos fueron eliminados.

### X eliminado(s). Y no se pudieron eliminar

Significa que algunos bloqueos se eliminaron y otros no.

Qué hacer:

1. Presione Refrescar.
2. Revise cuáles siguen apareciendo.
3. Intente eliminar manualmente los restantes.
4. Si el problema continúa, contacte soporte.

## 26. Cuándo no se puede crear un bloqueo

No podrá crear un bloqueo cuando:

- No seleccionó profesional.
- No seleccionó ningún día.
- Falta la hora Desde.
- Falta la hora Hasta.
- Falta el motivo.
- La hora Hasta no es posterior a Desde.
- La fecha está antes de hoy.
- La fecha supera el límite de 3 meses.
- Ya existe una cita en ese horario.
- Ya existe otro bloqueo en ese horario.
- Hubo un problema de conexión o servidor.

## 27. Relación entre bloqueos y reservas

Un bloqueo ocupa horario en la agenda del profesional.

Si hay un bloqueo, no debería poder agendarse una reserva en ese mismo rango.

Si ya existe una reserva, el sistema no dejará crear un bloqueo encima de esa reserva.

Esto evita que un profesional quede con una cita y un bloqueo al mismo tiempo.

## 28. Ejemplo práctico: bloquear vacaciones

Objetivo: bloquear todos los días hábiles de una semana por vacaciones.

1. Seleccione el profesional.
2. Cambie Días a bloquear a Rango de fechas.
3. En Desde, elija el primer día de vacaciones.
4. En Hasta, elija el último día de vacaciones.
5. Marque L, M, X, J y V.
6. Presione Generar días.
7. En Desde, indique 08:00.
8. En Hasta, indique 23:00 o el horario completo que corresponda.
9. En Motivo del bloqueo, escriba Vacaciones.
10. Presione Ingresar Bloqueo(s).

## 29. Ejemplo práctico: bloquear una reunión

Objetivo: bloquear una reunión de 13:00 a 14:00 para un solo día.

1. Seleccione el profesional.
2. Deje activo Días específicos.
3. En el calendario, haga clic en el día de la reunión.
4. En Desde, seleccione 13:00.
5. En Hasta, seleccione 14:00.
6. En Motivo del bloqueo, escriba Reunión.
7. Presione Ingresar Bloqueo(s).

## 30. Ejemplo práctico: bloquear varios profesionales

Objetivo: bloquear el mismo horario para más de un profesional.

El sistema no tiene un botón para bloquear todos los profesionales de una sola vez desde esta pantalla. Debe hacerlo uno por uno.

Pasos:

1. En la tarjeta izquierda Nuevo Bloqueo, seleccione el primer profesional.
2. Elija Días específicos o Rango de fechas.
3. Seleccione los días.
4. Complete Desde, Hasta y Motivo.
5. Presione el botón morado Ingresar Bloqueo(s).
6. Espere el mensaje de éxito.
7. Vuelva al campo Profesional.
8. Seleccione el segundo profesional.
9. Repita los mismos pasos.

Consejo para el usuario:

Antes de repetir el proceso, confirme en la tabla de la derecha que el bloqueo anterior quedó creado para el profesional correcto.

## 31. Ejemplo práctico: clínica con pocos box

Si la clínica tiene pocos box, esta pantalla no bloquea un box físico por sí solo. Lo que bloquea es la agenda de un profesional.

Ejemplo:

- Si un box estará ocupado por mantención y el profesional no debe atender en ese horario, debe crear un bloqueo para ese profesional.
- Si varios profesionales usan el mismo box y ninguno podrá atender, debe crear un bloqueo para cada profesional afectado.

Cómo explicarlo al usuario:

El bloqueo se hace por profesional. Si el problema afecta a un box compartido, seleccione cada profesional que usa ese box y cree el bloqueo en su agenda.

## 32. Recomendaciones para evitar errores

- Antes de guardar, revise siempre el profesional seleccionado.
- Confirme que las horas estén en el orden correcto.
- Use motivos claros para que otros usuarios entiendan por qué se bloqueó.
- Si bloqueará muchos días, use Rango de fechas.
- Si bloqueará días sueltos, use Días específicos.
- Después de guardar, revise la tabla Bloqueos Activos.
- Si algo no aparece, presione Refrescar.
- Antes de usar Eliminar todos, confirme que la tabla muestra el profesional correcto.

## 33. Colores y botones principales

- Morado fuerte: acción principal. El botón más importante es Ingresar Bloqueo(s). Está abajo del formulario izquierdo, ocupa todo el ancho y guarda el bloqueo.
- Morado claro: elementos seleccionados o información relacionada con bloqueo. Ejemplo: etiquetas de días seleccionados, resumen de cantidad de bloqueos y algunos iconos.
- Texto morado: acciones secundarias de consulta. Ejemplo: Refrescar y el icono de ojo para ver detalle.
- Borde morado punteado: botón Generar días en el modo Rango de fechas. Sirve para agregar días al formulario, no para guardar.
- Rojo o rosado: acciones de eliminación o peligro. Ejemplo: Eliminar este día, Eliminar todos, Sí, continuar y Sí, eliminar todo.
- Blanco con borde gris: acciones de cancelar o cerrar. Ejemplo: Cancelar y Cerrar.
- Gris claro: zonas informativas o campos de detalle. Ejemplo: aviso de límite de 3 meses, fondo de la tabla y cajas dentro de los modales.
- Amarillo claro: icono superior de la tabla Bloqueos Activos.

Regla visual:

- Morado: crear, seleccionar, revisar o continuar.
- Rojo/rosado: eliminar.
- Blanco/gris: cancelar, cerrar o información.

## 34. Qué decirle al usuario si está perdido

Si el usuario no sabe qué hacer, guíelo así:

1. Mire la tarjeta blanca de la izquierda llamada Nuevo Bloqueo.
2. Arriba de esa tarjeta, seleccione el profesional.
3. Si son pocos días, deje marcado Días específicos y haga clic en el calendario.
4. Si son muchos días, marque Rango de fechas, elija Desde y Hasta, marque las letras de los días y presione Generar días.
5. Revise que aparezcan etiquetas moradas debajo del calendario o del rango.
6. En Rango horario, complete Desde y Hasta.
7. En Motivo del bloqueo, escriba la razón.
8. Al final de la tarjeta izquierda, presione el botón morado grande Ingresar Bloqueo(s).
9. Luego mire la tarjeta derecha Bloqueos Activos para confirmar que el bloqueo apareció.

Si quiere eliminar un bloqueo:

1. Busque el bloqueo en la tabla de la derecha.
2. Haga clic en la fila o en el icono de ojo morado.
3. Presione Eliminar este día si quiere borrar solo ese bloqueo.
4. Use Eliminar todos solo si quiere borrar todos los bloqueos del profesional seleccionado.
`;

export default documentacionBloqueos;
