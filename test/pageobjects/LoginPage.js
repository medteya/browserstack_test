class LoginPage {
  get loginNavTab() {
    return $("~Login");
  }
  get emailInput() {
    return $("~input-email");
  }
  get passwordInput() {
    return $("~input-password");
  }
  get loginButton() {
    return $("~button-LOGIN");
  }
  get alertMessage() {
    return $('//android.widget.TextView[@resource-id="android:id/message"]');
  }

  get alertOkButton() {
    return $('android=new UiSelector().text("OK")');
  }

  async openLoginScreen() {
    await this.loginNavTab.click();
  }

  async login(email, password) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }
  async successMessage(expectedMessage) {
    await this.alertMessage.waitForDisplayed();
    const messageText = await this.alertMessage.getText();
    expect(messageText).toContain(expectedMessage);
    await this.alertOkButton.click();
  }
}

export default new LoginPage();
