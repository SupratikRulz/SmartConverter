var nums = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
};
var tens = {
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90
};
var position = {
    'hundred': 100,
    'thousand': 1000,
    'million': 1000000,
    'billion': 1000000000
};

var insertSpaceBeforeAfterPunctuation = function(string) {
    var separatorsArray = ['+', "'", '-', '(', ')', '*', '/', ':', '?', '.', ',', '%', '@', '#', '$', '%', '^', '&', ';', '[', ']', '{', '}', '>', '<'];
    for (var i = 0; i < separatorsArray.length; i++) {
        var regex = new RegExp("\\" + separatorsArray[i], "g");
        string = string.replace(regex, " " + separatorsArray[i] + " ");
    }
    return string;
};

var stringTonumArr = function(numWord) {
    var numArr = numWord.split(' ');
    return numArr;
};

var englishToNumeric = function(numWord) {
    var numArr = stringTonumArr(numWord);
    var result = 0;
    var temp = 0;
    for (var i = 0; i < numArr.length; i++) {
        if (nums[numArr[i]] != null) {
            temp += nums[numArr[i]];
        } else if (tens[numArr[i]] != null) {
            temp += tens[numArr[i]];
        } else if (position[numArr[i]] != null) {
            if (numArr[i] !== 'hundred') {
                if (temp === 0)
                    temp = 1;
                result += temp * position[numArr[i]];
                temp = 0;
            } else {
                if (temp === 0)
                    temp = 1;

                temp *= 100;
            }
        }
    }
    result += temp;
    return result;
};

var toWordArray = function(text) {
    var str = text.toLowerCase();
    var lstr = stringTonumArr(str);
    var wordArr = [];
    var i = 0,
        j = 0;
    var last = '';
    while (i < lstr.length) {
        if (lstr[i] in nums) {
            if (last === 'nums' || last === 'n') {
                j++;
            }
            if (wordArr[j] != null) {
                wordArr[j] += (lstr[i] + ' ');
            } else {
                wordArr[j] = (lstr[i] + ' ');
            }
            last = 'nums';
        } else if (lstr[i] in tens) {
            if (last === 'nums' || last === 'tens' || last === 'n') {
                j++;
            }
            if (wordArr[j] != null) {
                wordArr[j] += (lstr[i] + ' ');
            } else {
                wordArr[j] = (lstr[i] + ' ');
            }
            last = 'tens';
        } else if (lstr[i] in position) {
            if (last === 'position' || last === 'n') {
                j++;
            }
            if (wordArr[j] != null) {
                wordArr[j] += (lstr[i] + ' ');
            } else {
                wordArr[j] = (lstr[i] + ' ');
            }
            last = 'position';
        } else {
            if (last === 'nums' || last === 'tens' || last === 'position') {
                last = 'n';
            }
        }
        i++;
    }
    return wordArr;
};

var convertS = function(words) {
    for (i = 0; i < words.length; i++) {
        for (var j in nums) {
            if (words[i].lastIndexOf(j, 0) === 0) {
                words[i] = words[i].replace(j, nums[j]);
            }
        }
        for (var j in tens) {
            if (words[i].lastIndexOf(j, 0) === 0) {
                words[i] = words[i].replace(j, tens[j]);
            }
        }
        for (var j in position) {
            if (words[i].lastIndexOf(j, 0) === 0) {
                words[i] = words[i].replace(j, position[j]);
            }
        }
    }
    return words;
};

var getTextSentence = function(text) {
    var wordArray = toWordArray(text);
    var numbers = [];
    var i = 0;
    for (i = 0; i < wordArray.length; i++) {
        numbers[i] = englishToNumeric(wordArray[i]);
    }
    for (i = 0; i < wordArray.length; i++) {
        text = text.replace(wordArray[i], numbers[i] + " ");
    }
    text = insertSpaceBeforeAfterPunctuation(text);
    text = ' ' + text + ' ';
    text = text.toLowerCase();
    var words = text.split(' ');
    var final = convertS(words).join(" ");
    console.log(final);
    final.replace("first", "1st");
    final.replace("second", "2nd");
    final.replace("third", "3rd");
    final.replace("fifth", "5th");
    final.replace("eighth", "8th");
    final.replace("ninth", "9th");

    return final;
};