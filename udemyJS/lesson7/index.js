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
