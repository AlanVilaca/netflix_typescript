import AppError from "../../errors/AppError";
import IUserRepository from "../../repositories/User/IUserRepository";
import UserRepository from "../../repositories/User/UserRepository";

class UnActiveAccount {
  constructor(private usersRepository: IUserRepository = new UserRepository()) {}

  async execute(id: string): Promise<void> {

    const user = await this.usersRepository.findById(id);
    if (!user){
      throw new AppError("User not found");
    }

    user.activeAccount = false;
    await this.usersRepository.save(user);
  }
}

export default UnActiveAccount;