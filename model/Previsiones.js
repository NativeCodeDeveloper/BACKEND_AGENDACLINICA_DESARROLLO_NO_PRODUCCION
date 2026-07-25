import DataBase from "../config/Database.js";

export default class Previsiones {
    constructor() {

    }
    async funcion_insertarPrevision(nombre_prevision, cobertura_prevision, descripcion_prevision) {
        try{
            const conexion = DataBase.getInstance();
            const consulta = 'insert into prevision (nombre_prevision, cobertura_prevision, descripcion_prevision) values (?,?,?)';
            const params = [nombre_prevision, cobertura_prevision, descripcion_prevision]
        return conexion.ejecutarQuery (consulta, params);
        } catch (error) {
            throw error;

        }
    }

    // SELECCION DE TODAS LAS PREVISIONES REGISTRADAS
    // NOTA: sin filtro por estado por ahora — la tabla `prevision` no tiene
    // todavia una columna de soft delete confirmada. Revisar BITACORA_AGENDACLINICA.md.
    async funcion_seleccionarTodasPrevisiones() {
        try {
            const conexion = DataBase.getInstance();
            const consulta = 'SELECT * FROM prevision';
            return conexion.ejecutarQuery(consulta);
        } catch (error) {
            throw error;

        }
    }
}