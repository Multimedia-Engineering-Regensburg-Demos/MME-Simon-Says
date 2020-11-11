/* eslint-env browser */

import Config from "../utils/config.js";
import Observable from "../utils/Observer.js";

class View extends Observable {

    constructor() {
        super();
        this.el = undefined;
    }

    setElement(el) {
        this.el = el;
    }

    show() {
        if (this.el) {
            this.el.classList.remove(Config.CSS_HIDDEN_CLASS_NAME);
        }
    }

    hide() {
        if (this.el) {
            this.el.classList.add(Config.CSS_HIDDEN_CLASS_NAME);
        }
    }
}

export default View;