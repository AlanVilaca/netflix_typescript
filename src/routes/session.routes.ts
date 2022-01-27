import { Router } from "express";
const router = Router();
import SessionController from "../controller/SessionController";
const sessionController = new SessionController();

router.post("/login", sessionController.login);

export default router;