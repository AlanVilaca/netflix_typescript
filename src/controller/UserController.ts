import { Request, Response } from "express";
import AppError from "../errors/AppError";
import { validateEmail, validatePassword } from "../helper/user.helper";
import CreateUser from "../services/User/CreateUser";
import UnActiveAccount from "../services/User/UnActiveAccount";
import { instanceToInstance } from "class-transformer";

export default class User {
  async create(req:Request, res: Response): Promise<Response> {
    const { name, email, password, passwordConfirmation } = req.body;

    if (password !== passwordConfirmation) throw new AppError("Password and password confirmation are different");
    if (!validateEmail(email)) throw new AppError("Email bad formatted");
    if (!validatePassword(password)) throw new AppError("Password weak");

    const createUserService = new CreateUser();

    const user = await createUserService.execute({ name, email, password });
    return res.json(instanceToInstance(user));
  }

  async unActiveAccount(req: Request, res: Response) {
    const id = req.user.id;
    const unActiveAccountService = new UnActiveAccount();
    await unActiveAccountService.execute(id);

    return res.sendStatus(200);
  }
}