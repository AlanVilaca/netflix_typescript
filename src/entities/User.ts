import {Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Exclude } from "class-transformer";
import{ v4 as uuid} from "uuid";

@Entity("users")
export default class User {
  @PrimaryColumn()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public email: string;

  @Column()
  @Exclude()
  public password: string;

  @Column()
  public activeAccount: boolean;

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