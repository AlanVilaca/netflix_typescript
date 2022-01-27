import { getRepository } from "typeorm";
import User from "../../entities/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authConfig from "../../config/auth";

interface IUser {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

export default class CreateSession {
  async execute({email, password}: IUser): Promise<IResponse | Error> {
    const repo = getRepository(User);

    const user = await repo.findOne({email});

    if (!user) {
      return new Error("Email or password are incorrect");
    }

    const passwordConfirmed = await bcrypt.compare(password, user.password);
    if (!passwordConfirmed) {
      return new Error("Email or password are incorrect");
    }

    const token = jwt.sign({id: user.id}, authConfig.jwt.secret, {
      expiresIn: authConfig.jwt.expiresIn
    });

    return {
      user,
      token
    };
  }
}