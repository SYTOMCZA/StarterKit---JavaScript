(function () {
    const person1 = new Person('Sylwia', 'Tomczak-Śledzińska', [new Account(156, 15000, 'euro')]);
    person1.addAccount(145, 7500, 'euro');

    const website = (function () {
        return {
            cardTitle: document.getElementsByClassName('card-title')[0],
            cardText: document.getElementsByClassName('card-text')[0],

            addCardTitle: function () {
                this.cardTitle.innerHTML = person1.firstName + " " +
                    person1.lastName
            },
            addCardText: function () {
                for (let i = 0; i < person1.accountsList.length; i++) {
                    this.cardText.innerHTML += '<p>' + (i + 1) +
                        '. Account number: ' +
                        person1.accountsList[i].number +
                        ', Balance: ' + person1.accountsList[i].balance + ' euro'
                    '</p>'
                }
            }
        }
    })();

    website.addCardTitle();
    website.addCardText();

    const addButton = (function () {
        var details = {
            inputNumber: document.getElementsByTagName('input')[0],
            inputAmount: document.getElementsByTagName('input')[1],
            button: document.getElementsByTagName('button')[0]
        }
        return {
            submitButton: function () {
                details.button.addEventListener('click', () => {
                    person1.withdraw(details.inputNumber.value, details.inputAmount.value)
                        .then((message) => {
                            website.addCardText();
                            alert(message);
                        }).catch((err2) => {
                            alert(err2);
                        });
                });
            },
            disableButton: function () {
                function buttonEvent(event, element) {
                        element.addEventListener(event, () => {
                            if (details.inputNumber.value && details.inputAmount.value) {
                                details.button.disabled = false;
                            } else {
                                details.button.disabled = true;
                            }
                        })
                    }
                buttonEvent("change", details.inputNumber);
                buttonEvent("change", details.inputAmount);
                buttonEvent("keyup", details.inputNumber);
                buttonEvent("keyup", details.inputAmount);
                details.button.disabled = true;
            }
        }
    })();
    document.addEventListener("DOMContentLoaded", ()=>{
    addButton.submitButton();
    addButton.disableButton();  
    })
})();
