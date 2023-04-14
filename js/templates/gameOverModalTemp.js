const gameOverModalTemp = score => {
  return `    
    <div class="modal finishGameModal">
        <p class="modal_title" >You win!</p>
        <p class="modal_text modal_count">Your total score: <span class="modal_count">${score}</span></p>
        <button class="button button_startGame" type="button">Restart game</button>
    </div>`;
};

export default gameOverModalTemp;
