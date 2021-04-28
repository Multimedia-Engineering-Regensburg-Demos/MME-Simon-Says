/* eslint-env browser */

import Config from "./utils/Config.js";

function init() {
    // Print current game configuration
    console.log("Current game configuration:");
    for (let attr in Config) {
<<<<<<< HEAD
        if (Object.prototype.hasOwnProperty.call(Config, attr)) {
=======
        if (Object.hasOwnProperty.call(Config, attr)) {
>>>>>>> 595a8e377b87a6f583756189c50fa2d055222312
            console.log(`[${attr}] = ${Config[attr]}`);
        }
    }
    console.log("Initializing application");
    // Start here
}

init();