import "reflect-metadata";
import FakeUserDatabase from "../../FakeDatabase";
import CreateUser from "../../../services/User/CreateUser";

describe("Create User", () => {
  it ("should be able to create a new user", async () => {
    const fakeUserRepository = new FakeUserDatabase();
    const createUser = new CreateUser(fakeUserRepository);

    const user = await createUser.execute({
      name: "John Marston",
      email: "john.marston@gmail.com",
      password: "JohnMarston2018"
    });

    expect(user).toHaveProperty("id");

  });
});