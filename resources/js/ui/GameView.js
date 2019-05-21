/* eslint-env browser */

import View from "./View.js";
import { Event, Observable } from "../utils/Observer.js";

class PatternPlayer extends Observable {

  constructor(pattern) {
    super();
    this.colors = pattern.colors;
    this.delay = pattern.delay;
    this.duration = pattern.displayTime;
  }

  play() {
    this.onTick();
  }

  onTick() {
    let currentColor = this.colors[0],
      tickEvent = new Event("patternChange", { color: currentColor });
    this.notifyAll(tickEvent);
    if (this.colors.length > 1) {
      this.colors = this.colors.slice(1);
      setTimeout(this.wait.bind(this), this.duration);
    } else {
      setTimeout(this.onFinished.bind(this), this.duration);
    }
  }

  onFinished() {
    let tickEvent = new Event("patternEnd", null);
    this.notifyAll(tickEvent);
  }

  wait() {
    let tickEvent = new Event("patternChange", { color: "none" });
    this.notifyAll(tickEvent);
    setTimeout(this.onTick.bind(this), this.delay);
  }

}

class GameView extends View {

  setElement(el) {
    super.setElement(el);
    this.elements = {
      redEl: this.el.querySelector(".red"),
      blueEl: this.el.querySelector(".blue"),
      yellowEl: this.el.querySelector(".yellow"),
      greenEl: this.el.querySelector(".green"),
    };
    this.el.addEventListener("click", this.onClick.bind(this));
  }

  onClick(event) {
    if (this.enabled === false) {
      return;
    }
    let target = event.target;
    if (target.classList.contains("segment")) {
      let color = target.classList.item(target.classList.length - 1),
        clickEvent = new Event("segmentClick", { color: color });
      this.notifyAll(clickEvent);
    }
  }

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }

  removeHighlights() {
    for (let el in this.elements) {
      if (this.elements.hasOwnProperty(el)) {
        let currentElement = this.elements[el];
        currentElement.classList.remove("highlight");
      }
    }
  }

  setHighlightedColor(color) {
    for (let el in this.elements) {
      if (this.elements.hasOwnProperty(el)) {
        let currentElement = this.elements[el];
        currentElement.classList.remove("highlight");
        if (currentElement.classList.contains(color)) {
          currentElement.classList.add("highlight");
        }
      }
    }
  }

  onPatternUpdate(event) {
    if (event.data.color === "none") {
      this.removeHighlights();
    } else {
      this.setHighlightedColor(event.data.color);
    }
  }

  onPatternFinished() {
    this.removeHighlights();
    this.currentPatternCallback();
  }

  playbackPattern(pattern, callback) {
    let player = new PatternPlayer(pattern);
    this.currentPatternCallback = callback;
    player.addEventListener("patternChange", this.onPatternUpdate.bind(this));
    player.addEventListener("patternEnd", this.onPatternFinished.bind(this));
    player.play();
  }

}

export default new GameView();