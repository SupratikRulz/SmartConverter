var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
var b = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];


var getInWords = function(number) {
    var word = "";
    if (number.toString().length > 12) {
        return "cannot be computed";
    }
    if (number % 100 < 21) {
        word = word + a[number % 100];
        //  console.log(word);
    } else if (number % 10 != 0) {
        word = word + b[Math.floor(number / 10) % 10] + a[number % 10];
        //console.log("2nd" + word);
    } else {
        word = word + b[Math.floor(number / 10) % 10];
        //console.log("3rd" + word);
    }
    /**Upto 99 done */
    if (Math.floor(number / 100) > 0 && (Math.floor(number / 100) % 10) != 0) {
        word = a[Math.floor(number / 100) % 10] + "hundred and " + word;
        //console.log("4th" + word);
        //console.log(number);
    }

    number = Math.floor(number / 1000);
    //console.log("Number after floor " + number);
    if (number % 100 < 21 && number != 0 && number % 100 != 0) {
        word = a[number % 100] + "thousand " + word;
        //console.log(word);
    } else if (number % 10 != 0 && number % 100 != 0) {
        word = b[Math.floor(number / 10) % 10] + a[number % 10] + "thousand " + word;
        //console.log("2nd" + word);
    } else if (number != 0 && number % 10 == 0 && number % 100 != 0) {
        word = b[Math.floor(number / 10) % 10] + "thousand " + word;
        //console.log("3rd" + word);
    }
    /**Upto 9999 done */

    if (number != 0 && Math.floor(number / 100) > 0 && Math.floor(number / 100) % 10 != 0) {
        word = a[Math.floor(number / 100) % 10] + "hundred " + word;
        //console.log("4th" + word);
    }

    /**Upto 999,999 done */

    number = Math.floor(number / 1000);

    if (number % 100 < 21 && number != 0 && number % 100 != 0) {
        word = a[number % 100] + "million " + word;
        //console.log(word);
    } else if (number % 10 != 0 && number % 100 != 0) {
        word = b[Math.floor(number / 10) % 10] + a[number % 10] + "million " + word;
        //console.log("2nd" + word);
    } else if (number != 0 && number % 100 != 0) {
        word = b[Math.floor(number / 10) % 10] + "million " + word;
        //console.log("3rd" + word);
    }
    /**Upto 99,999,999 done */

    if (number != 0 && Math.floor(number / 100) > 0 && Math.floor(number / 100) % 10 != 0) {
        word = a[Math.floor(number / 100) % 10] + "hundred " + word;
        //console.log("4th" + word);
    }
    /**Upto 999,999,999 done */

    number = Math.floor(number / 1000);

    if (number % 100 < 21 && number != 0) {
        word = a[number % 100] + "billion " + word;
        //console.log(word);
    } else if (number % 10 != 0) {
        word = b[Math.floor(number / 10) % 10] + a[number % 10] + "billion " + word;
        //console.log("2nd" + word);
    } else if (number != 0) {
        word = b[Math.floor(number / 10) % 10] + "billion " + word;
        //console.log("3rd" + word);
    }
    /**Upto 99,999,999 done */

    if (number != 0 && Math.floor(number / 100) > 0 && Math.floor(number / 100) % 10 != 0) {
        word = a[Math.floor(number / 100) % 10] + "hundred " + word;
        //console.log("4th" + word);
    }
    return word.trim();
};