import express from 'express';
import CortexController from "../controller/CortexController.js";

const router = express.Router();

router.post("/mensaje", CortexController.enviarMensaje);


export default router;
