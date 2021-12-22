/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const film = prompt('Один из последних просмотренных фильмов?', ""),
            gradefilm = prompt('На сколько оцените его?', "");
        if (film === '' || film.length > 50 || gradefilm === '' || film == null || gradefilm == null) {
            i--;
            continue;
        }
        personalMovieDB.movies[film] = gradefilm;
    }
}

rememberMyFilms();

/*let i=0;
do {
    const film = prompt('Один из последних просмотренных фильмов?', ""),
        gradefilm = prompt('На сколько оцените его?', "");
    if (film === '' || film.length > 50 || gradefilm === '') {
        continue;
    }
    personalMovieDB.movies[film] = gradefilm;
    i++
} while (i<2);

while (i<2) {
    const film = prompt('Один из последних просмотренных фильмов?', ""),
        gradefilm = prompt('На сколько оцените его?', "");
    if (film === '' || film.length > 50 || gradefilm === '') {
        continue;
    }
    personalMovieDB.movies[film] = gradefilm;
    i++
}*/

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (numberOfFilms <= 30) {
        console.log('Вы классический зритель');
    } else if (numberOfFilms > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
}

writeYourGenres();
showMyDB();