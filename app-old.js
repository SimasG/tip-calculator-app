class Calculator {
    // taking in all the inputs and functions for the calculator
    constructor(totalBill, tipPercentage, numberOfPeople) {
        // this.totalBill(that's been previously declared) = totalBill(that's going to be reused for "new" functions)
        // "this" here refers to the window object
        this.totalBill = totalBill;
        this.numberOfPeople = numberOfPeople;
        // tip percentage hasn't been previously declared - could be an issue
        this.tipPercentage = tipPercentage;
        // this.clear();
    }

    // clears all previous inputs
    clear() {
        this.totalBillInput = '';
        this.numberOfPeople = '';
        this.tipPercentage = undefined;
    }

    // calculates tip per person
    computeTipPerPerson() {
        // tipButtons.forEach(button =>  console.log(button.innerText.slice(0, -1)));
        return (this.totalBill * this.tipPercentage) / this.numberOfPeople;
        return this.totalBill / this.numberOfPeople;
    }

    // calculates total bill per person
    computeBillPerPerson() {
        
    }

    // displays tip per person (& bill per person?)
    updateDisplay() {

    }
}


// Global HTML Variables
// const billPerPerson = document.querySelector('.total-amount-per-person-heading');


// using data attributes to keep html used for css (tags, classes, id) and javascript (data attributes) separate

const totalBill = document.querySelectorAll('[data-input-bill]'); //total bill
const numberOfPeople = document.querySelectorAll('[data-input-people]'); //number of people
const tipButtons = document.querySelectorAll('[data-tip]'); //6 tip buttons
const tipAmountPerPerson = document.querySelector('[data-total-tip-per-person]'); //tip amount per person
const totalAmountPerPerson = document.querySelector('[data-total-amount-per-person]'); //total amount per person


const calculator = new Calculator (totalBill, numberOfPeople, tipPercentage) // tipButtons or tipPercentage?


// function handleBillPerPerson (totalBill, numberOfPeople) {
//     billPerPerson.innerText = `$${totalBill/numberOfPeople}`;
// }

// Event Listeners
tipButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let tipPercentage = e.target.classList;
        if (tipPercentage.contains('tip-option-1')) {
            tipPercentage = 0.05;
        } else if (tipPercentage.contains('tip-option-2')) {
            tipPercentage = 0.1;
        }  else if (tipPercentage.contains('tip-option-3')) {
            tipPercentage = 0.15;
        } else if (tipPercentage.contains('tip-option-4')) {
            tipPercentage = 0.25;
        } else if (tipPercentage.contains('tip-option-5')) {
            tipPercentage = 0.5;
        } else if (tipPercentage.contains('tip-option-6')) {
            tipPercentage = 0.6;
        }
        calculator.computeTipPerPerson(100, 5, tipPercentage)
        console.log(tipPercentage);
    })
})

// const billInputForm = document.querySelector('.bill-input');

// billInputForm.addEventListener('input', (e) => {
//     const totalBill = e.target.value;
//     console.log(totalBill);
// })

// const peopleNumberInputForm = document.querySelector('.people-number-input');

// peopleNumberInputForm.addEventListener('input', (e) => {
//     const numberOfPeople = e.target.value;
//     console.log(numberOfPeople);
// })