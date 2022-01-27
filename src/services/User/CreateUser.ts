import { getRepository } from "typeorm";
import User from "../../entities/User";
import { hashPassword } from "../../helper/user.helper";

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export default class CreateUser {
  async execute({name, email, password}: IUser): Promise<User | Error> {

    const repo = getRepository(User);

    if (await repo.findOne({email})){
      return new Error("Email already exists");
    }

    password = await hashPassword(password);

    const user = repo.create({
      name,
      email,
      password
    });

    await repo.save(user);

    return user;
  }
}