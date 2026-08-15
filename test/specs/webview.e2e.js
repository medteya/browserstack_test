import WebviewPage from "../pageobjects/WebviewPage.js";
import { expect } from "@wdio/globals";

describe("WebView Screen Tests", () => {
  it("should navigate to Webview and verify banner is displayed", async () => {
    await WebviewPage.goToWebview();
    await expect(WebviewPage.supportBanner).toBeDisplayed();
  });
});
