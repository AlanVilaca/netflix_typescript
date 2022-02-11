import { Request, Response } from "express";
import CreateSession from "../services/Session/CreateSession";
import { instanceToInstance } from "class-transformer";

export default class SessionController {
  async login(req:Request, res: Response){
    const { email, password } = req.body;

    const createSessionService = new CreateSession();

    const session = await createSessionService.execute({ email, password });

    return res.json(instanceToInstance(session));
  }
}
