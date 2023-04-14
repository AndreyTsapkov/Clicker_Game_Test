const headerUserScore = (currentLevel, score, monsterHp) => {
  return `          <p class="user_score-1">Your score: <span class="score">${score}</span></p>

          <p class="user_score-1">Level: <span class="level">${currentLevel}</span></p>

          <p class="user_score-1">
            Monster's HP: <span class="monsterHp">${monsterHp}</span>
          </p>`;
};

export default headerUserScore;
