import { $ } from "@wdio/globals";

class FormsPage {
  get formsTab() {
    return $("~Forms");
  }
  get textInput() {
    return $("~text-input");
  }
  get switchBtn() {
    return $("~switch");
  }
  get dropdown() {
    return $("~Dropdown");
  }
  get dropdownOption() {
    return $('android=new UiSelector().text("This app is awesome")');
  }
  get activeButton() {
    return $("~button-Active");
  }
  get alertMessage() {
    return $('//android.widget.TextView[@resource-id="android:id/message"]');
  }
  get okButton() {
    return $('//android.widget.Button[@text="OK"]');
  }

  async goToForms() {
    await this.formsTab.click();
  }

  async fillForm() {
    const randomText = `TestAutomation_${Math.random().toString(36).substring(2, 8)}`;

    await this.textInput.setValue(randomText);
    await this.switchBtn.click();
    await this.dropdown.click();

    await this.dropdownOption.waitForDisplayed();
    await this.dropdownOption.click();

    return randomText;
  }

  async submitActiveButton() {
    await this.activeButton.click();
  }
}

export default new FormsPage();
