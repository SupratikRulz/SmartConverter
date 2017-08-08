// var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
// var b = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];

var numberToEnglish = function(n /*, custom_join_character*/ ) {
    var string = n.toString(),
        units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;
    //  var and = custom_join_character || 'and';
    var sign = string.charAt(0) == "-" ? "-" : "";
    /* Is number zero? */
    if (parseInt(string) === 0) {
        return sign + 'zero';
    }
    /* Array of units as words */
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    /* Array of tens as words */
    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    /* Array of scales as words */
    scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];
    /* Split user arguemnt into 3 digit chunks from right to left */
    start = string.length;
    chunks = [];
    while (start > 0) {
        end = start;
        chunks.push(string.slice((start = Math.max(0, start - 3)), end));
    }
    /* Check if function has enough scale words to be able to stringify the user argument */
    chunksLen = chunks.length;
    if (chunksLen > scales.length) {
        return '';
    }
    /* Stringify each integer in each chunk */
    words = [];
    for (i = 0; i < chunksLen; i++) {
        chunk = parseInt(chunks[i]);
        if (chunk) {
            /* Split chunk into array of individual integers */
            ints = chunks[i].split('').reverse().map(parseFloat);
            /* If tens integer is 1, i.e. 10, then add 10 to units integer */
            if (ints[1] === 1) {
                ints[0] += 10;
            }
            /* Add scale word if chunk is not zero and array item exists */
            if ((word = scales[i])) {
                words.push(word);
            }
            /* Add unit word if array item exists */
            if ((word = units[ints[0]])) {
                words.push(word);
            }
            /* Add tens word if array item exists */
            if ((word = tens[ints[1]])) {
                words.push(word);
            }
            /* Add 'and' string after units or tens integer if: */
            // if (ints[0] || ints[1]) {
            //     /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
            //     if (ints[2] || !i && chunksLen) {
            //         words.push(and);
            //     }
            // }
            /* Add hundreds word if array item exists */
            if ((word = units[ints[2]])) {
                words.push(word + ' hundred');
            }
        }
    }
    return sign + words.reverse().join(' ');
};


var getNumberSentence = function(sentence) {
    sentence = sentence.trim();
    var word = "";
    var sentenceArray = sentence.split(/-?\d+/g);
    var digitArray = sentence.match(/-?\d+/g);
    if (digitArray != null) {
        console.log(sentenceArray);
        console.log(digitArray);
        var i = 0;
        var first = sentence.split(" ");
        var len1 = sentenceArray.length;
        var len2 = digitArray.length;
        var len = len1 > len2 ? len1 : len2;
        var x = 0;
        console.log(sentenceArray[x]);
        while (x < len) {
            word = word + (sentenceArray[x] ? sentenceArray[x] : "");
            digitArray[x] ? word = word + numberToEnglish(digitArray[x]) : word = word + "";
            x++;
        }

        word = word.replace("threerd", "third");
        word = word.replace("onest", "first");
        word = word.replace("twond", "second");
        word = word.replace("fiveth", "fifth");
        word = word.replace("eightth", "eighth");
        word = word.replace("nineth", "ninth");
    } else {
        return sentence;
    }
    return word.trim();
};