import User from "../entities/User";
import { v4 as uuidv4 } from "uuid";
import IUserRepository from "../repositories/IUserRepository";
import { ICreateUser } from "../interface/user/ICreateUser";

class FakeUserDatabase implements IUserRepository {
  private users: User[] = [];

  public async create({ name, email }: ICreateUser): Promise<User | Error> {
    const user = new User();

    user.id = uuidv4();
    user.name = name;
    user.email = email;

    this.users.push(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    return user;
  }

  public async findById(id: string): Promise<User | undefined> {
    const user = this.users.find(user => user.id === id);
    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(user => user.email === email);
    return user;
  }
}

export default FakeUserDatabase;