var person = (function(){
    var details = {
        firstName: 'Sylwia',
        lastName: 'Tomczak-Sledzinska',
        accountsList: [{
            balance: 15000,
            currency: 'euro'
        },{
            balance: 1000,
            currency: 'euro'
        }]
    };
    var calculateBalance = function(){
        var balance_sum = 0;
        for (var i = 0; i < details.accountsList.length; i++){
            balance_sum += details.accountsList[i].balance;   
        }
        return balance_sum;
    };
    return{
        firstName: details.firstName,
        lastName: details.lastName,
        
        sayHello: function(){
            return ('Person: ' + this.firstName + ' ' + this.lastName + 
            ' / ' + 'Number of accounts: ' + details.accountsList.length + 
            ' / Total balance: ' + calculateBalance() + ' euro');
        },
        addAccount: function (balance, currency){
            details.accountsList.push({balance, currency})
        }
    };
})();
console.log(person.sayHello());
person.addAccount(2000, 'euro');
console.log(person.sayHello());
person.addAccount(100000, 'euro');
console.log(person.sayHello());