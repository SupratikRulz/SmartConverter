describe("This is getNumber() test", function() {
    it("should call wordToNumber atleast once", function() {
        spyOn(window, "wordToNumber");
        getNumber("one");
        expect(window.wordToNumber).toHaveBeenCalled();
    });

    it("should return the number in decimal format from the word format", function() {
        expect(getNumber("one hundred and two")).toBe(102);
        expect(getNumber("one thousand fifty")).toBe(1050);
        expect(getNumber("two million and one hundred five thousand two hundred and ninety six")).toBe(2105296);
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


describe("This is getInWords() test", function() {
    it("should give word upto 99", function() {
        expect(getInWords(9)).toBe("nine");
        expect(getInWords(10)).toBe("ten");
        expect(getInWords(19)).toBe("nineteen");
        expect(getInWords(55)).toBe("fifty five");
        expect(getInWords(90)).toBe("ninety");
        expect(getInWords(990)).toBe("nine hundred and ninety");
        expect(getInWords(999)).toBe("nine hundred and ninety nine");
        expect(getInWords(9999)).toBe("nine thousand nine hundred and ninety nine");
        expect(getInWords(99999)).toBe("ninety nine thousand nine hundred and ninety nine");
        expect(getInWords(999999)).toBe("nine hundred ninety nine thousand nine hundred and ninety nine");
        expect(getInWords(9999999)).toBe("nine million nine hundred ninety nine thousand nine hundred and ninety nine");
        expect(getInWords(99999999)).toBe("ninety nine million nine hundred ninety nine thousand nine hundred and ninety nine");
        expect(getInWords(999999999)).toBe("nine hundred ninety nine million nine hundred ninety nine thousand nine hundred and ninety nine");
        expect(getInWords(9999999999)).toBe("nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred and ninety nine");
        expect(getInWords(99999999999)).toBe("cannot be computed");
        expect(getInWords(7125)).toBe("seven thousand one hundred and twenty five");
    });

});