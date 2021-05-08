let userScore = 0;
let compScore = 0;
const usrScore_span = document.getElementById('usr');
const compScore_span = document.getElementById('comp');
const scoreboard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');

function getComputerChoice() {
	const choices = ['r', 'p', 's']
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";

}

function win(userChoice, computerChoice) {
	const usrChoice = document.getElementById(userChoice);
	userScore++;
	usrScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convertToWord(userChoice)}  Beats 
${convertToWord(computerChoice) } You WINS !`;
	usrChoice.classList.add('green');
	setTimeout(function () {
		usrChoice.classList.remove('green')
	}, 800);
}

function lose(userChoice, computerChoice) {
	const usrChoice = document.getElementById(userChoice);
	compScore++;
	usrScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convertToWord(userChoice)}  Loses To ${convertToWord(computerChoice) } You LOSE!`;
	usrChoice.classList.add('red');
	setTimeout(function () {
		usrChoice.classList.remove('red')
	}, 800);
}

function draw(userChoice, computerChoice) {
	const usrChoice = document.getElementById(userChoice);
	usrScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convertToWord(userChoice)} Equals To ${convertToWord(computerChoice) } It's a DRAW!`;
	usrChoice.classList.add('grey');
	setTimeout(function () {
		usrChoice.classList.remove('grey')
	}, 800);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}

}

game();

function main() {

	rock.addEventListener('click', function () {
		game("r");
	})

	paper.addEventListener('click', function () {
		game("p");
	})

	scissors.addEventListener('click', function () {
		game("s");
	})

}

main();
