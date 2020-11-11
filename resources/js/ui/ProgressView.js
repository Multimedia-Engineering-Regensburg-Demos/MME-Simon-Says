/* eslint-env browser */

import View from "./View.js";

class ProgressView extends View {

    setElement(el) {
        super.setElement(el);
        this.levelLabel = this.el.querySelector(".level");
        this.progressIndicator = this.el.querySelector(".value");
    }

    setLevel(level) {
        this.levelLabel.innerHTML = level.getLabel();
        this.progressIndicator.style.width = `${level.getProgress()}vw`;
    }
}

export default new ProgressView();