'use strict'

const SPENDING_THRESHOLD = 218;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

let bank_balance = 303.91;
let amount = 0;

function calculateTax(amount) {
    return amount * TAX_RATE
}

function formatAmount(amount) {
    return '$' + amount.toFixed(2)
}


while (amount < SPENDING_THRESHOLD) {
    amount += PHONE_PRICE;

    console.log(amount)

    if (amount < SPENDING_THRESHOLD) {
        amount = amount + ACCESSORY_PRICE;

        console.log(amount)
    }
}

amount += calculateTax(amount);

console.log("Ваша Покупка: " + formatAmount( amount ));

if (amount > bank_balance) {
    console.log("Не получится купить")
} else {
    console.log("Покупка Совершена")
}















