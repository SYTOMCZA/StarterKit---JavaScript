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
            last name :  ${this.lastName}, 
            number of accounts : ${this.accountsList.length}, 
            total balance :  ${this._calculateBalance()}`;
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
        return this.accountsList.filter(oneAccount => oneAccount.balance > 0);
    }
    findAccount(accountNumber) {
        return this.accountsList.find(oneAccount => oneAccount.number == accountNumber);
    }
    withdraw(accountNumber, amount) {
        return new Promise((resolve, reject) => {
            let foundAccount = this.findAccount(accountNumber);
            if (foundAccount == undefined){
                reject(new Error("Account doesn't exist"));
            } else if (foundAccount.balance < amount){
                reject(new Error("You don't have enough money"));
            } else {
                foundAccount.balance -= amount;
                setTimeout(()=> {
                    resolve(`
                    Account number: ${accountNumber}, 
                    New balance: ${foundAccount.balance}, 
                    Amount of withdrawn money:${amount}`);
                }, 2000);
            }
        });
    }
};

const person1 = new Person('Sylwia', 'Tomczak-Sledzinska', [new Account(156, 15000, 'euro')]);
console.log(person1.sayHello());
person1.addAccount(145, 7500, 'euro');
console.log(person1.sayHello());

person1.withdraw(145, 8000)
    .then(
        function (message) {
            console.log('I can buy new car. ' + message);
        }).catch(
            function (err) {
                console.log('I want buy new car. ' + err);
            });
person1.withdraw(145, 150)
    .then(
        function (message) {
            console.log('I can buy new shoes. ' + message);
        }).catch(
            function (err) {
                console.log('I want buy new shoes. ' + err);
            });
person1.withdraw(155, 150000).then(
    function (message) {
        console.log('I can buy a house with garden. ' + message);
    }).catch(
        function (err) {
            console.log('I want buy a house with garden. ' + err);
        });
person1.withdraw(156, 3000).then(
    function (message) {
        console.log('I can go on a trip. ' + message);
    }).catch(
        function (err) {
            console.log('I want go on a trip. ' + err);
        });