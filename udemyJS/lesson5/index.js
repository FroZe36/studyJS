function sayHello(name) {
    return `Привет, ${name}!`
}

function returnNeighboringNumbers(number) {
    let arr = [--number, ++number, ++number];
    return arr
}

function getMathResult(baseNum, numOfTimes) {
    let string = ''
    if (typeof numOfTimes !== 'number' || numOfTimes <= 0) {
        return baseNum;
    } else {
        for (let i = 0; i < numOfTimes; i++) {
            string += baseNum + (baseNum * i) + (i < numOfTimes - 1 ? '---' : '');
        }
        return string
    }
}

console.log(getMathResult(10,5));
