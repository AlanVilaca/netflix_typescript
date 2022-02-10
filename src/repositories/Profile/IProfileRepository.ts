import { ICreateProfile } from "../../interface/profile/ICreateProfile";
import { IProfile } from "../../interface/profile/IProfile";

interface IProfileRepository {
  create(profile: ICreateProfile): Promise<IProfile>;
  save(profile: IProfile): Promise<void>;
  findById(id: string): Promise<IProfile | undefined>;
}

export default IProfileRepository;