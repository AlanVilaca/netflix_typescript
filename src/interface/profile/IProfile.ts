import User from "../../entities/User";

export interface IProfile {
  id: string;
  name: string;
  user: User
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
}