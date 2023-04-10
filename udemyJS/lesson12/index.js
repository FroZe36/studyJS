'use strict';

//TASK 1

const february20 = new Date(2012, 1, 20, 7, 12);
console.log(february20.getDay());

//TASK 2

let date = new Date(2012, 0, 7);

function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}
console.log(getWeekDay(date));

//TASK 3

function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) {
    day = 7;
  }

  return day;
}

//TASK 4

function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date1 = new Date(2015, 0, 2);

console.log(getDateAgo(date1, 365));

//TASK 5

function getLastDayOfMouth(year, month) {
  let date = new Date(year, month + 1, 0);
  return console.log(date.getDate());
}

getLastDayOfMouth(2012, 1);

//TASK 6

function getSecondsToday() {
  let date = new Date();
  let result = 0;
  [date.getHours() * 3600, date.getMinutes() * 60, date.getSeconds()].forEach(
    item => {
      result += item;
    },
  );
  return result;
}
console.log(getSecondsToday());

//TASK 7

function getSecondsToTomorrow() {
  let secondsAtDay = 24 * 3600;
  let date = new Date();
  return (
    secondsAtDay -
    (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds())
  );
}
console.log(getSecondsToTomorrow());

//TASK 8

function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  // форматирование
  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month;
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  if (diffSec < 1) {
    return 'прямо сейчас';
  } else if (diffMin < 1) {
    return `${diffSec} сек. назад`;
  } else if (diffHour < 1) {
    return `${diffMin} мин. назад`;
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
}

console.log(formatDate(new Date(new Date() - 86400 * 1000)));
