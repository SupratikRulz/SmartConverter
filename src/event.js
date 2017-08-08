// function doText() {
//     var num = Number((document.getElementById("text1").value).trim());
//     var string = getInWords(num);
//     document.getElementById("result1").innerHTML = string;

// }

// function doNumber() {
//     var string = document.getElementById("text2").value.trim();
//     var num = getNumber(string);
//     document.getElementById("result2").innerHTML = num;
// }

function doNumberSentence() {
    var string = document.getElementById("text3").value.trim();
    var sentence = getNumberSentence(string);
    document.getElementById("result3").innerHTML = sentence;
}

function doTextSentence() {
    var string = document.getElementById("text4").value.trim();
    string = insertSpaceBeforeAfterPunctuation(string);
    var sentence = getTextSentence(string);
    document.getElementById("result4").innerHTML = sentence;
}

window.onload = function() {
    // document.getElementById("doText").addEventListener("click", doText);
    // document.getElementById("doNumber").addEventListener("click", doNumber);
    document.getElementById("doNumberSentence").addEventListener("click", doNumberSentence);
    document.getElementById("doTextSentence").addEventListener("click", doTextSentence);
};