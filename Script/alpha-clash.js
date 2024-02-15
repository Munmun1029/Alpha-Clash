function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('Player pressed', playerPressed);

    //get the expected to press key 
    const currentAlphabetElement = document.getElementById('randomAlphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // checked matching key
    if(playerPressed===expectedAlphabet){
        console.log('you get a point');
        console.log('You have press correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    }
    else{
        console.log("you lost a life.");
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
    showElementById('play');
    continueGame();
}

// alternative way
//     // hide the home screen
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden');

//     // show the playground
//     const playGroundSection = document.getElementById('play');
//     playGroundSection.classList.remove('hidden');





