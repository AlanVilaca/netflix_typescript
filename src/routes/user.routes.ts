import { Router } from "express";
const router = Router();
import UserController from "../controller/UserController";
import isAuthenticated from "../middleware/isAuthenticated";
const userController = new UserController();

router.post("/sign_up", userController.create);
router.delete("/user", isAuthenticated, userController.unActiveAccount);

export default router;