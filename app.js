var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// console.log(outputDiv);

// // input -> when 'translate' button is clicked :
// function clickHandler() {
//     console.log("clicked!");
//     console.log("input", txtInput.value)
//     // if u want to read value then use .value with an element
//     // if you want to write on something or put an output then use .innerText with it
// };
// btnTranslate.addEventListener("click", clickHandler)
// // any function which takes another function as an input, then the inputed fn is called callback (specifically here i.e. not always);


function clickHandler() {
    outputDiv.innerText = "ajsjsjsjsjsjsjs   " + txtInput.value;
};
btnTranslate.addEventListener("click", clickHandler);