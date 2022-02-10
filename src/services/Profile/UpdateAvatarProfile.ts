import Profile from "../../entities/Profile";
import IProfileRepository from "../../repositories/Profile/IProfileRepository";
import ProfileRepository from "../../repositories/Profile/ProfileRepository";

interface IRequest {
  name: string;
  avatarFileName: string;
}

class UpdateAvatarProfile {
  constructor(private profileRepository: IProfileRepository = new ProfileRepository()) {}

  public async execute({ name, avatarFileName }: IRequest): Promise<Profile> {

    const profile = await this.profileRepository.create({ name, avatar: avatarFileName });


    profile.avatar = avatarFileName;
    await this.profileRepository.save(profile);
    return profile;
  }
}

export default UpdateAvatarProfile;