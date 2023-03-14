'use strict'

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели","");

        while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели","");
        }
}

start()

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilm() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из просмотренных фильмов?", ""),
              b = prompt("На сколько вы его оцените?", "");
        if(a != null && b != null && a != '' && b != '' && a.length < 10) {
            personalMovieDB.movies[a] = b;
            console.log('done')
        } else {
            console.log('error')
            i--
        }
    }
}

rememberMyFilm()

function detectPersonaLevel() {
    if(personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов')
    } else if(personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
        console.log('Вы классический зритель')
    } else if(personalMovieDB.count >= 30){
        console.log('Вы киноман')
    } else {
        console.log('error')
    }
}

detectPersonaLevel()

function showMyDB() {
    if(personalMovieDB['privat'] == false) console.log(personalMovieDB);
}

showMyDB()

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres()

function calculateVolumeAndArea(num) {
    if(Number.isSafeInteger(num) && num > 0) {
        return `Объем куба:${num * num * num},площадь всей поверхности:${(num * num) * 6}`; 
    } return 'При вычислении произошла ошибка'
}

console.log(calculateVolumeAndArea(5));

function getCoupeNumber(num) {
    if(num > 36 || num === 0) {
        return "Таких мест в вагоне не существует"
    } else if(typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
        return "Ошибка. Проверьте правильность введенного номера места"
    } 
    else if(num >= 1 && num <= 4) return 1;
    else if(num >= 5 && num <= 8) return 2;
    else if(num >= 9 && num <= 12) return 3;
    else if(num >= 13 && num <= 16) return 4;
    else if(num >= 17 && num <= 20) return 5;
    else if(num >= 21 && num <= 24) return 6;
    else if(num >= 25 && num <= 28) return 7;
    else if(num >= 27 && num <= 32) return 8;
    else if(num >= 33 && num <= 36) return 9
}

console.log(getCoupeNumber(37));

function getTimeFromMinutes(num) {
    let hour = Math.floor(num/60);
    let minute = num % 60;
    if(typeof num !== 'number' || num < 0 || !Number.isInteger(num)) return "Ошибка, проверьте данные";
    else if(num < 60 || num >= 300 && num < 1260) return  `Это ${hour} часов и ${minute} минут`;
    else if(num >= 60 && num < 120 || num >= 1260 && num < 1320) return `Это ${hour} час и ${minute} минут`;
    else if(num >= 120 && num < 300 || num >= 1320 && num <=1440) return `Это ${hour} часа и ${minute} минут`;
}
console.log(getTimeFromMinutes(1260));

function findMaxNumber(a, b, c, d) {
    let result = Math.max(a,b,c,d)
    if(Math.max([a,b,c,d].length) !== 4 || isNaN(result) || typeof a != 'number' || typeof b != 'number' || typeof c != 'number' || typeof d != 'number') {
        return 0;
    } else {
        return result;
    }
}

console.log(findMaxNumber(2, 4, 6.6, 5));

function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for(let i = 0; i < num; i++) {
        if(i + 1 === num) {
            result += `${first}`;
        }
        else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    } 

    return result
}

console.log(fib(2));
