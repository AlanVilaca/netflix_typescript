import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
const router = Router();
import UserController from "../controller/UserController";
import isAuthenticated from "../middleware/isAuthenticated";
const userController = new UserController();

router.post(
  "/sign_up",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      passwordConfirmation: Joi.string().required(),
    },
  }),
  userController.create
);
router.delete("/user", isAuthenticated, userController.unActiveAccount);

export default router;