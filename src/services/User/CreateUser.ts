import User from "../../entities/User";
import AppError from "../../errors/AppError";
import { hashPassword } from "../../helper/user.helper";
import { ICreateUser } from "../../interface/user/ICreateUser";
import IUserRepository from "../../repositories/IUserRepository";
import UserRepository from "../../repositories/UserRepository";

class CreateUser {
  constructor(private usersRepository: IUserRepository = new UserRepository()) {}

  async execute({name, email, password}: ICreateUser): Promise<User> {

    const emailExists = await this.usersRepository.findByEmail(email);
    if (emailExists) {
      throw new AppError("Email already exists");
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

export default CreateUser;