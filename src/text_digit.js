var low = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10,
    "eleven": 11,
    "twelve": 12,
    "thirteen": 13,
    "fourteen": 14,
    "fifteen": 15,
    "sixteen": 16,
    "seventeen": 17,
    "eighteen": 18,
    "nineteen": 19,
    "twenty": 20,
    "thirty": 30,
    "forty": 40,
    "fifty": 50,
    "sixty": 60,
    "seventy": 70,
    "eighty": 80,
    "ninety": 90
};

var high = {
    "thous": 1000,
    "million": 1000000,
    "billion": 1000000000
};

var trackerN;
var trackerG;

var getNumber = function(inputString) {
    trackerN = 0;
    trackerG = 0;
    var lowercaseString = inputString.toLowerCase().replace(/and/g, "");
    var splittedWords = lowercaseString.split(" ");
    splittedWords.forEach(wordToNumber);
    return trackerN + trackerG;
};

var wordToNumber = function(word) {
    var tempNumber = low[word];
    if (tempNumber != null) {
        trackerG = trackerG + tempNumber;
    } else if (word == "hundred") {
        trackerG = trackerG * 100;
    } else {
        tempNumber = high[word];
        if (tempNumber != null) {
            trackerN = trackerN + (trackerG * tempNumber);
            trackerG = 0;
        }
    }
};

var getTextSentence = function(sentence) {
    sentence = sentence.toLowerCase().replace(/and/g, " ");
    var sentenceArray = (sentence + " .").split(" ");

    var start = false;
    var word = "";
    var finalWord = "";
    var i = 0;
    for (i = 0; i < sentenceArray.length; i++) {
        //console.log(low[sentenceArray[i]] + "   " + high[sentenceArray[i]]);
        //console.log(sentenceArray[i]);
        if (low[sentenceArray[i]] != undefined || high[sentenceArray[i]] != undefined) {
            // console.log(sentenceArray[i]);
            start = true;
            word = word + sentenceArray[i] + " ";
        } else if (start) {
            start = false;
            var tempWord = getNumber(word);
            finalWord = finalWord + tempWord + " " + sentenceArray[i] + " ";
            word = "";
        } else {
            start = false;
            finalWord = finalWord + sentenceArray[i] + " ";
        }
    }
    return finalWord.trim();
};