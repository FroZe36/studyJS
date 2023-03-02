"use strict"

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function askQuestion(question) {
    question = prompt("Один из просмотренных фильмов?", "")
    return question
}
function ask(ask) {
    ask = prompt("На сколько вы его оцените?", "")
    return +ask
}

let a,b,c,d;
a = askQuestion(a);
b = ask(b);
c = askQuestion(c);
d = ask(d)

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
