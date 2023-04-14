import refs from "./helpers/refs.js";
import gameOverModalTemp from "./templates/gameOverModalTemp.js";

const gameOverModal = (score, gameOver) => {
  const render = () => {
    refs.gameOverBackdrop.innerHTML = "";
    refs.gameOverBackdrop?.classList.remove("is-hidden");
    refs.gameOverBackdrop.insertAdjacentHTML(
      "beforeend",
      gameOverModalTemp(score)
    );

    const startGameButton = document.querySelector(".button_startGame");
    startGameButton.addEventListener("click", onStartGame);

    const onStartGame = () => {
      refs.gameOverBackdrop?.classList.add("is-hidden");
      refs.gameOverBackdrop.innerHTML = "";
      gameOver();
    };
  };
  render();
};

export default gameOverModal;
