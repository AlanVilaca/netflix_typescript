import { Router } from "express";
const router = Router();
import UserController from "../controller/User";

router.post("/sign_up", new UserController().handle);

export default router;