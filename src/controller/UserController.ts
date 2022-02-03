import { Request, Response } from "express";
import { validateEmail, validatePassword } from "../helper/user.helper";
import CreateUser from "../services/User/CreateUser";
import UnActiveAccount from "../services/User/UnActiveAccount";

export default class User {
  async create(req:Request, res: Response) {
    const { name, email, password, passwordConfirmation } = req.body;

    if (password !== passwordConfirmation) return res.status(400).json("Password and password confirmation are different");
    if (!validateEmail(email)) return res.status(400).json("Email bad formatted");
    if (!validatePassword(password)) return res.status(400).json("Password weak");

    const service = new CreateUser();

    const result = await service.execute({ name, email, password });
    if (result instanceof Error) {
      return res.status(400).json({err: result.message});
    }

    return res.json(result);
  }

  async unActiveAccount(req: Request, res: Response) {
    const id = req.user.id;
    const service = new UnActiveAccount();
    const result = await service.execute(id);
    if (result instanceof Error) {
      return res.status(400).json({err: result.message});
    }

    return res.sendStatus(200);
  }
}