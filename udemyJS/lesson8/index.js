/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');

    while (
      personalMovieDB.count == '' ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
  },
  rememberMyFilm: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из просмотренных фильмов?', ''),
        b = prompt('На сколько вы его оцените?', '');
      if (a != null && b != null && a != '' && b != '' && a.length < 10) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonaLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('error');
    }
  },
  showMyDB: function () {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    (personalMovieDB.privat == false)
      ? (personalMovieDB.privat= true)
      : (personalMovieDB.privat = false);
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      if (genre == null || genre == '') {
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((e, i) => {
      console.log(`Любимый жанр #${i + 1} - это ${e}`);
    });
  },
};
personalMovieDB.start()
personalMovieDB.rememberMyFilm();
personalMovieDB.detectPersonaLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();

//TASK *
const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(data) {
  let square = 0;
  let volume = 0;

  data.shops.forEach(e => {
    square += e.width * e.length;
  });

  volume = square * data.height;

  return volume * data.moneyPer1m3 >= data.budget
    ? 'Бюджета недостаточно'
    : 'Бюджета достаточно';
}

console.log(isBudgetEnough(shoppingMallData));

//TASK **
const students = [
  'Peter',
  'Andrew',
  'Ann',
  'Mark',
  'Josh',
  'Sandra',
  'Cris',
  'Bernard',
  'Takesi',
  'Sam',
  'Somebody',
];

function sortStudentsByGroups(arr) {
  arr.sort();
  const a = [],
    b = [],
    c = [],
    rest = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < 3) {
      a.push(arr[i]);
      console.log(a);
    } else if (i < 6) {
      b.push(arr[i]);
      console.log(b);
    } else if (i < 9) {
      c.push(arr[i]);
      console.log(c);
    } else {
      rest.push(arr[i]);
    }
  }
  return [
    a,
    b,
    c,
    `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`,
  ];
}

console.log(sortStudentsByGroups(students));
