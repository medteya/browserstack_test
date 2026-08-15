import FormsPage from "../pageobjects/FormsPage.js";
import { expect } from "@wdio/globals";

describe("Forms Screen Tests", () => {
  it("should fill out the form with dynamically generated random text", async () => {
    await FormsPage.goToForms();
    const enteredText = await FormsPage.fillForm();
    await expect(FormsPage.textInput).toHaveText(enteredText);

    await FormsPage.submitActiveButton();
    await expect(FormsPage.alertMessage).toBeDisplayed();
    await FormsPage.okButton.click();
  });
});
