import LoginPage from "../pageobjects/LoginPage.js";
import testData from "../fixtures/testData.js";

describe("Login Feature", () => {
  it("should successfully enter credentials and submit login form", async () => {
    await LoginPage.openLoginScreen();
    await LoginPage.login(
      testData.loginUser.email,
      testData.loginUser.password,
    );
    await LoginPage.successMessage(testData.loginUser.successMessage);
  });
});
