const alphabet = 'ABCDEFGHIJKLMNOPQRSŠZŽTUVWÕÄÖÜXY'.split('');
const word = 'AMETIKOOL'.split(' ');
let guess = [...Array(word.length).keys()].map(i => '_');

const wordDiv = document.getElementById('word');

for ( let i in guess ) {
    const letterDiv = document.createElement('div');
    letterDiv.setAttribute('id', 'letter_');
    letterDiv.innerText = guess[i];
    wordDiv.append(letterDiv);
};

document.addEventListener('keyup', e => {
    if (alphabet.includes(e.key.toUpperCase())) {
        console.log(e.key);
    }
}
)