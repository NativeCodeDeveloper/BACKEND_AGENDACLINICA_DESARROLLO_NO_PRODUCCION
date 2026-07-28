import CotizacionPaciente from "../model/CotizacionesPacientes.js";
import DetalleCotizacion from "../model/DetalleCotizacion.js"
import EnviarPdfService from "../services/envioCotizacionCorreo.js";
import DatosEmpresa from "../model/DatosEmpresa.js"

export default class EnvioCotizacionesController {
    constructor() {
    }

    static async  enviarCotizacionPorCorreo(req, res) {
        try {
            const {
                id_cotizacion_paciente,
                fecha_emision
            } = req.body;


            console.log(` `);
            console.log(`RECIBIDO EN EL CONTROLLER PARA EL ENVIO DE COTIZACION:`);
            console.log(req.body);
            console.log(` `);

            if(!id_cotizacion_paciente || !fecha_emision) {
                return res.status(400).send({error: "sindata"});
            }
            const CotizacionPacienteModel = new CotizacionPaciente();
            const resultadoBusquedaCotizacion = await CotizacionPacienteModel.seleccionarCotizacionEspecifica(id_cotizacion_paciente);


            const DetalleCotizacionModel = new DetalleCotizacion();
            const resultadoBusquedaDetalle = await DetalleCotizacionModel.seleccionarPor_id_cotizacion(id_cotizacion_paciente);


            const DatosEmpresaModel = new DatosEmpresa();
            const resultadoBusquedaDatosEmpresa = await DatosEmpresaModel.seleccionarDatosEmpresa();

            const sucessBoolean = await EnviarPdfService.enviarPdf(resultadoBusquedaCotizacion, resultadoBusquedaDetalle, resultadoBusquedaDatosEmpresa, fecha_emision);

            console.log(` `);
            console.log(` `);
            console.log(`RESULTADO DEL ENVIO DE COTIZACION:`);
            console.log(sucessBoolean);
            console.log(` `);
            console.log(` `);

            if(sucessBoolean === true){
                return res.status(200).send({message: true});
            }else{
                return res.status(400).send({message: false});
            }

        }catch (e) {
            return res.status(500).send({error: e});
        }

    }
}