function getInputValueById(inputID){
    const inputField = document.getElementById(inputID);
    const inputFieldString = inputField.value;
    const inputFieldNumber = parseFloat(inputFieldString);
    inputField.value = '';
    return inputFieldNumber;
}

function getDepositValue(FieldID) {
    const deposit = document.getElementById(FieldID);
    const depositFieldString = deposit.innerText;
    const depositFieldNumber = parseFloat(depositFieldString);
    return depositFieldNumber;
}

function setTextElementById (elementID, newValue) {
    const textElement = document.getElementById(elementID);
    textElement.innerText = newValue;
}