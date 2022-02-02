import { Request, Response } from "express";
import { validateEmail, validatePassword } from "../helper/user.helper";
import CreateUser from "../services/User/CreateUser";

export default class User {
  async sign_up(req:Request, res: Response) {
    const {name, email, password, passwordConfirmation} = req.body;

    if (password !== passwordConfirmation) return res.status(400).json("Password and password confirmation are different");
    if (!validateEmail(email)) return res.status(400).json("Email bad formatted");
    if (!validatePassword(password)) return res.status(400).json("Password weak");

    const service = new CreateUser();

    const result = await service.execute({name, email, password});
    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}