import { Router } from "express";
import multer from "multer";
const router = Router();
import ProfileController from "../controller/ProfileController";
const profileController = new ProfileController();
import uploadConfig from "../config/uploadConfig";

const upload = multer(uploadConfig);

router.post("/profile", upload.single("avatar"), profileController.update);

export default router;