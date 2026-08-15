import { $ } from "@wdio/globals";

class WebviewPage {
  get webviewTab() {
    return $("~Webview");
  }
  get supportBanner() {
    return $(
      '//android.widget.TextView[contains(@text, "We stand with the people of Ukraine")]',
    );
  }

  async goToWebview() {
    await this.webviewTab.click();
  }
}

export default new WebviewPage();
