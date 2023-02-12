//  step : 1
document.getElementById('bnt-deposit').addEventListener('click', function(){
//    step : 2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step : 3
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step : 4 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

   depositTotalElement.innerText = currentDepositTotal;

// step : 5
const balanceTotalElement  = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
//  step : 6 
const currentTotalBalance = previousBalanceTotal + newDepositAmount;
balanceTotalElement.innerText = currentTotalBalance;

//    step : 7
depositField.value = '';

})