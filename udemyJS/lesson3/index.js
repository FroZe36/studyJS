'use strict'

let result = '';
const length = 7;
for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) {
        result += '*';
    }

    result += '\n';
}

console.log(result)

for (let i = 5; i <= 10; i++) {
    console.log(i)
};

for (let i = 20; i >= 10; i--) {
    if (i === 13) break;
    console.log(i)
}
for (let i = 2; i <= 10; i++) {
    if(i % 2) continue;
    console.log(i)
}

let i = 2;

while (i < 16) {
    i++;
    if(i % 2 === 0) continue;
    console.log(i)
}

const arrayOfNumbers = [];

for (i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}
console.log(arrayOfNumbers)
