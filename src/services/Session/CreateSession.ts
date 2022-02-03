import User from "../../entities/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authConfig from "../../config/authConfig";
import IUserRepository from "../../repositories/IUserRepository";
import UserRepository from "../../repositories/UserRepository";

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

  async execute({email, password}: IUser): Promise<IResponse | Error> {

    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      return new Error("Email or password are incorrect");
    }

    const passwordConfirmed = await bcrypt.compare(password, user.password);
    if (!passwordConfirmed) {
      return new Error("Email or password are incorrect");
    }

    if (!authConfig.jwt.secret)
      return new Error("Server Error");

    const token = jwt.sign({ id: user.id }, authConfig.jwt.secret, {
      expiresIn: authConfig.jwt.expiresIn
    });

    return {
      user,
      token
    };
  }
}