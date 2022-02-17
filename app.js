// TODO: must always have two decimals after the number (not more or less) -> DONE
// TODO: fix value types (no infinity, NaN, etc.) -> TODO
// TODO: fix negative value display
// TODO: Fix the custom tix button
// TODO: Build the reset button functionality

const tipAmountPerPerson = document.querySelector('[data-total-tip-per-person]');
const totalAmountPerPerson = document.querySelector('[data-total-amount-per-person]');
const billInputForm = document.querySelector('.bill-input');
const tipPercentageInput = document.querySelector('.input-tip');
const peopleNumberInputForm = document.querySelector('.people-number-input');

function calculateTotals (tipPercentage, people, bill) {
    let billPerPerson = Number.parseFloat(bill*(1 + tipPercentage) / people).toFixed(2);
    if (billPerPerson === Infinity || billPerPerson === NaN) {
        console.log('heyooo infinite bill');
        billPerPerson = 0;
        // totalAmountPerPerson.innerHTML = `$0.00`;
    }

    if (!Number.isFinite(billPerPerson) && people === 0 || people === '0' || people === '') {
        console.log('bill per person is infinite!')
        billPerPerson = Number.parseFloat(0).toFixed(2);
    } else {
        console.log('bill per person is finite!')
        billPerPerson = Number.parseFloat(bill*(1 + tipPercentage) / people).toFixed(2);
    }

    let tipPerPerson = Number.parseFloat((tipPercentage*bill) / people).toFixed(2);
    if (!Number.isFinite(tipPerPerson) && tipPercentage === 0 || tipPercentage === '0') {
        console.log('heyooo infinite tip')
        tipPerPerson = 0;
    }

    totalAmountPerPerson.innerHTML = `$${billPerPerson}`;
    tipAmountPerPerson.innerHTML = `$${tipPerPerson}`;
}

// capturing the values into variables which will be used in the main calculation

// capturing the CUSTOM tip input value into "tipPercentage"
let tipPercentage = 0;
tipPercentageInput.addEventListener('input', () => {
    tipPercentage = tipPercentageInput.value;
    calculateTotals(tipPercentage, people, total);
});

// capturing the tip button value into "tipPercentage"
const calculateTip = function (percentage) {
    tipPercentage = percentage;
    calculateTotals(tipPercentage, people, total);
}

// const calculateTip = (percentage) => {
//     tipPercentage = percentage;
//     calculateTotals(tipPercentage, people, total);
// }

// capturing the initial bill input value into "total"
let total = 0;
billInputForm.addEventListener('input', () => {
    total = billInputForm.value;
    calculateTotals(tipPercentage, people, total);
})

// capturing the number of people input value into "people"
let people = 0;
peopleNumberInputForm.addEventListener('input', () => {
    people = peopleNumberInputForm.value;
    calculateTotals(tipPercentage, people, total);
})