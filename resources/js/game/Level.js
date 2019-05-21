/* eslint-env browser */

import Config from "../utils/config.js";

class Level {
  constructor(level, pattern) {
    this.level = level <= Config.MAX_LEVEL_NUMBER ? level : Config.MAX_LEVEL_NUMBER;
    this.max = Config.MAX_LEVEL_NUMBER;
    this.pattern = pattern;
    Object.freeze(this);
  }

  getLabel() {
    return `Level ${this.level}`;
  }

  getProgress() {
    return Math.floor((100 / this.max) * this.level);
  }

  next(newPattern) {
    return new Level(this.level + 1, newPattern);
  }
}

export default Level;