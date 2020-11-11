/* eslint-env browser */

import View from "./View.js";

class MessageView extends View {

    setText(text) {
        if (this.el) {
            this.el.innerHTML = text;
        }
    }
}

export default new MessageView();