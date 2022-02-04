import "reflect-metadata";
import "dotenv/config";
import FakeUserDatabase from "../../FakeDatabase";
import CreateSession from "../../../services/Session/CreateSession";
import CreateUser from "../../../services/User/CreateUser";
import AppError from "../../../errors/AppError";


let fakeUserRepository: FakeUserDatabase;
let createUser: CreateUser;
let createSession: CreateSession;

describe("Create session", () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserDatabase();
    createUser = new CreateUser(fakeUserRepository);
    createSession = new CreateSession(fakeUserRepository);
  });

  it("should be able to authenticate", async () => {
    await createUser.execute({
      name: "John Marston",
      email: "john.marston@gmail.com",
      password: "JohnMarston2018"
    });

    const response = await createSession.execute({
      email: "john.marston@gmail.com",
      password: "JohnMarston2018"
    });

    expect(response).toHaveProperty("token");
  });

  it("should not be able to authenticate with non existent user", async () => {

    expect(
      createSession.execute({
        email: "john.marston@gmail.com",
        password: "JohnMarston2018"
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate with wrong password", async () => {
    await createUser.execute({
      name: "John Marston",
      email: "john.marston@gmail.com",
      password: "JohnMarston2020"
    });

    expect(
      createSession.execute({
        email: "john.marston@gmail.com",
        password: "JohnMarston2018"
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});