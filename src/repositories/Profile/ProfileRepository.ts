import { getRepository, Repository } from "typeorm";
import Profile from "../../entities/Profile";
import { IProfile } from "../../interface/profile/IProfile";
import { IUser } from "../../interface/user/IUser";
import IProfileRepository from "./IProfileRepository";

class ProfileRepository implements IProfileRepository {
  private ormRepository: Repository<Profile>;

  constructor() {
    this.ormRepository = getRepository(Profile);
  }

  public async create( user: IUser ): Promise<Profile> {
    const profile = this.ormRepository.create({
      name: user.name,
      avatar: "uploads/chay_coracao.jpg",
      user: user
    });
    await this.save(profile);
    return profile;
  }

  public async save(profile: IProfile): Promise<void> {
    await this.ormRepository.save(profile);
  }

  public async findById(id: string): Promise< IProfile | undefined> {
    const profile = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return profile;
  }

  public async findByUser(userId: string): Promise< Profile[] | undefined> {
    const profiles = await this.ormRepository.find({
      relations: ["user"],
      select: ["id", "avatar"],
      skip: 0,
      take: 5,
      where: {
        user: userId
      },
    });

    return profiles;
  }
}

export default ProfileRepository;