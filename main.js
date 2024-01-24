

function getText() {
    let field = document.getElementById('workplaceInput').value;
    return field;
}

function encryptPressed() {
    let text = getText();
    text = text.replace(/e/g, "enter");
    text = text.replace(/a/g, "ai");
    text = text.replace(/i/g, "imes");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");
    document.getElementById('resultsResult').innerHTML = text
    checkImage(text)
}

function decryptPressed() {
    let text = getText();
    text = text.replace(/enter/g, "e");
    text = text.replace(/ai/g, "a");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");
    document.getElementById('resultsResult').innerHTML = text;
    checkImage(text);
}

function checkImage(text) {
    let imageMessageNotFound = document.getElementById("resultsImage");
    let defaultText = document.getElementById("defaultText");
    let resultsParagraph = document.getElementById("resultsParagraph");
    console.log(defaultText);
    if (text != '') {
        defaultText.style.visibility = "hidden";
        imageMessageNotFound.style.visibility = "hidden";
        resultsParagraph.style.visibility = "hidden";
    }
}