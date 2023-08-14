document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field')
    const newdepositAmountString = depositField.value;
    const newDepositAmount= parseFloat(newdepositAmountString)

    if(isNaN(newDepositAmount)){
        alert('please provide a valid number')
        return;
    }
    const previousDepositAmountString = document.getElementById('deposit-total')
    const previousDepositAmount=previousDepositAmountString.innerText
    const previousAmount=parseFloat(previousDepositAmount)
    const currentTotal=newDepositAmount+previousAmount;
    previousDepositAmountString.innerText=currentTotal;
    depositField.value='';
    const previousTotalBalanceString=document.getElementById('total-balance')
    const previousTotal = previousTotalBalanceString.innerText;
    const currentTotalBalance= parseFloat(previousTotal)+newDepositAmount
    previousTotalBalanceString.innerText=currentTotalBalance;
})