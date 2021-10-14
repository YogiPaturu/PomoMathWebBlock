// eventHandler for when extension loads

// mathProblemGenerator
function mathProblemGenerator() {
  // Array of math operations
  const operators = [
    {
      operation: "+",
      method: function (a, b) {
        return a + b;
      },
    },
    {
      operation: "-",
      method: function (a, b) {
        return a - b;
      },
    },
    {
      operation: "*",
      method: function (a, b) {
        return a * b;
      },
    },
  ];

  // Two random numbers between 0 and 100
  const randomA = Math.round(Math.random() * 100);
  const randomB = Math.round(Math.random() * 100);

  // Random index to select random math operation array
  const randomMathFunc = Math.round(Math.random() * (operators.length - 1));

  // Pass through random numbers into random operation array method
  const answer = Math.round(operators[randomMathFunc].method(randomA, randomB));
  const mathOperation = [
    randomA,
    operators[randomMathFunc].operation,
    randomB,
    answer,
  ];
  return mathOperation;
}
console.log(mathProblemGenerator());

// blockWebpage - overlay image of adi
function blockWebpage() {
  const adiImage = document.createElement("img");
  adiImage.setAttribute("class", "adiImage");
  adiImage.setAttribute("src", "https://imgur.com/1KO5bOB.jpeg");
  adiImage.style.height = "200vh";
  adiImage.style.width = "200wh";
  adiImage.style.position = "absolute";
  adiImage.style.top = 0;
  adiImage.style.left = 0;
  adiImage.style.zIndex = 100;

  // const sound = document.createElement("audio");
  // sound.autoplay = "true";
  // sound.id = "audio-player";
  // sound.controls = "controls";
  // sound.src = "/banjo.mp3";
  // sound.type = "audio/mp3";
  // sound.load();
  // sound.addEventListener("load", function() { 
  //   sound.play(); 
  // }, true);


  const body = document.querySelector("body");
  body.appendChild(adiImage);
  console.log(body);
}

// unblockWebpage - if solution to mathProblem is correct, remove overlayed image
function unblockWebpage(body) {
  const adiImage = document.querySelector(".adiImage");
  body.removeChild(adiImage);
}

/* timer:
[ ] invoke popup upon installation
[ ] after solving, reset the timer
[ ] when timer runs out, invoke popup
*/

function pomodoroTimer() {
  blockWebpage();

  // const mathArray = mathProblemGenerator();
  // const mathPopup = document.querySelector('')
  // const mathProblem = document.createElement('div');
  // mathProblem.style.zIndex = 101;

  // mathProblem.innerText = `${mathArray[0]} ${mathArray[1]} ${mathArray[2]}`;
  // // popup.appendChild(mathProblem);
  // body.appendChild(mathProblem);
  console.log("loaded");

  // document.getElementById("#answer");

  setTimeout(pomodoroTimer, 100000);
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

document.addEventListener("DOMContentLoaded", pomodoroTimer());
