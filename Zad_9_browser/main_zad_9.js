class Account {
    constructor(number, balance, currency) {
        this.number = number;
        this.balance = balance;
        this.currency = currency;
    }
};

class Person {
    constructor(firstName, lastName, accountsList) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.accountsList = accountsList;
    }
    sayHello() {
        return ` First name : ${this.firstName}, 
            Last name :  ${this.lastName}, 
            Number of accounts : ${this.accountsList.length}, 
            Total balance :  ${this._calculateBalance()}`;
    }
    _calculateBalance() {
        var sum = 0;
        for (let oneAccount of this.accountsList) {
            sum += oneAccount.balance;
        }
        return sum;
    }
    addAccount(number, balance, currency) {
        this.accountsList.push(new Account(number, balance, currency));
    }
    filterPositiveAccounts() {
        return this.accountsList.filter(oneAccount => {
            oneAccount.balance > 0;
        });
    }
    findAccount(accountNumber) {
        return this.accountsList.find(oneAccount => oneAccount.number == accountNumber);
    }
    withdraw(accountNumber, amount) {
        return new Promise((resolve, reject) => {
            let foundAccount = this.findAccount(accountNumber);
            if (foundAccount == undefined) {
                reject(new Error("Account doesn't exist"));
            } else if (foundAccount.balance < amount) {
                reject(new Error("You don't have enough money"));
            } else if (amount <= 0) {
                reject(new Error("Incorrect amount format"));
            } else {
                setTimeout(() => {
                    foundAccount.balance -= amount;
                    resolve(`
                        Account number: ${accountNumber}, 
                        New balance: ${foundAccount.balance}, 
                        Amount of withdrawn money: ${amount}`);
                }, 2000);
            }
        });
    }
};

