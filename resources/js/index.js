/* eslint-env browser */

import Config from "./utils/config.js";

function init() {
    // Print current game configuration
    console.log("Current game configuration:");
    for (let attr in Config) {
        if (Object.prototype.hasOwnProperty.call(Config, attr)) {
            console.log(`[${attr}] = ${Config[attr]}`);
        }
    }
    console.log("Initializing application");
    // Start here
}

init();