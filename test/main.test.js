beforeAll(function() {
    var temp = '<body>  <div id="three"> <input id="text3" type="text"/> <button id="doNumberSentence">DO Number from Senetnce</button> <div id="result3"> Your result will appear here! </div></div><div id="four"> <input id="text4" type="text"/> <button id="doTextSentence">DO Text from Senetnce</button> <div id="result4"> Your result will appear here! </div></div></body>';
    document.body.insertAdjacentHTML('afterbegin', temp);
});

describe("This is getNumber() test", function() {
    it("should call wordToNumber atleast once", function() {
        spyOn(window, "wordToNumber");
        getNumber("one");
        expect(window.wordToNumber).toHaveBeenCalled();
    });

    it("should return the number in decimal format from the word format", function() {
        expect(getNumber("one hundred two")).toBe(102);
        expect(getNumber("one thousand fifty")).toBe(1050);
        expect(getNumber("two million one hundred five thousand two hundred ninety six")).toBe(2105296);
        expect(getNumber("seven thousand one hundred twenty five")).toBe(7125);
    });
});

describe("This is wordToNumber() test", function() {
    it("should change the value of trackerG when word is cointatined in low[]", function() {
        trackerG = 0;
        expect(trackerG).toBe(0);
        wordToNumber("one");
        expect(trackerG).not.toBe(0);
    });

    it("should change the value of trackerN when word is cointatined in low[]", function() {
        trackerN = 0;
        expect(trackerN).toBe(0);
        wordToNumber("million");
        expect(trackerN).not.toBe(0);
    });
});


describe("This is numberToEnglish() test", function() {
    it("should give word upto 99", function() {
        expect(numberToEnglish(9)).toBe("nine");
        expect(numberToEnglish(10)).toBe("ten");
        expect(numberToEnglish(19)).toBe("nineteen");
        expect(numberToEnglish(55)).toBe("fifty five");
        expect(numberToEnglish(90)).toBe("ninety");
        expect(numberToEnglish(990)).toBe("nine hundred ninety");
        expect(numberToEnglish(999)).toBe("nine hundred ninety nine");
        expect(numberToEnglish(9999)).toBe("nine thousand nine hundred ninety nine");
        expect(numberToEnglish(99999)).toBe("ninety nine thousand nine hundred ninety nine");
        expect(numberToEnglish(999999)).toBe("nine hundred ninety nine thousand nine hundred ninety nine");
        expect(numberToEnglish(9999999)).toBe("nine million nine hundred ninety nine thousand nine hundred ninety nine");
        expect(numberToEnglish(99999999)).toBe("ninety nine million nine hundred ninety nine thousand nine hundred ninety nine");
        expect(numberToEnglish(999999999)).toBe("nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine");
        expect(numberToEnglish(9999999999)).toBe("nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine");
        expect(numberToEnglish(99999999999)).toBe("ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine");
        expect(numberToEnglish(999999999999)).toBe("nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine");
        expect(numberToEnglish(7125)).toBe("seven thousand one hundred twenty five");
        expect(numberToEnglish(140000)).toBe("one hundred forty thousand");
        expect(numberToEnglish(40000)).toBe("forty thousand");
        expect(numberToEnglish(40000000)).toBe("forty million");
        expect(numberToEnglish(40000000000)).toBe("forty billion");
        expect(numberToEnglish(400000000000)).toBe("four hundred billion");
    });

});

// describe("This is doText() test", function() {
//     it("should read the value", function() {
//         document.getElementById("text1").value = 1;
//         doText();
//         expect(document.getElementById("result1").innerHTML).toBe("one");
//     });
// });

// describe("This is doNumber() test", function() {
//     it("should read the value", function() {
//         document.getElementById("text2").value = "one";
//         doNumber();
//         expect(document.getElementById("result2").innerHTML).toBe("1");
//     });
// });

describe("This is doNumberSentence() test", function() {
    it("should read the value", function() {
        document.getElementById("text3").value = "this is 1 orange 3 apples";
        doNumberSentence();
        expect(document.getElementById("result3").innerHTML).toBe("this is one orange three apples");
    });
});