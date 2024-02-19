function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('Player pressed', playerPressed);
    
    //stop the game by "esc"
    if(playerPressed==='Escape'){
        gameOver();
    }


    //get the expected to press key 
    const currentAlphabetElement = document.getElementById('randomAlphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // checked matching key
    if (playerPressed === expectedAlphabet) {
        console.log('You get a point');
        console.log('You have press correctly', expectedAlphabet);

        // update score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);

        // new score
        const newScore = currentScore + 1;

        // show new updated score
        currentScoreElement.innerText = newScore;

        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }
    else {
        // update life
        const currentLifeElement = document.getElementById('current-Life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        console.log(currentLife);

        // new life
        const newLife = currentLife - 1;

        // show new updated life
        currentLifeElement.innerText = newLife;
        console.log("you lost a life.");

        if(newLife===0){
            gameOver();

        }
    }


}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function continueGame() {
    // generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet', alphabet);

    // set alphabet

    const currentAlphabetElement = document.getElementById('randomAlphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color 
    setBackgroundColorById(alphabet);

}

function play() {
    hideElementById('home');
    hideElementById('final-score')
    showElementById('play');

    // reset score and life
    setTextElementValueById('current-Life',5);
    setTextElementValueById('current-score',0);
    continueGame();
}

function gameOver(){
    hideElementById('play');
    showElementById('final-score');

    // get final score
    const lastScore =getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score',lastScore);

    // clear keyboard 
    const currentAlphabet= getElementTextById('randomAlphabet');
    removeBackgroundColorById(currentAlphabet);
}

// alternative way
//     // hide the home screen
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');

//     // show the playground
//     const playGroundSection = document.getElementById('play');
//     playGroundSection.classList.remove('hidden');





