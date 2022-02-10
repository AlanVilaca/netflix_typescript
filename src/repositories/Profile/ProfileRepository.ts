import { getRepository, Repository } from "typeorm";
import Profile from "../../entities/Profile";
import { ICreateProfile } from "../../interface/profile/ICreateProfile";
import { IProfile } from "../../interface/profile/IProfile";
import IProfileRepository from "./IProfileRepository";


class ProfileRepository implements IProfileRepository {
  private ormRepository: Repository<Profile>;

  constructor() {
    this.ormRepository = getRepository(Profile);
  }

  public async create({ name, avatar }: ICreateProfile): Promise<Profile> {
    const profile = this.ormRepository.create({ name, avatar });
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


}

export default ProfileRepository;