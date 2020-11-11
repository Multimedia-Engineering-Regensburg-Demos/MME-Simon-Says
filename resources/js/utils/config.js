/* eslint-env browser */

const Config = {
    // CSS-Klasse zum Ausblenden eines Elements (display: none )
    CSS_HIDDEN_CLASS_NAME: "hidden",
    // Maximale Levelnummer, nach Erreichen dieses Level bleibt die Levelnummer unverändert
    MAX_LEVEL_NUMBER: 20,
    // Namen der verfügbaren Farben und korrespondierender CSS-Klassen
    AVAILABLE_COLORS: ["red", "blue", "yellow", "green"],
    // Pause zwischen zwei Spielrunden (Level)
    DEFAULT_RESTART_DELAY: 1000,
    // Anzahl der Farben pro Muster
    DEFAULT_PATTERN_LENGTH: 4,
    // Anzeigedauer (in ms) pro Farbe bei der Wiedergabe eines Musters
    DEFAULT_DISPLAY_TIME: 750,
    // Pause (in ms) zwischen zwei Farben bei der Wiedergabe eines Musters
    DEFAULT_DELAY: 500,
    // Verzögerung (in ms) vor dem Start der ersten Runde
    INITAL_GAME_START_DELAY: 1500,
    // Textnachricht für den Spielstart
    START_MESSAGE: "Merke dir das Muster und gib es danach ein.",
    // Textnachricht für gewonnene Runde
    WON_MESSAGE: "Korrekt! Du hast das richtige Muster eingegeben. Die nächste Runde startet gleich!",
    // Textnachricht für verlorene Runde
    LOSE_MESSAGE: "Falsch! Du hast nicht das korrekte Muster eingegeben. Das Spiel wird neu gestartet!",
};

Object.freeze(Config);

export default Config;