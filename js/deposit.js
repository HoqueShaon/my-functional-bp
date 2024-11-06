

document.getElementById('btn-deposit').addEventListener('click', function(){
    
    const depositAmount = getInputFieldValueById('deposit-field');
    
    const previousDepositAmount = getTextElementValueById('deposit-text');
    
    const newDepositAmount = depositAmount + previousDepositAmount;
    
    setTextElementValueById('deposit-text', newDepositAmount);

    const balanceTotal = getTextElementValueById('balance-text');
    const newBalanceTotal = depositAmount + balanceTotal;
    
    setTextElementValueById('balance-text',newBalanceTotal);
})