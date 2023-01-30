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