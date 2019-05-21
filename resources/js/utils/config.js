/* eslint-env browser */

const Config = {
  CSS_HIDDEN_CLASS_NAME: "hidden",
  MAX_LEVEL_NUMBER: 20,
  AVAILABLE_COLORS: ["red", "blue", "yellow", "green"],
  DEFAULT_RESTART_DELAY: 1000,
  DEFAULT_PATTERN_LENGTH: 4,
  DEFAULT_DISPLAY_TIME: 750,
  INITAL_GAME_START_DELAY: 1500,
  DEFAULT_DELAY: 500,
  START_MESSAGE: "Merke dir das Muster und gib es danach ein.",
  WON_MESSAGE: "Korrekt! Du hast das richtige Muster eingegeben. Die nächste Runde startet gleich!",
  LOSE_MESSAGE: "Falsch! Du hast nicht das korrekte Muster eingegeben. Das Spiel wird neu gestartet!",
};

Object.freeze(Config);

export default Config;