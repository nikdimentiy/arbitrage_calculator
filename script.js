/*
  This function calculates arbitrage opportunities.

  Parameters:
    player1_odds (float): The odds for Player 1.
    player2_odds (float): The odds for Player 2.

  Returns:
    None.
*/
function calculate() {
  // Get the odds for Player 1 and Player 2 from the input fields.
  const player1_odds = parseFloat(document.getElementById("player1_odds").value);
  const player2_odds = parseFloat(document.getElementById("player2_odds").value);

  // Calculate the probability of Player 1 winning and Player 2 winning.
  const player1_prob = (1 / player1_odds) * 100;
  const player2_prob = (1 / player2_odds) * 100;

  // Calculate the total probability of either Player 1 or Player 2 winning.
  const total_prob = player1_prob + player2_prob;

  // Calculate the true margin, which is the difference between 100% and the total probability.
  const true_margin = 100 - total_prob;

  // If the total probability is less than 100%, then there is an opportunity for arbitrage.
  if (total_prob < 100) {
    // Calculate the amount to bet on each player.
    const bet1 = (player2_prob / total_prob) * 100;
    const bet2 = (player1_prob / total_prob) * 100;

    // Display the results.
    document.getElementById("result").innerHTML = `
      <p style="color:blue">There is an opportunity for arbitrage!</p>
      <ul>
        <li>Bet ${bet2.toFixed(2)} units on Player 1</li>
        <li>Bet ${bet1.toFixed(2)} units on Player 2</li>
      </ul>
      <p style="color:green">The true margin is ${true_margin.toFixed(2)}%.</p>
    `;

    document.getElementById("result").style.display = "block";
  } else {
    // Display a message that there is no opportunity for arbitrage and show the true margin value in a different color.
    document.getElementById("result").innerHTML = `<p style="color:red">There is no opportunity for arbitrage. The true margin is <span style="color: #e76f51">${true_margin.toFixed(2)}%</span>.</p>`;

    document.getElementById("result").style.display = "block";
  }
}

