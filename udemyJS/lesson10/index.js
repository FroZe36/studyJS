function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

console.log(pow(2, 6));

let students = {
  js: [
    {
      name: 'John',
      progress: 100,
    },
    {
      name: 'Ivan',
      progress: 60,
    },
  ],
  html: {
    basic: [
      {
        name: 'Peter',
        progress: 20,
      },
      {
        name: 'Ann',
        progress: 18,
      },
    ],
    pro: [
      {
        name: 'Sam',
        progress: 10,
      },
    ],
  },
};

function getTotalProgressByRecursion(data) {
  if (Array.isArray(data)) {
    let total = 0;

    for (let i = 0; i < data.length; i++) {
      total += data[i].progress;
    }
    return [total, data.length];
  } else {
    let total = [0, 0];
    for (let subData of Object.values(data)) {
      const subDataArr = getTotalProgressByRecursion(subData);
      total[0] += subDataArr[0];
      total[1] += subDataArr[1];
    }
    return total;
  }
}

const result = getTotalProgressByRecursion(students);
console.log(result[0] / result[1]);

function factorial(n) {
  if (!Number.isInteger(n) || typeof n != 'number') {
    return 'Это не число';
  } else if (n <= 0) {
    return (n = 1);
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));
