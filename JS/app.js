function getPin() {
    const pin = gerneratePin();
    const pinString = pin + '';
    if (pinString.length === 4) {

        return pin;

    }
    else {

        return getPin();
    }
}

function gerneratePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();

    const pinDisplay = document.getElementById('pin-display');
    pinDisplay.value = pin;
})

document.getElementById('calculator').addEventListener('click', function () {
    const numberString = event.target.innerText;
    const typedNumbers = document.getElementById('typed-number-field');
    const priviousTypedNumbers = typedNumbers.value;
    if (isNaN(numberString)) {
        if (numberString === 'C') {
            typedNumbers.value = '';

        }
        else if (numberString === '<') {
            const digits = priviousTypedNumbers.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumbers.value = remainingDigits;
        }
    }
    else {

        const newTypedNumbers = priviousTypedNumbers + numberString;
        typedNumbers.value = newTypedNumbers;
    }
})
document.getElementById('submit-btn').addEventListener('click', function () {
    const displayPinFieldString = document.getElementById('pin-display');
    const displayPinNumber = parseInt(displayPinFieldString.value);

    const typedNumberFildString = document.getElementById('typed-number-field')
    const typedNumberFild = parseInt(typedNumberFildString.value);
    const pinSuccsessMassege = document.getElementById('pin-success');
    const pinFailledMassege = document.getElementById('pin-failed');
    if (displayPinNumber === typedNumberFild) {
        pinSuccsessMassege.style.display = 'block';
        pinFailledMassege.style.display = 'none';

    }
    else {
        pinFailledMassege.style.display = 'block';
        pinSuccsessMassege.style.display = 'none';
    }
});