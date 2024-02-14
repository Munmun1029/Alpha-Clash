function continueGame(){
    // generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet',alphabet);

    // set alphabet

    const currentAlphabetElement = document.getElementById('randomAlphabet');
    currentAlphabetElement.innerText =alphabet;

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





