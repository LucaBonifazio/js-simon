let nRandoms = 5;
let minRandom = 1;
let maxRandom = 100;
let timeToHide = 30000;
const eleNumbers = document.querySelector('.container');
let arrRandoms = getArrRandomIntegers(nRandoms, minRandom, maxRandom);
console.log(arrRandoms);

function hideNumbers() {
	eleNumbers.innerHTML = '';
}

function endGame() {
	const userNumbers = askNumbers();
	console.log(userNumbers);
	const guessedIndexes = verifyNumbers(arrRandoms, userNumbers);
	console.log(guessedIndexes);
	sayScore(arrRandoms, guessedIndexes);
}

function askNumbers() {
	const inputUser = prompt('Dammi i numeri separati da spazio: ');
	const arrInputUser = inputUser.split(' ');

	for (let i = 0; i < arrInputUser.length; i++) {
		arrInputUser[i] = parseInt(arrInputUser[i]);
	}
	return arrInputUser;
}

function verifyNumbers(arr1, arr2) {
	const arrGuessedIndexes = [];
	for (let i = 0; i < arr1.length; i++) {
		if (arr2.includes(arr1[i]) ) {
			arrGuessedIndexes.push(i);
		}
	}
	return arrGuessedIndexes;
}

function sayScore(arrValues, arrIndexes) {
	let msg;
	if (arrIndexes.length === 0) {
		msg = 'Non ne hai memorizzato neanche uno, dove hai la testa!';
	} else if (arrIndexes.length === arrValues.length) {
		msg = 'Impressionante! Li hai memorizzati tutti!';
	} else {
		msg = `Ne hai memorizzati ${arrIndexes.length} su 5!`;
	}
	console.log(msg);
	alert(msg);
}

function getArrRandomIntegers(n, min, max) {
	const arrRandoms = [];
	for (let i = 0; i < n; i++) {
		arrRandoms.push(getRandomInteger(min, max))
	}
	return arrRandoms;
}

function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

setTimeout(hideNumbers, timeToHide);
setTimeout(endGame, timeToHide + 100);

for (let i = 0; i < arrRandoms.length; i++) {
	eleNumbers.innerHTML += `<div class="number">${arrRandoms[i]}</div>`;
}
