
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInputValue = getInputValueById('deposit-input'); 
    
    const depositValue = getDepositValue('deposit-total');
    const totalDeposit = depositValue + depositInputValue;
    setTextElementById('deposit-total', totalDeposit);
    
    const innerBalance = getDepositValue('balance-total');
    const totalBalance = depositInputValue + innerBalance;
    setTextElementById('balance-total', totalBalance);
})





// document.getElementById('deposit-button').addEventListener('click', function(){
//     const depositInput = document.getElementById('deposit-input');
//     const depositInputString = depositInput.value;
//     const totalDepositInput = parseFloat(depositInputString);
//     depositInput.value = '';

//     const depositField = document.getElementById('deposit-total');
//     const depositFieldString = depositField.innerText;
//     const depositFieldNumber = parseFloat(depositFieldString);

//     const totalDeposit = totalDepositInput + depositFieldNumber;
//     depositField.innerText = totalDeposit;

//     const balance = document.getElementById('balance-total');
//     const balanceString = balance.innerText;
//     const balanceNumber = parseFloat(balanceString);
    
//     const totalBalance = totalDepositInput + balanceNumber;
//     balance.innerText = totalBalance;
// })