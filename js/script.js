'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
	count : numberOfFilms,
	movies : {},
	actors : {},
	genders : [],
	privat: false,
};

const lastWatchFilm = prompt('Один из последних просмотренных фильмов?', '');
const markOfFilm = prompt('На сколько оцените его?', '');

console.log(personalMovieDB);