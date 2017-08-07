function doText() {
    var num = Number((document.getElementById("text1").value).trim());
    var string = getInWords(num);
    document.getElementById("result1").innerHTML = string;

}

function doNumber() {
    var string = document.getElementById("text2").value.trim();
    var num = getNumber(string);
    document.getElementById("result2").innerHTML = num;
}
window.onload = function() {
    document.getElementById("doText").addEventListener("click", doText);
    document.getElementById("doNumber").addEventListener("click", doNumber);
};