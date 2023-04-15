import headerUserScore from "./headerUserScore.js";
import refs from "./helpers/refs.js";
import scoreModal from "./scoreModal.js";

const user = JSON.parse(localStorage.getItem("user"));
const userName = user?.name || "User";

const gameData = [
  { currentLevel: 1, monsterHp: 5 },
  { currentLevel: 2, monsterHp: 7 },
  { currentLevel: 3, monsterHp: 10 },
  { currentLevel: 4, monsterHp: 15 },
  { currentLevel: 5, monsterHp: 25 },
];
let currentLevel = 1;
let currentLevelData = gameData[currentLevel - 1];
console.log(currentLevelData);
let score = 0;
let monsterHp = currentLevelData.monsterHp;
console.log(monsterHp);

const monsterImage = () => {
  return `<img class='monster__img' src="./img/monsters/lvl${currentLevel}.png" alt="monster">`;
};

function changeBgImg() {
  refs.game.style.backgroundImage = `url(../img/backgrounds/lvl${currentLevel}.jpg)`;
  refs.game.style.backgroundRepeat = "no-repeat";
  refs.game.style.backgroundSize = "cover";
  refs.game.style.width = "100%";
  refs.game.style.height = "100vh";
}

function changeMonster() {
  refs.monster.innerHTML = "";
  refs.monster.insertAdjacentHTML("beforeend", monsterImage());
}

const handleMonsterClick = (event) => {
  if (event.target.tagName === "IMG") {
    score++;
    monsterHp--;
  }
  if (monsterHp === 0) {
    currentLevel++;
    console.log(currentLevel);
    currentLevelData = gameData[currentLevel - 1];
    console.log(currentLevelData);
    monsterHp = currentLevelData.monsterHp;
    headerUserScore(currentLevel, score, monsterHp);
    console.log(monsterHp);
    changeBgImg();
    changeMonster();
    return;
  }

  document.querySelector(".score").innerHTML = `${score}`;
  document.querySelector(".monsterHp").innerHTML = `${monsterHp}`;
};

refs.monster.addEventListener("click", handleMonsterClick);

changeBgImg();
changeMonster();
console.log(gameData[currentLevel - 1]);
headerUserScore(currentLevel, score, monsterHp);
