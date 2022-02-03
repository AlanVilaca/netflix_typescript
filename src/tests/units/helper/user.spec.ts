import { hashPassword, validateEmail, validatePassword } from "../../../helper/user.helper";

describe("Validate email formatt", () => {

  it("it should pass by email format", () => {
    const email = "example@example.com";
    const res = validateEmail(email);
    expect(res).toBe(true);
  });

  it("it should not pass by email format", () => {
    const email = "example";
    const res = validateEmail(email);
    expect(res).toBe(false);
  });
});

describe("Validate password formatt", () => {

  it("it should pass by password format", () => {
    const password = "example@example.com";
    const res = validatePassword(password);
    expect(res).toBe(true);
  });

  it("it should not pass by password format", () => {
    const password = "exam";
    const res = validatePassword(password);
    expect(res).toBe(false);
  });
});

describe("Validate hash formatt", () => {

  it("it should pass by password format", () => {
    const password = "example@example.com";
    const res = hashPassword(password);
    expect(res).not.toBeNull();
    expect(res).not.toBeUndefined();
  });
});