import refs from "./helpers/refs.js";
import scoreModal from "./scoreModal.js";

const user = JSON.parse(localStorage.getItem("user"));
const userName = user?.name || "User";
let currentLevel = 1;
let score = 0;

refs.game.style.backgroundImage = `url(../img/backgrounds/lvl${currentLevel}.jpg)`;
