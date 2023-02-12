// step : 1
document.getElementById('bnt-withdraw').addEventListener('click', function(){
// step : 2
    const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);
// step : 7
withdrawField.value = '';

if(isNaN(newWithdrawAmount)){
    alert('please provide a valid number');
    return;
}
// step : 3
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);



// step : 6
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);
// step : 7
if(newWithdrawAmount>previousBalanceTotal){
    alert('Bank a ato taka nai');
    return;
}
// step : 4
const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
// step : 5 
withdrawTotalElement.innerText = currentWithdrawTotal;
// step : 7
const currentTotalBalance = previousBalanceTotal - newWithdrawAmount;
// step : 8
balanceTotalElement.innerText = currentTotalBalance;
})