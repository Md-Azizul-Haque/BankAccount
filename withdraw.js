document.getElementById('withdraw-button').addEventListener('click', function(){
    
    const inputWithdraw = getInputValueById('withdraw-input');
    setTextElementById('withdraw-total', inputWithdraw);
    const WithdrawBalance = getDepositValue('balance-total');
    const totalWithdrawBalance = WithdrawBalance - inputWithdraw;
    setTextElementById('balance-total', totalWithdrawBalance);
})