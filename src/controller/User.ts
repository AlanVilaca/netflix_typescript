import { Request, Response } from "express";
import CreateUser from "../services/User/CreateUser";

export default class User {
  async handle(req:Request, res: Response) {
    const {name, email, password, passwordConfirmation} = req.body;
    const service = new CreateUser();
    const result = await service.execute({name, email, password, passwordConfirmation});
    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}