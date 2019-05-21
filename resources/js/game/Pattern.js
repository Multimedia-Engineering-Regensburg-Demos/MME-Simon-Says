/* eslint-env browser */

class Pattern {

  constructor(colors, displayTime, delay) {
    this.colors = colors;
    this.displayTime = displayTime;
    this.delay = delay;
    Object.freeze(this);
  }

}

export default Pattern;