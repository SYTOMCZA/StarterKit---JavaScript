function Account (balance, currency){
    this.balance = balance;
    this.currency = currency;
    };
var person = (function(){
    var details = {
        firstName: 'Sylwia',
        lastName: 'Tomczak-Sledzinska'
    };
    var calculateBalance = function(){
        var balance_sum = 0;
        for (var i = 0; i < this.accountsList.length; i++){
            balance_sum += this.accountsList[i].balance;   
        }
        return balance_sum;
    };
    return{
        firstName: details.firstName,
        lastName: details.lastName,
        accountsList: [{
            balance: 15000,
            currency: 'euro'
        },{
            balance: 1000,
            currency: 'euro'
        }],
        sayHello: function(){
            return 'Person: ' + this.firstName + ' ' +
            this.lastName + ' / ' + 'Number of accounts: ' + 
            this.accountsList.length + ' / Total balance: ' + 
            calculateBalance.call(this) + ' euro';
        },
        addAccount: function(oneAccount) {
                this.accountsList.push(oneAccount)
            }
    };
})();
console.log(person.sayHello());
person.addAccount(new Account(2000, 'euro'));
console.log(person.sayHello());
person.addAccount(new Account(10000, 'euro'));
console.log(person.sayHello());