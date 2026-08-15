import { $ } from "@wdio/globals";

class DragPage {
  get dragTab() {
    return $("~Drag");
  }

  get pieceL1() {
    return $("~drag-l1");
  }
  get pieceL2() {
    return $("~drag-l2");
  }
  get pieceL3() {
    return $("~drag-l3");
  }
  get dropL1() {
    return $("~drop-l1");
  }
  get dropL2() {
    return $("~drop-l2");
  }
  get dropL3() {
    return $("~drop-l3");
  }

  get pieceC1() {
    return $("~drag-c1");
  }
  get pieceC2() {
    return $("~drag-c2");
  }
  get pieceC3() {
    return $("~drag-c3");
  }
  get dropC1() {
    return $("~drop-c1");
  }
  get dropC2() {
    return $("~drop-c2");
  }
  get dropC3() {
    return $("~drop-c3");
  }

  get pieceR1() {
    return $("~drag-r1");
  }
  get pieceR2() {
    return $("~drag-r2");
  }
  get pieceR3() {
    return $("~drag-r3");
  }
  get dropR1() {
    return $("~drop-r1");
  }
  get dropR2() {
    return $("~drop-r2");
  }
  get dropR3() {
    return $("~drop-r3");
  }

  get retryButton() {
    return $("~button-Retry");
  }

  async goToDrag() {
    await this.dragTab.click();
  }

  get congratulationsMessage() {
    return $('android=new UiSelector().text("Congratulations")');
  }

  async solveFullPuzzle() {
    async function dragAndDropElement(source, target) {
      const sourceLocation = await source.getLocation();
      const sourceSize = await source.getSize();
      const targetLocation = await target.getLocation();
      const targetSize = await target.getSize();

      const startX = Math.round(sourceLocation.x + sourceSize.width / 2);
      const startY = Math.round(sourceLocation.y + sourceSize.height / 2);
      const endX = Math.round(targetLocation.x + targetSize.width / 2);
      const endY = Math.round(targetLocation.y + targetSize.height / 2);

      await browser.performActions([
        {
          type: "pointer",
          id: "finger1",
          parameters: { pointerType: "touch" },
          actions: [
            { type: "pointerMove", duration: 0, x: startX, y: startY },
            { type: "pointerDown", button: 0 },
            { type: "pause", duration: 500 },
            { type: "pointerMove", duration: 1000, x: endX, y: endY },
            { type: "pointerUp", button: 0 },
          ],
        },
      ]);
    }

    await dragAndDropElement(this.pieceL1, this.dropL1);
    await dragAndDropElement(this.pieceL2, this.dropL2);
    await dragAndDropElement(this.pieceL3, this.dropL3);

    await dragAndDropElement(this.pieceC1, this.dropC1);
    await dragAndDropElement(this.pieceC2, this.dropC2);
    await dragAndDropElement(this.pieceC3, this.dropC3);

    await dragAndDropElement(this.pieceR1, this.dropR1);
    await dragAndDropElement(this.pieceR2, this.dropR2);
    await dragAndDropElement(this.pieceR3, this.dropR3);
  }
}

export default new DragPage();
