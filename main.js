let defaultText = document.getElementById("defaultText");

function getText() {
    let field = document.getElementById('workplaceInput').value;
    field = field.toLowerCase()
    return field;
}

function encryptPressed() {
    let text = getText();
    text = text.replace(/e/g, "enter");
    text = text.replace(/a/g, "ai");
    text = text.replace(/i/g, "imes");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");
    showResult(text);
}

function checkSpecialCharacter(text) {
    var format = /[´`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]/;
    if (format.test(text)) {
        return true;
    } else {
        return false;
    }
}

function decryptPressed() {
    let text = getText();
    text = text.replace(/enter/g, "e");
    text = text.replace(/ai/g, "a");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");
    showResult(text);
}

function showResult(text) {
    let imageMessageNotFound = document.getElementById("resultsImage");

    let resultsParagraph = document.getElementById("resultsParagraph");
    let resultsDisplay = document.getElementById("resultsDisplay")
    document.getElementById('resultsResult').innerHTML = text

    if (checkSpecialCharacter(text)) {
        defaultText.innerHTML = "Insira um texto sem acentos"
        defaultText.style.color = "red"
    } else if (text != '') {
        defaultText.style.display = "none";
        imageMessageNotFound.style.display = "none";
        resultsParagraph.style.display = "none";
        resultsDisplay.style.display = "flex";
    } else {
        defaultText.innerHTML = "Nenhuma mensagem encontrada"
        defaultText.style.color = "black"
        defaultText.style.display = "flex";
        imageMessageNotFound.style.display = "flex";
        resultsParagraph.style.display = "flex";
        resultsDisplay.style.display = "none";
    }
}

function copyFromClipboard() {
    let copyText = document.getElementById("resultsResult").innerHTML;
    navigator.clipboard.writeText(copyText);
    alert('texto copiado');
}

