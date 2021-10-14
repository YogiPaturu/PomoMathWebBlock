// eventHandler for when extension loads

// mathProblemGenerator
function mathProblemGenerator() {
    // Array of math operations
    const operators = [
        {
            operation: '+',
            method: function(a,b){return a + b}
        },
        {
            operation: '-',
            method: function(a,b){return a - b}
        },
        {
            operation: '*',
            method: function(a,b){return a * b}
        }
    ]
    
    // Two random numbers between 0 and 100
    const randomA = Math.round(Math.random()*100);
    const randomB = Math.round(Math.random()*100);

    // Random index to select random math operation array
    const randomMathFunc = Math.round(Math.random()*(operators.length - 1))
    
    // Pass through random numbers into random operation array method
    const answer = Math.round(operators[randomMathFunc].method(randomA,randomB));
    const mathOperation = [randomA, operators[randomMathFunc].operation, randomB, answer];
    return mathOperation
}
console.log(mathProblemGenerator());

// blockWebpage - overlay image of adi
function blockWebpage(body) {
  const adiImage = document.createElement('img');
  adiImage.setAttribute('class', 'adiImage');
  adiImage.style.height = '100vh';
  adiImage.style.width = '100wh';
  adiImage.style.position = 'absolute';
  adiImage.style.top = 0;
  adiImage.style.left = 0;
  adiImage.style.zIndex = 100;
  
  body.appendChild(adiImage);
}

// unblockWebpage - if solution to mathProblem is correct, remove overlayed image
function unblockWebpage(body) {
  const adiImage = document.querySelector('.adiImage');
  body.removeChild(adiImage);
}

/* timer:
[ ] invoke popup upon installation
[ ] after solving, reset the timer
[ ] when timer runs out, invoke popup
*/
const docBody = document.querySelector('body');

function pomodoroTimer(body){
  blockWebpage(body);
  
  const mathArray = mathProblemGenerator();
  const mathPopup = document.querySelector('')
  const mathProblem = document.createElement('div');
  mathProblem.style.zIndex = 101;

  mathProblem.innerText = `${mathArray[0]} ${mathArray[1]} ${mathArray[2]}`;
  // popup.appendChild(mathProblem);
  body.appendChild(mathProblem);


  // document.getElementById("#answer");

  setTimeout(pomodoroTimer, 100000)
}
// let username = document.getElementById("username").value;
// let password = document.getElementById("password").value;

// if(username === "yogi.jpeg.exe" && password === "123") {
//     console.log("Patrick Constantine");
//     window.location.assign("https://www.instagram.com");
// }
// else {
//     window.alert('no no no');
// }


// browser.runtime.onInstalled.addListener(pomodoroTimer)
// blockWebpage -> mathProblemGenerator -> popup -> unblockWebpage -> pomodoroTimer -> 

document.addEventListener('DOMContentLoaded', pomodoroTimer(docBody))