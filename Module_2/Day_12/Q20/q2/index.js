function createBankAccount() {
    let balance = 0;
    let transactionHistory = [];

    return {
        deposit: function(amount) {
            balance += amount;
            transactionHistory.push({type: 'deposit', amount: amount, balance: balance});
            console.log(`Deposited ${amount}`);
        },
        withdraw: function(amount) {
            if (balance >= amount) {
                balance -= amount;
                transactionHistory.push({type: 'withdraw', amount: amount, balance: balance});
                console.log(`Withdrawn ${amount}`);
            } else {
                transactionHistory.push({type: 'withdraw', amount: amount, balance: balance, status: 'failed'});
                console.log("Insufficient balance");
            }
        },
        getBalance: function() {
            console.log("Current balance:", balance);
        },
        getTransactionHistory: function() {
            return transactionHistory;
        }
    };
}

// Example Usage:
const account = createBankAccount();
account.deposit(500);     
account.withdraw(200);     
account.withdraw(400);    
account.getBalance();      
console.log(account.getTransactionHistory()); 