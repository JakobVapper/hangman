const alphabet = 'ABCDEFGHIJKLMNOPQRSŠZŽTUVWÕÄÖÜXY'.split('');
const word = 'AMETIKOOL'.split('');
const alphabetDiv = document.getElementById('alphabet');
let guess = [...Array(word.length).keys()].map(i => '_');
let wrongGuesses = 0;

const wordDiv = document.getElementById('word');

for ( let i in guess ) {
    const letterDiv = document.createElement('div');
    letterDiv.setAttribute('id', 'letter_' + i);
    letterDiv.innerText = guess[i];
    wordDiv.appendChild(letterDiv);
}

for ( let i in alphabet ) {
    const aDiv = document.createElement('Div');
    aDiv.setAttribute('id', alphabet[i]);
    aDiv.innerText = alphabet[i];
    alphabetDiv.appendChild(aDiv);
}

document.addEventListener('keyup', e => {
    const g = e.key.toUpperCase();
    if ( alphabet.includes(g) ) {
        if ( word.includes(g) ) {
            for ( let i in word) {
                if ( word[i] == g ) {
                    const letterDiv = document.getElementById('letter_' + i);
                    letterDiv.innerText = g;
                }
            }
        } else {
            if ( !wrongGuesses.includes(g) ) {
                score--;

                const scoreImg = document.querySelector('#score img');
                scoreImg.setAttribute('src', 'img/' + score + '.png');
            }
        }

        const aDiv = document.createElementById(g);
        aDiv.classlist.app('grayed-out')
    }
});