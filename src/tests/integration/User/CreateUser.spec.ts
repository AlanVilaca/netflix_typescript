import "reflect-metadata";
import FakeUserDatabase from "../../FakeDatabase";
import CreateUser from "../../../services/User/CreateUser";
import AppError from "../../../errors/AppError";

let fakeUserRepository: FakeUserDatabase;
let createUser: CreateUser;

describe("Create User", () => {
  beforeEach (() => {
    fakeUserRepository = new FakeUserDatabase();
    createUser = new CreateUser(fakeUserRepository);
  });

  it ("should be able to create a new user", async () => {

    const user = await createUser.execute({
      name: "John Marston",
      email: "john.marston@gmail.com",
      password: "JohnMarston2018"
    });

    expect(user).toHaveProperty("id");
  });

  it ("should not be able to create a new user", async () => {

    await createUser.execute({
      name: "John Marston",
      email: "john.marston@gmail.com",
      password: "JohnMarston2018"
    });

    expect(
      createUser.execute({
        name: "John Marston",
        email: "john.marston@gmail.com",
        password: "JohnMarston2018"
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});