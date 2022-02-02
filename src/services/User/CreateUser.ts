import User from "../../entities/User";
import { hashPassword } from "../../helper/user.helper";
import { ICreateUser } from "../../interface/user/ICreateUser";
import IUserRepository from "../../repositories/IUserRepository";
import UserRepository from "../../repositories/UserRepository";

export default class CreateUser {
  constructor(private usersRepository: IUserRepository = new UserRepository()) {}

  async execute({name, email, password}: ICreateUser): Promise<User | Error> {

    if (await this.usersRepository.findByEmail(email)){
      return new Error("Email already exists");
    }

    password = await hashPassword(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password
    });

    return user;
  }
}