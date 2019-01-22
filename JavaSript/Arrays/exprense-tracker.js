const account = {
    name: "paul",
    expenses: [],
    income: [],
    addExpenses: function(disctiption, amount){
        this.expenses.push({
            disctiption: disctiption, 
            amount: amount
        });
    },
    addIncome: function(disctiption, amount){
        this.income.push({
            disctiption: disctiption, 
            amount: amount
        });
    },
    getAccountSummary: function(){
        let expensesSum = 0;
        let incomeSum = 0;
        let balanceSum = 0;

        this.expenses.forEach(e => {
            expensesSum = expensesSum + e.amount;
    
        });

        this.income.forEach(e =>{
            incomeSum = incomeSum + e.amount;
        })

        balanceSum =  incomeSum - expensesSum;

        return `${this.name} has a balance  $${balanceSum}, $${incomeSum} in income. $${expensesSum} in expenses`;
    }
}

account.addExpenses("rent", 950)
account.addIncome("Job", 1000)
console.log(account.expenses)
console.log(account.income)
console.log(account.getAccountSummary())


