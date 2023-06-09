import refs from "./helpers/refs.js";
import headerUserScoreTemp from "./templates/headerUserScoreTemp.js";

const headerUserScore = (currentLevel, score, monsterHp) => {
  const render = () => {
    refs.userScore.innerHTML = "";
    refs.userScore.insertAdjacentHTML(
      "beforeend",
      headerUserScoreTemp(currentLevel, score, monsterHp)
    );
  };
  render();
};

export default headerUserScore;
