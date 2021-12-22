"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const film1 = prompt('Один из последних просмотренных фильмов?', ""),
    gradeFilm1 = prompt('На сколько оцените его?', ""),
    film2 = prompt('Один из последних просмотренных фильмов?', ""),
    gradeFilm2 = prompt('СНа сколько оцените его?', "");

personalMovieDB.movies[film1] = gradeFilm1;
personalMovieDB.movies[film2] = gradeFilm2;

console.log(personalMovieDB);