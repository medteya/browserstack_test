import DragPage from "../pageobjects/DragPage.js";
import { expect } from "@wdio/globals";

describe("Drag and Drop Full Puzzle Tests", () => {
  it("should solve the entire puzzle and trigger success", async () => {
    await DragPage.goToDrag();
    await DragPage.solveFullPuzzle();
    await expect(DragPage.congratulationsMessage).toBeDisplayed();
    await expect(DragPage.retryButton).toBeDisplayed();
  });
});
