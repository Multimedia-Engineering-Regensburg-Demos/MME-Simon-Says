/* eslint-env browser */

import { Event, Observable } from "../utils/Observer.js";
import Level from "./Level.js";

function createResultEvent(patternWasCorrect) {
    let resultEvent;
    if (patternWasCorrect === true) {
        resultEvent = new Event("correctPatternEntered");
    } else {
        resultEvent = new Event("wrongPatternEntered");
    }
    return resultEvent;
}

class Game extends Observable {

    constructor() {
        super();
    }

    reset() {
        this.currentLevel = undefined;
    }

    getNextLevel() {
        this.patternBuffer = [];
        this.currentLevel = Level.next(this.currentLevel);
        return this.currentLevel;
    }

    addUserSelectedColor(color) {
        this.patternBuffer.push(color);
        if (this.patternBuffer.length === this.currentLevel.pattern.length) {
            let patternsMatch = this.currentLevel.pattern.matchesColors(this.patternBuffer),
                event = createResultEvent(patternsMatch);
            this.notifyAll(event);
        }
    }

}

export default new Game();