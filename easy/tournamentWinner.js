const homeTeamWon = 1;

function tournamentWinner (competitions, results) {
  let currentBestTeam = "";
  const scores = {currentBestTeam: 0};

  for (let i = 0; i < competitions.length; i++) {
    const result = results[i];
    [homeTeam, awayTeam] = competitions[i];
    const winningTeam = result === homeTeamWon ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    };

  };
  return currentBestTeam; 
};

function updateScores(team, score, scores) {
  if (scores[team]) {
    scores[team] += score;
  } else {
    scores[team] = score
  };
};