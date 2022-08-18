/*
1.add event handler with the withdraw button
2.get the withdraw amount from the withdraw input field
3.get previous withdraw total
4.calculate total withdraw amount
5.set total withdraw amount
6.get the previous balance total
7.calculate new balance total
8.set the new balance total
9.clear the input field
*/

// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);

    // step-3:
    const withDrawTotalElement = document.getElementById('withdraw-total');
    const previousWithDrawTotalString = withDrawTotalElement.innerText;
    const previousWithDrawTotal = parseFloat(previousWithDrawTotalString);

    // step-4:
    const currentWithDrawTotal = previousWithDrawTotal + newWithDrawAmount;
    withDrawTotalElement.innerText = currentWithDrawTotal;

    // step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6:
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    //step-7:
    withdrawField.value = '';
})