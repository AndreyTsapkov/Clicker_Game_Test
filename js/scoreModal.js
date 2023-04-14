import refs from "./helpers/refs.js";
import scoreModalTemp from "./templates/scoreModalTemp.js";
import gameOverModal from "./gameOverModal.js";

const scoreModal = (startGame, currentLevel, score) => {
  const render = () => {
    refs.scoreModalBackdrop.innerHTML = "";
    refs.scoreModalBackdrop?.classList.remove("is-hidden");
    refs.scoreModalBackdrop.insertAdjacentHTML(
      "beforeend",
      scoreModalTemp(currentLevel, score)
    );

    if (currentLevel < 6) {
      const startLevelButton = document.querySelector(".button_startLevel");
      startLevelButton.addEventListener("click", onStartLevel);

      function onStartLevel() {
        refs.scoreModalBackdrop?.classList.add("is-hidden");
        refs.scoreModalBackdrop.innerHTML = "";
        startGame();
      }
    } else {
      refs.scoreModalBackdrop?.classList.add("is-hidden");
      refs.scoreModalBackdrop.innerHTML = "";

      gameOverModal(score, endGame);
    }
  };
  render();
};

export default scoreModal;
