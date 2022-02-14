import Profile from "../../entities/Profile";
import AppError from "../../errors/AppError";
import IProfileRepository from "../../repositories/Profile/IProfileRepository";
import ProfileRepository from "../../repositories/Profile/ProfileRepository";

class GetProfiles {
  constructor(private profileRepository: IProfileRepository = new ProfileRepository()) {}

  public async execute(userId: string): Promise<Profile[]> {

    const profiles = await this.profileRepository.findByUser(userId);
    if (!profiles) throw new AppError("Dosent exists profiles to this user");

    return profiles;
  }
}

export default GetProfiles;