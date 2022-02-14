import { Router } from "express";
const router = Router();
import ProfileController from "../controller/ProfileController";
const profileController = new ProfileController();
import isAuthenticated from "../middleware/isAuthenticated";

router.get("/profile", isAuthenticated, profileController.showProfiles);

export default router;