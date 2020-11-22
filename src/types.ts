export class OverlayStyles {
  top: number = 0;
  left: number = 0;
  opacity: number = 1;

  setTop(top: number) {
    this.top = top;
    return this;
  }

  setLeft(left: number) {
    this.left = left;
    return this;
  }

  setOpacity(opacity: number) {
    this.opacity = opacity;
    return this;
  }
}