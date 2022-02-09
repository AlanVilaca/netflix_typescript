import { ICreateUser } from "../../interface/user/ICreateUser";
import { IUser } from "../../interface/user/IUser";

interface IUserRepository {
  create(user: ICreateUser): Promise<IUser>;
  save(user: IUser): Promise<IUser>;
  findById(id: string): Promise<IUser | undefined>;
  findByEmail(email: string): Promise<IUser | undefined>;
}

export default IUserRepository;