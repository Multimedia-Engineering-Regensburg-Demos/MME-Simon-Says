/* eslint-env browser */

import Config from "./utils/config.js";
import Game from "./game/Game.js";
import GameView from "./ui/GameView.js";
import MessageView from "./ui/MessageView.js";
import ProgressView from "./ui/ProgressView.js";

function init() {
  initGame();
  initUI();
  setTimeout(startNextLevel, Config.INITAL_GAME_START_DELAY);
}

function initGame() {
  Game.addEventListener("correctPatternEntered", onCorrectPatternEntered);
  Game.addEventListener("wrongPatternEntered", onWrongPatternEntered);
}

function initUI() {
  let gameViewElement = document.querySelector("#board"),
    messageElement = document.querySelector("#message"),
    progressElement = document.querySelector("#progress");
  GameView.setElement(gameViewElement);
  GameView.addEventListener("segmentClick", onSegmentClicked);
  MessageView.setElement(messageElement);
  MessageView.setText(Config.START_MESSAGE);
  MessageView.show();
  ProgressView.setElement(progressElement);
}

function startNextLevel() {
  let level = Game.getNextLevel();
  ProgressView.setLevel(level);
  MessageView.hide();
  GameView.disable();
  GameView.playbackPattern(level.pattern, onPatternPlaybackFinished);
}

function onCorrectPatternEntered() {
  MessageView.setText(Config.WON_MESSAGE);
  MessageView.show();
  setTimeout(startNextLevel, Config.DEFAULT_RESTART_DELAY);
}

function onWrongPatternEntered() {
  MessageView.setText(Config.LOSE_MESSAGE);
  MessageView.show();
  Game.reset();
  setTimeout(startNextLevel, Config.DEFAULT_RESTART_DELAY);
}

function onPatternPlaybackFinished() {
  GameView.enable();
}

function onSegmentClicked(event) {
  Game.enterColor(event.data.color);
}

init();