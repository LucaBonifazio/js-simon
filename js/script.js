
const boxNumber = document.querySelector('.counter-box');
const boxResult = document.querySelector('.result');
const boxTimer = document.querySelector('.timer');

const idInterval = setInterval(userMemory, 3000);
setInterval(stopInterval, 3000);

function userMemory() {
    prompt("Dimmi il numero");
}

function stopInterval() {
    clearInterval(idInterval);
}

for (let i = 1; i <= 5; i++) {
    getRandomInteger = Math.floor(Math.random() * 100 ) + 1;
    const eleNumber = document.createElement('div');
    eleNumber.classList.add('number');
    eleNumber.innerHTML = getRandomInteger;
    boxNumber.append(eleNumber);
}




