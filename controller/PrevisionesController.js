import previsionesModel from '../model/Previsiones.js';

export default class PrevisionesController {
    constructor() {

    }

    static async insertarPrevisiones(req, res) {
        try {
            const {nombre_prevision, cobertura_prevision, descripcion_prevision} = req.body;


            if (!nombre_prevision || !cobertura_prevision || !descripcion_prevision) {
                return res.status(400).json({
                    message: 'sindata'
                });
            }
            const clasePrevision = new previsionesModel();
            const respuesta = await clasePrevision.funcion_insertarPrevision(nombre_prevision, cobertura_prevision, descripcion_prevision)


            if (respuesta.affectedRows > 0) {
                return res.status(200).json({
                    message: true
                })
            } else {
                return res.status(500).json({
                    message: false
                })
            }


        } catch (error) {
        console.error(error);   // <- temporal, para depurar
        res.status(500).json({message: 'error'});

        }

    }

    static async seleccionarTodasPrevisiones(req, res) {
        try {
            const clasePrevision = new previsionesModel();
            const resultado = await clasePrevision.funcion_seleccionarTodasPrevisiones();

            return res.status(200).json(resultado);

        } catch (error) {
            console.error(error);
            res.status(500).json({message: 'error'});
        }
    }

}
