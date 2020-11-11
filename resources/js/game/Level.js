/* eslint-env browser */

import Config from "../utils/config.js";
import Pattern from "./Pattern.js";

function createRandomPattern() {
    let colors = [];
    for (let i = 0; i < Config.DEFAULT_PATTERN_LENGTH; i++) {
        let color = Config.AVAILABLE_COLORS[Math.floor(Math.random() * Config.AVAILABLE_COLORS
            .length)];
        colors.push(color);
    }
    return new Pattern(colors, Config.DEFAULT_DISPLAY_TIME, Config.DEFAULT_DELAY);
}

class Level {

    constructor(levelNumber) {
        this.levelNumber = levelNumber <= Config.MAX_LEVEL_NUMBER ? levelNumber :
            Config.MAX_LEVEL_NUMBER;
        this.pattern = createRandomPattern();

        Object.freeze(this);
    }

    getLabel() {
        return `Level ${this.levelNumber}`;
    }

    getProgress() {
        return Math.floor(((this.levelNumber - 1) / Config.MAX_LEVEL_NUMBER) *
            100);
    }

    static next(level) {
        let newLevelNumber = 1;
        if (level !== undefined) {
            newLevelNumber += level.levelNumber;
        }
        return new Level(newLevelNumber);
    }

}

export default Level;