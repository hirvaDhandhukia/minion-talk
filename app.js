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
// // here clickHandler is called callback function

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

//what to do when error happens
function errorHandler(error) {
    console.log("error occured", error);
    alert("someting wrong with the server! It can take only 5 values per hour.")
}

// what to do when click happens
function clickHandler() {
    var inputText = txtInput.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
    .then(response => response.json()) // server is processing here
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; // output
    })
    .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler);

// https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors