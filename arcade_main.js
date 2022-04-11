const wordList = ['press', 'liars', 'bench', 'hunch', 'lunch', 'civil', 'vivid', 'plate', 'plaid', 'built']

function lettersOnlyAndNextBox(input, move) {
    let onlyLetters = /[^a-z]/gi;
    input.value = input.value.replace(onlyLetters, "");
    input.value.toUpperCase()
    if(input.value.length >= input.maxlength) {
         document.getElementByID(move).focus();
     };
};

// function shuffle(array) {
//     var currentValue = array.length, t, i;
  
//     // While there remain elements to shuffle…
//     while (currentValue) {
  
//       // Pick a remaining element…
//       i = Math.floor(Math.random() * currentValue--);
  
//       // And swap it with the current element.
//       t = array[currentValue];
//       array[currentValue] = array[i];
//       array[i] = t;
//     }
  
//     return array;
//   }

// console.log(shuffle(wordList))


function generateRandomWord() {
    let indexForWordList = Math.floor(Math.random()* wordList.length);
    return wordList[indexForWordList];
};

let guessWord = generateRandomWord(wordList);

function createArray() {
    let guessWordArr = [];
    for (let i=0; i<guessWord.length; i++) {
        const guessLetter = guessWord[i];
        guessWordArr.push(guessLetter);
    };
    return guessWordArr;
};

const guessWordArr = createArray(guessWord)
console.log(guessWordArr);
const guessWord2 = ['p','l','a','i','d']


const body = document.querySelector('body');

let currentRow = 0;

const input0 = document.querySelector('#letter_0_row_'+currentRow);
const input1 = document.querySelector('#letter_1_row_'+currentRow);
const input2 = document.querySelector('#letter_2_row_'+currentRow);
const input3 = document.querySelector('#letter_3_row_'+currentRow);
const input4 = document.querySelector('#letter_4_row_'+currentRow);

if (input0.value.length !== 0 && input1.value.length !== 0 && input2.value.length !== 0 && input3.value.length !== 0 && input4.value.length !== 0) {
    body.addEventListener('keyup', function(event) {
        event.preventDefault(); 
        if (event.keyCode === 13) {
            const rowWordArr = [input0.value, input1.value, input2.value, input3.value, input4.value]
            console.log(rowWordArr)
            
            checkWord(guessWordArr, rowWordArr);
            currentRow+=1
        }
    });
};





function checkWord(guessArray, rowArray) {
    for (let i=0; i < guessArray.length; i++) {

        if (guessArray[i] === rowArray[i]) {
            const correctLetter = document.querySelector('#letter_'+i+'_row_'+currentRow);
            correctLetter.className = 'green';

        } else if (guessArray.includes(rowArray[i])) {
            const inWord = document.querySelector('#letter_'+i+'_row_'+currentRow);
            inWord.className = 'yellow';

        } else {
            const notInWord = document.querySelector('#letter_'+i+'_row_'+currentRow);
            notInWord.className = 'gray';
        };

    };

};
// console.log(checkWord(guessWordArr, guessWord2));

