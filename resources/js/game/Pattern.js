/* eslint-env browser */

class Pattern {

  constructor(colors, displayTime, delay) {
    this.colors = colors;
    this.displayTime = displayTime;
    this.delay = delay;
    Object.freeze(this);
  }

  get length() {
    return this.colors.length;
  }

  matchesColors(colors) {
    if (this.colors.length !== colors.length) {
      return false;
    }
    for (let i = 0; i < colors.length; i++) {
      if (colors[i] !== this.colors[i]) {
        return false;
      }
    }
    return true;
  }

}

export default Pattern;