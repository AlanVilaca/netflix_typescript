import IUserRepository from "../../repositories/IUserRepository";
import UserRepository from "../../repositories/UserRepository";

export default class UnActiveAccount {
  constructor(private usersRepository: IUserRepository = new UserRepository()) {}

  async execute(id: string): Promise<void| Error> {

    const user = await this.usersRepository.findById(id);
    if (!user){
      return new Error("User not found");
    }

    user.activeAccount = false;
    await this.usersRepository.save(user);
  }
}