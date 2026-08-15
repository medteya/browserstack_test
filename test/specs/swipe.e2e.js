import SwipePage from "../pageobjects/SwipePage.js";
import testData from "../fixtures/testData.js";

describe("Swipe Screen and Card Link Verification", () => {
  it("should open the JS Foundation card and verify the correct URL", async () => {
    await SwipePage.clickCardAndVerifyUrl(testData.swipeUrl);
  });
});
