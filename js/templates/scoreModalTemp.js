const scoreModalTemp = (currentLevel, score) => {
  return `
    <div class="backdrop scoreModal">
        <div class="modal score_modal">
            <p class="modal_title">Level <span class="level_name">${
              currentLevel - 1
            }</span> complete</p>
            <p class="modal_text modal_count">Your level score: <span class="modal_count">${score}</span></p>

            <button class="button button_startLevel" type="button">Start <span class="level_name">${currentLevel}</span> level</button>
        </div>
        
    </div>`;
};

export default scoreModalTemp;
