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
}

function decryptPressed() {
    let text = getText();
    text = text.replace(/enter/g, "e");
    text = text.replace(/ai/g, "a");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");
    document.getElementById('resultsResult').innerHTML = text
}