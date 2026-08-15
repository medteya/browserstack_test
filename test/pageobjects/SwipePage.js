class SwipePage {
  get swipeTab() {
    return $("~Swipe");
  }

  get jsFoundationCardText() {
    return $('android=new UiSelector().text("JS.FOUNDATION")');
  }

  get urlBar() {
    return $('//*[@resource-id="com.android.chrome:id/url_bar"]');
  }

  async navigateToSwipeScreen() {
    await this.swipeTab.waitForDisplayed();
    await this.swipeTab.click();
  }

  async clickCardAndVerifyUrl(expectedUrl) {
    await this.navigateToSwipeScreen();

    const windowSize = await browser.getWindowSize();
    const startX = windowSize.width * 0.8;
    const endX = windowSize.width * 0.2;
    const startY = windowSize.height * 0.5;

    for (let i = 0; i < 2; i++) {
      await browser.performActions([
        {
          type: "pointer",
          id: "finger1",
          parameters: { pointerType: "touch" },
          actions: [
            { type: "pointerMove", duration: 0, x: startX, y: startY },
            { type: "pointerDown", button: 0 },
            { type: "pause", duration: 50 },
            { type: "pointerMove", duration: 400, x: endX, y: startY },
            { type: "pointerUp", button: 0 },
          ],
        },
      ]);
    }

    await this.jsFoundationCardText.waitForDisplayed();
    await this.jsFoundationCardText.click();

    await this.urlBar.waitForDisplayed();
    const currentUrl = await this.urlBar.getText();

    expect(currentUrl).toEqual(expectedUrl);
  }
}

export default new SwipePage();
