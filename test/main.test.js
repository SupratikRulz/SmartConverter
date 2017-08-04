describe("This is getNumber() test", function() {
    it("should call wordToNumber atleast once", function() {
        spyOn(window, "wordToNumber");
        getNumber("one");
        expect(window.wordToNumber).toHaveBeenCalled();
    });
    it("should return the number in decimal format from the word format", function() {
        expect(getNumber("one hundred and two")).toBe(102);
        expect(getNumber("one thousand fifty")).toBe(1050);
        //    expect(getNumber("two million and one hundred five thousand two hundred and ninety six")).toBe(2105296);
    });
});