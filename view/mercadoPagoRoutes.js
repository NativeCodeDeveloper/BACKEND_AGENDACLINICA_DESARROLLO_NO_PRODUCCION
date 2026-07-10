import { Router } from 'express';
import {createOrder, recibirPago} from "../controller/MercadoPagoController.js";
import { obtenerDatosEmpresaConfig } from "../services/datosEmpresaConfig.js";


const router = Router();


// RUTA PARA RECONOCER LA RUTA DE PAGAR CON MERCADO PAGO DESDE EL BACKEND
router.get('/', (req, res) => {res.send("Bienvenido a pasarela de Pago")})

// RUTA PARA CREAR LA ORDEN
router.post('/create-order', createOrder);

// WEBHOOK DE ESTADO PAGADO
router.post('/notificacionPago', recibirPago);

async function redirigirPago(res, ruta) {
    const { frontUrl } = await obtenerDatosEmpresaConfig();
    const baseUrl = String(frontUrl || "/").replace(/\/$/, "");
    return res.redirect(`${baseUrl}${ruta}`);
}

router.get('/success', async (req, res) => {
    return redirigirPago(res, "/pagoAprobado");
});

router.get('/failure', async (req, res) => {
    return redirigirPago(res, "/pagoRechazado");
});

router.get('/pending', async (req, res) => {
    return redirigirPago(res, "/pagoPendiente");
});


export default router;
