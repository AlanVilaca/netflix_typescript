import { getRepository } from "typeorm";
import User from "../../entities/User";
import { validateEmail, validatePassword } from "../../helper/user.helper";

interface IUser {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export default class CreateUser {
  async execute({name, email, password, passwordConfirmation}: IUser): Promise<User | Error> {

    if (password !== passwordConfirmation){
      return new Error("Password and password confirmation are different");
    }

    if (!validateEmail(email)){
      return new Error("Email bad formatted");
    }

    if (!validatePassword(password)){
      return new Error("Password weak");
    }

    const repo = getRepository(User);

    if (await repo.findOne({email})){
      return new Error("Email already exists");
    }

    const user = repo.create({
      name,
      email,
      password
    });

    await repo.save(user);

    return user;
  }
}