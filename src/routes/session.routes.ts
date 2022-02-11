import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
const router = Router();
import SessionController from "../controller/SessionController";
const sessionController = new SessionController();

router.post(
  "/login",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  sessionController.login
);

export default router;