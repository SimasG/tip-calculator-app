// TODO: Must always have two decimals after the number (not more or less) -> DONE
// TODO: Fix value types (no infinity, NaN, etc.) -> DONE
// TODO: Fix negative value display -> DONE
// TODO: Fix the custom tip button -> DONE
// TODO: Build the reset button functionality -> DONE
// TODO: Fix the layout

const tipAmountPerPerson = document.querySelector('[data-total-tip-per-person]');
const totalAmountPerPerson = document.querySelector('[data-total-amount-per-person]');
const billInputForm = document.querySelector('.bill-input');
const tipPercentageInput = document.querySelector('.input-tip');
const peopleNumberInputForm = document.querySelector('.people-number-input');
const resetBtn = document.querySelector('.reset-button');

function calculateTotals (tipPercentage, people, bill) {
    let billPerPerson

    if (!Number.isFinite(billPerPerson) && people === 0 || people === '0' || people === '' || people < 0 || isNaN(people)) {
        console.log('bill per person is infinite!')
        billPerPerson = Number.parseFloat(0).toFixed(2);
    } else {
        console.log('bill per person is finite!')
        billPerPerson = Number.parseFloat(bill*(1 + tipPercentage) / people).toFixed(2);
    }


    let tipPerPerson

    if (!Number.isFinite(tipPerPerson) && tipPercentage === 0 || tipPercentage === '0' || people === 0 || people === '0' || people === '' || people < 0 || isNaN(people)) {
        console.log('heyooo falsy/zero tip')
        tipPerPerson = Number.parseFloat(0).toFixed(2);
    } else {
        console.log('heyooo not falsy/zero tip')
        tipPerPerson = Number.parseFloat((tipPercentage*bill) / people).toFixed(2);
    }

    totalAmountPerPerson.innerHTML = `$${billPerPerson}`;
    tipAmountPerPerson.innerHTML = `$${tipPerPerson}`;
}

// capturing the values into variables which will be used in the main calculation

// capturing the CUSTOM tip input value into "tipPercentage"
let tipPercentage = 0;
tipPercentageInput.addEventListener('input', () => {
    tipPercentage = (tipPercentageInput.value)/100;
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


// reset button functionality

// why does the function not work?
function reset () {
    totalAmountPerPerson.innerHTML = `$${Number.parseFloat(0).toFixed(2)}`;
    tipAmountPerPerson.innerHTML = `$${Number.parseFloat(0).toFixed(2)}`;
    totalAmountPerPerson.value = 0;
    tipAmountPerPerson.value = 0;
    peopleNumberInputForm.value = 0;
    billInputForm.value = 0;
}

resetBtn.addEventListener('click', () => {
    reset()
})