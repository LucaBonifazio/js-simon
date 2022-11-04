// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
const boxNumber = document.querySelector('.counter-box');
const boxResult = document.querySelector('.counter-box-result');

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const eleMemory = setTimeout(getRandomInteger, 5000);

function getRandomInteger() {
    document.getElementsByClassName("game-box-result").innerHTML = "Ripeti i numeri";
  }

for (let i = 1; i <= 5; i++) {
    getRandomInteger = Math.floor(Math.random() * 100 ) + 1;
    const eleNumber = document.createElement('div');
    eleNumber.classList.add('number');
    eleNumber.innerHTML = getRandomInteger;
    boxNumber.append(eleNumber);
}



// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.