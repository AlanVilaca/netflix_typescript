import {Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";
import{ v4 as uuid} from "uuid";

@Entity("profiles")
export default class Profile {
  @PrimaryColumn()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public avatar: string;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  constructor(){
    if (!this.id) {
      this.id = uuid();
    }
  }

}