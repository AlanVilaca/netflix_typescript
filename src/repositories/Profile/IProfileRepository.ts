
interface IProfileRepository {
  create(profile: ICreateUser): Promise<IUser>;
  save(profile: IUser): Promise<IUser>;
  findById(id: string): Promise<IUser | undefined>;
  findByEmail(email: string): Promise<IUser | undefined>;
}

export default IProfileRepository;