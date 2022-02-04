import User from "../../entities/User";
import bcrypt from "bcryptjs";
import jwt, { Secret } from "jsonwebtoken";
import authConfig from "../../config/authConfig";
import IUserRepository from "../../repositories/IUserRepository";
import UserRepository from "../../repositories/UserRepository";
import AppError from "../../errors/AppError";

interface IUser {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

export default class CreateSession {
  constructor(private usersRepository: IUserRepository = new UserRepository()) {}

  async execute({ email, password }: IUser): Promise<IResponse> {

    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Incorrect email/password combination.", 401);
    }

    const passwordConfirmed = await bcrypt.compare(password, user.password);
    if (!passwordConfirmed) {
      throw new AppError("Incorrect email/password combination.", 401);
    }

    const token = jwt.sign({ id: user.id }, authConfig.jwt.secret as Secret, {
      expiresIn: authConfig.jwt.expiresIn
    });

    return {
      user,
      token
    };
  }
}