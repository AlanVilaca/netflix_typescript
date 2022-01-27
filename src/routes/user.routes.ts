import { Router } from "express";
const router = Router();
import UserController from "../controller/UserController";
const userController = new UserController();

router.post("/sign_up", userController.sign_up);

export default router;