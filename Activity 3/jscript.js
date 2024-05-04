const randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById('guessinput').value;
  const message = document.getElementById('message');
  const attemptCount = document.getElementById('attempt');

  if (isNaN(guessInput) || guessInput < 1 || guessInput > 10) {
    message.textContent = "Invalid input: Please input a number between 1 - 10";
    message.style.fontSize = "1rem";
    return;
  }

  attempts++;

  if (parseInt(guessInput) === randomNumber) {
    message.textContent = `Congratulations! You've won in ${attempts} attempt${attempts === 1 ? '' : 's'} 🎉.`;
    document.getElementById('guessinput').disabled = true; // Ito naman disibled pag nanalo na  
    message.style.color = "#FE795C";
  } else if (parseInt(guessInput) < randomNumber) {
    message.textContent = "Your guess is low.";
    message.style.color = "red";
    message.style.fontWeight = "bold";
  } else {
    message.textContent = "Your guess is high.";
    message.style.color = "green";
    message.style.fontWeight = "bold";
  }

  attemptCount.textContent = attempts; // Ito naman sa pag ccount ng attempts 
  document.getElementById('guessinput').value = ''; 
}



