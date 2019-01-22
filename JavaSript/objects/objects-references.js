let myAccount ={
    name: "paul",
    expenses: 0, 
    income: 0
}

let addExpense = function(account, amount){
    return account.expenses = account.expenses + amount;
  
}
//addIncome 
addIncome = (account, income) =>{
    return account.income = account.income + income
}
//resetAcount 
resetAccount = (account) =>{
    account.expenses = 0,
    account.income = 0
  

}
// getAcciuntSummary
getAccountSummary = (account) =>{
    let geld = account.income - account.expenses; 
    return `Account for ${account.name} has $${geld}. $${account.income} in income. $${account.expenses} in expense ` 
}
//Acount for Androw has $900. $1000 in income. $100 in expense


//addIncome
addIncome(myAccount, 1000)
//addExpense 
addExpense(myAccount, 100)
addExpense(myAccount, 2.5)
//addExpense
//getAcountSummary
console.log(getAccountSummary(myAccount))
//resetAccount 
resetAccount(myAccount);
console.log(getAccountSummary(myAccount))
//getAcountSummary