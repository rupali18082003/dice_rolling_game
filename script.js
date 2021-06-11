'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

score0El.textContent =0;
score1El.textContent =0;
let playing = true;
diceEl.style.display = 'none';
btnHold.style.display = 'none';


let currentScore = 0;
let activePlayer = 0;

const scores = [0,0];

const switchPlayer = function(){
		currentScore = 0;
		activePlayer = activePlayer === 0 ? 1 : 0;
		//choosing one of the active player
		player0El.classList.toggle('player--active');
		player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function() {
    if(playing){
		let dice =Math.trunc((Math.random() * 6)+1);
		let change = 0;
		console.log(dice);
		diceEl.style.display='block';
		diceEl.src = `dice-${dice}.png`;
		 if(btnRoll.clicked==false || dice==6){
			console.log("if block");
			document.getElementById(`current--${activePlayer}`).textContent = "+1 chance"; 
			//console.log("currentScore " + currentScore);
			scores[activePlayer] += dice;
			//console.log("Score " + scores[activePlayer]);
			document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
		}
		else{
			//current player2
			currentScore += dice;
			//selecting player dyanamically
			document.getElementById(`current--${activePlayer}`).textContent = currentScore; 
		
			//console.log("currentScore " + currentScore);
			console.log("else block");
			scores[activePlayer] += currentScore;
			document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];


			if (scores[activePlayer] >= 20) {
			playing = false;
			diceEl.style.display = 'none';
			btnHold.style.display = 'block';
			btnRoll.style.display = 'none';

			btnHold.textContent = `* PLAYER ${activePlayer+1} WON!`
			document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
			document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
		}

			switchPlayer();
		}
  	}
});
