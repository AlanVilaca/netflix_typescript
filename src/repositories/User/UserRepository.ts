import { getRepository, Repository } from "typeorm";
import User from "../../entities/User";
import { ICreateUser } from "../../interface/user/ICreateUser";
import IUserRepository from "./IUserRepository";

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create({ name, email, password }: ICreateUser): Promise<User> {
    const user = this.ormRepository.create({ name, email, password });
    await this.ormRepository.save(user);
    return user;
  }

  public async save(user: User): Promise<User> {
    await this.ormRepository.save(user);

    return user;
  }

  public async findById(id: string): Promise< User | undefined> {
    const user = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      select: ["id", "name", "email", "password"],
      where: {
        email,
      },
    });

    return user;
  }
}

export default UserRepository;