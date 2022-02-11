import {Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne} from "typeorm";
import { Expose } from "class-transformer";
import{ v4 as uuid} from "uuid";
import User from "./User";

@Entity("profiles")
export default class Profile {
  @PrimaryColumn()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public avatar: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "userId" })
  public user: User;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  constructor(){
    if (!this.id) {
      this.id = uuid();
    }
  }

  @Expose({ name: "avatar_url" })
  getAvatarUrl(): string | null {
    if (!this.avatar) {
      return null;
    }

    return `${process.env.APP_API_URL}/files/${this.avatar}`;
  }

}