/* eslint-env browser */

const Config = {
  // css class used to hide an element (display: none )
  CSS_HIDDEN_CLASS_NAME: "hidden",
  // maximum number of levels, game will stay on max level if player continues player after reaching it
  MAX_LEVEL_NUMBER: 20,
  // name of available colors corresponding to css classes used in UI
  AVAILABLE_COLORS: ["red", "blue", "yellow", "green"],
  // delay in MS between game rounds (levels)
  DEFAULT_RESTART_DELAY: 1000,
  // number of colors in each pattern
  DEFAULT_PATTERN_LENGTH: 4,
  // time in MS each color is visible when replaying pattern
  DEFAULT_DISPLAY_TIME: 750,
  // delay in MS between showing two colors when replaying pattern
  DEFAULT_DELAY: 500,
  // delay in MS before first game round starts
  INITAL_GAME_START_DELAY: 1500,
  // message shown on game start
  START_MESSAGE: "Merke dir das Muster und gib es danach ein.",
  // message shown after level was cleared
  WON_MESSAGE: "Korrekt! Du hast das richtige Muster eingegeben. Die nächste Runde startet gleich!",
  // message shown when wrong pattern was entered
  LOSE_MESSAGE: "Falsch! Du hast nicht das korrekte Muster eingegeben. Das Spiel wird neu gestartet!",
};

Object.freeze(Config);

export default Config;