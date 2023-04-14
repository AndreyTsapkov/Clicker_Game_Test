import refs from "./helpers/refs.js";
import scoreModal from "./scoreModal.js";

const user = JSON.parse(localStorage.getItem("user"));
const userName = user?.name || "User";
let currentLevel = 2;
let score = 0;

const monsterImage = () => {
  return `<img class='monster__img' src="./img/monsters/lvl${currentLevel}.png" alt="monster">`;
};

function changeBgImg() {
  refs.body.style.backgroundImage = `url(../img/backgrounds/lvl${currentLevel}.jpg)`;
  refs.body.style.backgroundRepeat = "no-repeat";
  refs.body.style.backgroundSize = "cover";
  refs.body.style.width = "1024px";
  refs.body.style.height = "768px";
}

function changeMonster() {
  refs.monster.innerHTML = "";
  refs.monster.insertAdjacentHTML("beforeend", monsterImage());
}

changeBgImg();
changeMonster();
