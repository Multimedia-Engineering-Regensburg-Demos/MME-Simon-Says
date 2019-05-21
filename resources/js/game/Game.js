/* eslint-env browser */

import Config from "../utils/config.js";
import { Event, Observable } from "../utils/Observer.js";
import Pattern from "./Pattern.js";
import Level from "./Level.js";

function createRandomPattern() {
  let colors = [];
  for (let i = 0; i < Config.DEFAULT_PATTERN_LENGTH; i++) {
    let color = Config.AVAILABLE_COLORS[Math.floor(Math.random() * Config.AVAILABLE_COLORS
      .length)];
    colors.push(color);
  }
  return new Pattern(colors, Config.DEFAULT_DISPLAY_TIME, Config.DEFAULT_DELAY);
}

class Game extends Observable {

  constructor() {
    super();
  }

  checkPattern() {
    let enteredPattern = this.patternBuffer,
      targetedPattern = this.currentLevel.pattern.colors,
      patternsMatch = true;
    if (enteredPattern.length < targetedPattern.length) {
      return;
    }
    for (let i = 0; i < enteredPattern.length; i++) {
      if (enteredPattern[i] !== targetedPattern[i]) {
        patternsMatch = false;
        break;
      }
    }
    if (patternsMatch) {
      let winEvent = new Event("correctPatternEntered", null);
      this.notifyAll(winEvent);
    } else {
      let loseEvent = new Event("wrongPatternEntered", null);
      this.notifyAll(loseEvent);
    }
  }

  reset() {
    this.currentLevel = undefined;
  }

  getNextLevel() {
    let randomPattern = createRandomPattern();
    this.patternBuffer = [];
    if (this.currentLevel === undefined) {
      this.currentLevel = new Level(1, randomPattern);
    } else {
      this.currentLevel = this.currentLevel.next(randomPattern);
    }
    return this.currentLevel;
  }

  enterColor(color) {
    this.patternBuffer.push(color);
    this.checkPattern();
  }

}

export default new Game();