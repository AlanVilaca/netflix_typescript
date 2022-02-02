import { Request, Response } from "express";
import CreateSession from "../services/Session/CreateSession";

export default class SessionController {
  async login(req:Request, res: Response){
    const {email, password} = req.body;

    const service = new CreateSession();

    const result = await service.execute({email, password});
    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}
