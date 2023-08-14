document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field')
    const newwithdrawAmountString = withdrawField.value;
    const newwithdrawAmount = parseFloat(newwithdrawAmountString)
    if(isNaN(newwithdrawAmount)){
        alert('please provide a valid number')
        return;
    }


    const previouswithdrawAmountString = document.getElementById('withdraw-total')
    const previouswithdrawAmount = previouswithdrawAmountString.innerText
    const previousAmount = parseFloat(previouswithdrawAmount)
    const previousTotalBalanceString = document.getElementById('total-balance')
    const previousTotal = previousTotalBalanceString.innerText;
    const previoustTotalBalance = parseFloat(previousTotal)
    withdrawField.value = '';

    if (newwithdrawAmount > previoustTotalBalance) {

        alert('Eto taka bank jomaw nai')
        return;
    }
    const currentTotal = newwithdrawAmount + previousAmount;
    previouswithdrawAmountString.innerText = currentTotal;



    const currentTotalBalance = previoustTotalBalance - newwithdrawAmount
    previousTotalBalanceString.innerText = currentTotalBalance;


})