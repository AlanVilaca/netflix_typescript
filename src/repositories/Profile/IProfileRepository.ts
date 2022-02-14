import Profile from "../../entities/Profile";
import { IProfile } from "../../interface/profile/IProfile";
import { IUser } from "../../interface/user/IUser";

interface IProfileRepository {
  create(user: IUser): Promise<IProfile>;
  save(profile: IProfile): Promise<void>;
  findById(id: string): Promise<IProfile | undefined>;
  findByUser(userId: string): Promise<Profile[] | undefined>;
}

export default IProfileRepository;