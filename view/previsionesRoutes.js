import PrevisionController from '../controller/PrevisionesController.js';
import {Router} from "express";

const router = Router();

router.post("/insertarPrevision", PrevisionController.insertarPrevisiones);
router.get("/seleccionarPrevisiones", PrevisionController.seleccionarTodasPrevisiones);



export default router;
