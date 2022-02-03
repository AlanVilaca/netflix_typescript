export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  activeAccount: boolean;
  createdAt: Date;
  updatedAt: Date;
}
