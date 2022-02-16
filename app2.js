// Global HTML Variables
// const billPerPerson = document.querySelector('.total-amount-per-person-heading');


// using data attributes to keep html used for css (tags, classes, id) and javascript (data attributes) separate

const totalBill = document.querySelectorAll('[data-input-bill]'); //total bill
const numberOfPeople = document.querySelectorAll('[data-input-people]'); //number of people
const tipButtons = document.querySelectorAll('[data-tip]'); //6 tip buttons
const tipAmountPerPerson = document.querySelector('[data-total-tip-per-person]'); //tip amount per person
const totalAmountPerPerson = document.querySelector('[data-total-amount-per-person]'); //total amount per person
const billInputForm = document.querySelector('.bill-input');
const tipPercentageInput = document.querySelector('.input-tip');
const peopleNumberInputForm = document.querySelector('.people-number-input');


// const calculator = new Calculator (totalBill, numberOfPeople) // tipButtons or tipPercentage?


// function handleBillPerPerson (totalBill, numberOfPeople) {
//     billPerPerson.innerText = `$${totalBill/numberOfPeople}`;
// }

// Event Listeners

function calculateTotals (tipPercentage, people, bill) {
    const billPerPerson = bill*(1 + tipPercentage) / people;
    const tipPerPerson = tipPercentage*bill / people;
    tipAmountPerPerson.innerHTML = tipPerPerson;
    totalAmountPerPerson.innerHTML = billPerPerson;
}

let tipPercentage = 0.05;

tipPercentageInput.addEventListener('input', () => {
    tipPercentage = tipPercentageInput.value;
    calculateTotals(tipPercentage, people, total);
});

const calculateTip = (percentage) => {
    tipPercentage = percentage;
    calculateTotals(tipPercentage, people, total);
}

let total = 0;

billInputForm.addEventListener('input', () => {
    total = billInputForm.value;
    calculateTotals(tipPercentage, people, total);
})

let people = 0;

peopleNumberInputForm.addEventListener('input', () => {
    people = peopleNumberInputForm.value;
    calculateTotals(tipPercentage, people, total);
})