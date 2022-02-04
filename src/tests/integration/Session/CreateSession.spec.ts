import "reflect-metadata";
import FakeUserDatabase from "../../FakeDatabase";
import CreateSession from "../../../services/Session/CreateSession";

let fakeUserRepository: FakeUserDatabase;
let createSession: CreateSession;

describe("Create User", () => {
  beforeEach (() => {
    fakeUserRepository = new FakeUserDatabase();
    createSession = new CreateSession(fakeUserRepository);

  });

  it("should be able to authenticate", async () => {
    const user = await fakeUserRepository.create({
      name: "John Marston",
      email: "john.marston@gmail.com",
      password: "JohnMarston2018"
    });

    const response = await createSession.execute({
      email: "john.marston@gmail.com",
      password: "JohnMarston2018"
    });

    expect(response).toHaveProperty("token");
    expect(response).toEqual(user);
  });
});