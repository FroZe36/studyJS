'use strict'

//TASK 1

let resultString = '';
const length = 7;
for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) {
        resultString += '*';
    }

    resultString += '\n';
}

console.log(resultString)

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

// TASK 2*

const arr = [3, 5, 8, 16, 20, 23, 50];
const resultArr = [];

for (let i = 0; i < arr.length; i++) {
    resultArr[i] = arr[i];
}
console.log(resultArr);

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    switch (typeof data[i]) {
        case 'number': 
            data[i] *= 2;
            break
        case 'string':
            data[i] += ' - done';
            break
    }
}
console.log(data);

data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 0; i < data.length; i++) {
    result[i] = data[4 - i];
}
console.log(result);
