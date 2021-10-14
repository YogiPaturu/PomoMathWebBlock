

// blockWebpage - overlay image of adi
function blockWebpage() {
  const adiImage = document.createElement("img");
  adiImage.setAttribute("class", "adiImage");
  adiImage.setAttribute("src", "https://www.ballaratyoga.com.au/wp-content/uploads/2017/12/wooden-block-3.jpg");
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
  console.log('blockWebpage executed')
}

document.addEventListener("DOMContentLoaded", blockWebpage())

// document.addEventListener("click", () => {
//   const myAudio = new Audio(chrome.runtime.getURL("./knock.mp3"));
//   myAudio.controls = 'controls';
//   myAudio.play();
// });





// ----------------------
// eventHandler for when extension loads

// mathProblemGenerator
// function mathProblemGenerator() {
//   // Array of math operations
//   const operators = [
//     {
//       operation: "+",
//       method: function (a, b) {
//         return a + b;
//       },
//     },
//     {
//       operation: "-",
//       method: function (a, b) {
//         return a - b;
//       },
//     },
//     {
//       operation: "*",
//       method: function (a, b) {
//         return a * b;
//       },
//     },
//   ];

//   // Two random numbers between 0 and 100
//   const randomA = Math.round(Math.random() * 100);
//   const randomB = Math.round(Math.random() * 100);

//   // Random index to select random math operation array
//   const randomMathFunc = Math.round(Math.random() * (operators.length - 1));

//   // Pass through random numbers into random operation array method
//   const answer = Math.round(operators[randomMathFunc].method(randomA, randomB));
//   const mathOperation = [
//     randomA,
//     operators[randomMathFunc].operation,
//     randomB,
//     answer,
//   ];
//   return mathOperation;
// }
// console.log(mathProblemGenerator());

// // unblockWebpage - if solution to mathProblem is correct, remove overlayed image
// function unblockWebpage(body) {
//   const adiImage = document.querySelector(".adiImage");
//   body.removeChild(adiImage);
// }