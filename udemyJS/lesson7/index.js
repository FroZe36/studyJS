'use strict';

const personalPlanPeter = {
  name: 'Peter',
  age: '29',
  skills: {
    languages: ['ru', 'eng'],
    programmingLangs: {
      js: '20%',
      php: '10%',
    },
    exp: '1 month',
  },
  showAgeAndLangs: function (plan) {
    let { languages } = plan.skills;
    let { age } = plan;
    return `Мне ${age} и я владею языками: ${languages
      .join(' ')
      .toUpperCase()}`;
  },
};

function showExperience(plan) {
  let exp;
  if (typeof plan == 'object') {
    let key;
    let i;
    for (key in plan) {
      if (key == 'skills') {
        for (i in plan[key]) {
          if (i == 'exp') {
            exp = plan[key]['exp'];
          }
        }
      }
    }
  }
  return exp;
}
console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
  let { programmingLangs } = plan.skills;
  let result = '';
  if (Object.keys(programmingLangs).length != 0) {
    for (let key in programmingLangs) {
      result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
  } else return '';
  return result;
}
console.log(showProgrammingLangs(personalPlanPeter));

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  return arr.length != 0 ? `Семья состоит из: ${arr.join(' ')}` : 'Семья пуста';
}
console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  let result = '';
  for (let key of arr) {
    result += `${key.toLowerCase()}\n`;
  }
  return result;
}
console.log(standardizeStrings(favoriteCities));

const someString = 'This is some strange string';

function reverse(str) {
  return typeof str === 'string'
    ? str.split('').reverse().join('')
    : console.log('Ошибка!');
}

reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
  let result = '';
  if (arr.length !== 0) {
    arr.forEach(element => {
      if (element != missingCurr) {
        result += `${element}\n`;
      }
    });
  } else return 'Нет доступных валют';
  return 'Доступные валюты:\n' + result;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB'));
