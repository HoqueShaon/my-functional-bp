document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawAmount = getTextElementValueById('withdraw-text');
    const withdrawTotal = newWithdrawAmount + previousWithdrawAmount;
    setTextElementValueById('withdraw-text',withdrawTotal);

    const previousBalanceTotal = getTextElementValueById('balance-text');
    const newBalanceTotal = previousBalanceTotal - withdrawTotal;
    setTextElementValueById('balance-text', newBalanceTotal); 
})