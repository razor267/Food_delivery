/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    let adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        delFilm = null,
        btn = document.querySelector('button'),
        input = document.querySelector('.adding__input'),
        checkbox = document.querySelector('input[type=checkbox]');

    adv.forEach(item => {
        item.remove();
    });

    genre.textContent = "ДРАМА";

    poster.style.backgroundImage = 'url("img/bg.jpg")';

    const sortAndShowFilmsList = () => {
        movieList.innerHTML = "";
        movieDB.movies.sort();
        movieDB.movies.forEach((film, i) => {
            if (film.length > 21) {
                film = `${film.substr(0, 21)}...`;
            }
            movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}: ${film}
        <div class="delete"></div>
    </li>
    `;
        });
        delFilm = document.querySelectorAll('.delete');
        delFilm.forEach(item => {
            item.addEventListener('click', () => {
                deleteFilmInArray(item)
            })
        });
    }

    sortAndShowFilmsList();

    btn.onclick = (e) => {
        e.preventDefault();
        if (input.value) {
            movieDB.movies.push(input.value)
            sortAndShowFilmsList();
            if (checkbox.checked) {
                console.log("Добавляем любимый фильм");
            }
            input.value = '';
            checkbox.checked = false;
        }
    }

    const deleteFilmInArray = (item) => {
        for (let i = 0; i < movieDB.movies.length; i++) {
            if (movieDB.movies[i].toUpperCase().substr(0, 21) === item.parentElement.innerText.substr(3, 21)) {
                movieDB.movies.splice(i, 1);
                sortAndShowFilmsList();
            }
        }
    }

    delFilm.forEach(item => {
        item.addEventListener('click', () => {
            deleteFilmInArray(item)
        })
    });
})