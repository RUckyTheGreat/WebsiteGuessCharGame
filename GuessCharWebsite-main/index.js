
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

const popUpElements = document.querySelectorAll('.pop-up');


function handleScroll() {
    popUpElements.forEach(popUpElement => {
        if (isInViewport(popUpElement)) {
            popUpElement.classList.add('visible');
            popUpElement.classList.remove('hidden');
        }
    });
}


window.addEventListener('scroll', handleScroll);

// Daftar karakter, lu orang bisa ubah/ nambah inii. FOrmat nya jan di ubah ye monyet dasar. Sesuai format aja ngisinya
const characters = [
    { name: 'Vertin', Damage: 'Unknown', Afflatus: 'Unknown', initials: 'V', img: 'Vertin_Icon.webp' },
    { name: 'Druvis', Damage: 'Mental', Afflatus: 'Plant', initials: 'D', img: 'Druvis_III_Icon.webp' },
    { name: 'Sonetto', Damage: 'Reality', Afflatus: 'Mineral', initials: 'S', img: 'Sonetto_Icon.webp' },
    { name: 'Schneider', Damage: 'Mental', Afflatus: 'Beast', initials: 'S', img: 'Schneider_Icon.webp' },
    { name: 'Regulus', Damage: 'Mental', Afflatus: 'Star', initials: 'R', img: 'Regulus_Icon.webp' }
];

// Kamu nanya ini buat apa ? coba aja edit guessleft
let guessesLeft = 5;
let currentCharacter = characters[Math.floor(Math.random() * characters.length)];

if (!localStorage.getItem('score')) {
    localStorage.setItem('score', 0);
}

function displayScore() {
    document.getElementById('score').textContent = `Skor: ${localStorage.getItem('score')}`;
}


function giveClue(characterName) {
    const clueElement = document.getElementById('clue');
    const clue = characterName.toLowerCase().charAt(0).toUpperCase() + characterName.slice(1);
    clueElement.textContent = `Clue: Nama karakter dimulai dengan huruf "${clue.charAt(0)}"`;
}


function increaseScore() {
    let score = parseInt(localStorage.getItem('score')); 
    if (isNaN(score)) {
        score = 0;  
    }
    score++;  
    localStorage.setItem('score', score);  
    displayScore();  
}



function checkGuess() {
    let guessInput = document.getElementById("guess");
    let resultElement = document.getElementById("result");
    let remainingGuessesElement = document.getElementById("remaining-guesses");

    let guess = guessInput.value.trim();
    if (!guess) {
        resultElement.textContent = 'Masukkan tebakan terlebih dahulu!';
        resultElement.style.color = 'yellow'; 
        return;
    }


    const validCharacter = characters.some(character => character.name.toLowerCase() === guess.toLowerCase());
    if (!validCharacter) {
        resultElement.textContent = 'Nama karakter tidak valid! Coba lagi.';
        resultElement.style.color = 'yellow'; 
        return;
    }

    let clues = [];


    setTimeout(() => {
        if (guess.toLowerCase() === currentCharacter.name.toLowerCase()) {
            resultElement.style.color = "green"; 
            resultElement.innerHTML = `Benar! Nama karakter adalah ${currentCharacter.name}. Game direset.`;
            increaseScore(); 
            GameWin(); 
        } else {
            let clue = `Petunjuk: `;
            clue += guess.toLowerCase()[0] === currentCharacter.name.toLowerCase()[0] ? 'Inisial benar, ' : 'Inisial salah, ';
            clue += currentCharacter.Damage === characters.find(c => c.name.toLowerCase() === guess.toLowerCase())?.Damage ? 'Damage benar, ' : 'Damage salah, ';
            clue += currentCharacter.Afflatus === characters.find(c => c.name.toLowerCase() === guess.toLowerCase())?.Afflatus ? 'Afflatus benar' : 'Afflatus salah';
            clues.push(clue);
            resultElement.style.color = 'red'; 
            resultElement.innerHTML = clues.join('<br>');

            guessesLeft--;
            remainingGuessesElement.textContent = `Tebakan yang tersisa: ${guessesLeft}`;
            
            if (guessesLeft === 0) {
                resultElement.style.color = "red"; 
                resultElement.innerHTML += '<br><strong>Game Over! Karakter yang benar adalah ' + currentCharacter.name + '. Game direset.</strong>';
                resetGame(); 
            }
        }
        guessInput.value = ""; 
    }, 500); 
}




function resetGame() {
    console.log("Mulai...");

    localStorage.setItem('score', 0); 

    setTimeout(() => {
        guessesLeft = 5;
        currentCharacter = characters[Math.floor(Math.random() * characters.length)];
        document.getElementById("remaining-guesses").textContent = `Tebakan yang tersisa: ${guessesLeft}`;
        document.getElementById("result").textContent = "";
        document.getElementById("guess").value = "";
        displayScore(); 
    }, 5000); 
}

function GameWin() {
    console.log("Mulai...");

    setTimeout(() => {
        guessesLeft = 5;
        currentCharacter = characters[Math.floor(Math.random() * characters.length)];
        document.getElementById("remaining-guesses").textContent = `Tebakan yang tersisa: ${guessesLeft}`;
        document.getElementById("result").textContent = "";
        document.getElementById("guess").value = "";

        if (guessesLeft === 0) {
            localStorage.removeItem('score'); 
        }
    }, 5000); 
}



function renderCharacterList() {
    const listContainer = document.querySelector('.box1');
    
    listContainer.innerHTML = ''; 

    characters.forEach(character => {
        const charElement = document.createElement('div');
        charElement.classList.add('character-item');
        
        charElement.innerHTML = `
            <img src="img/${character.img}" alt="${character.name}" style="max-width: 70px; height: auto;">
            <p>Name: ${character.name} <br> Afflatus: ${character.Afflatus} <br> Damage: ${character.Damage}</p>
        `;
        

        listContainer.appendChild(charElement);
    });


    listContainer.classList.add('visible');
}


document.addEventListener('DOMContentLoaded', () => {
    renderCharacterList(); 
    displayScore(); 
    document.querySelector('.pop-up.box1').classList.add('visible');
});

document.getElementById('guessButton').addEventListener('click', checkGuess);
document.getElementById('nextRoundButton').addEventListener('click', resetGame);

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
