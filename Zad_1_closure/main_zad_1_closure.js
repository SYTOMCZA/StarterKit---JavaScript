var personFactory = function(){
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
    return{
        firstName: details.firstName,
        lastName: details.lastName,
        sayHello: function(){
            return 'Person: ' + this.firstName + ' ' + this.lastName + 
            ' / ' + 'Number of accounts: ' + details.accountsList.length;
        }
    };
};
person = personFactory();
console.log(person.sayHello());