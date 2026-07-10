import DatosEmpresaController from "../controller/DatosEmpresaController.js";

import {Router} from "express";
const router = Router();

router.get("/seleccionartodos", DatosEmpresaController.seleccionarDatosEmpresa);
router.post("/seleccionarporid", DatosEmpresaController.seleccionarDatosEspecificos_porId);
router.post("/actualizar", DatosEmpresaController.actualizarDatos);



export default router;
