import './css/styles.css';
import Notiflix from 'notiflix';
// import axios from 'axios';
// import debounce from 'lodash.debounce';

//? Библиотека SimpleLightbox
import SimpleLightbox from "simplelightbox";
//? Библиотека SimpleLightbox - дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

import getRefs from './js/get-refs.js'; //! Импорт всех ссылок с ./js/get-refs.js

// import API from './js/api-service.js';

const refs = getRefs(); //! Создаем объект всех ссылок refs.*


//-----------------------------------------------------------------------
//! old
// const API_KEY = '4330ebfabc654a6992c2aa792f3173a3'; //! old
// const BASE_URL = 'https://newsapi.org/v2'; //! old

//! old
// const options = {
//     headers: {
//         Authorization: API_KEY,
//     },
// };

// const url = `${BASE_URL}everything?q=${q}&language=en&pageSize=5&page=${page}`; //! old
//-----------------------------------------------------------------------


//! Переменные для URL-запроса:
const API_KEY = '28759369-3882e1068ac26fe18d14affeb';
const BASE_URL = 'https://pixabay.com/api/';


// const q = "dog"; //!  то, что приходит в input
//! Пагинация:
const page = 1;
const per_page = 5;


// https://pixabay.com/api/?key=28759369-3882e1068ac26fe18d14affeb&q=yellow+flowers&image_type=photo //! Example URL
// fetch('https://pixabay.com/api/?key=28759369-3882e1068ac26fe18d14affeb&q=yellow+flowers&image_type=photo'); //! Example fetch-URL


//! Формируем строку URL-запроса:
// const url = `${BASE_URL}?key=${API_KEY}&q=${q}&image_type=photo&page=${page}&per_page=${per_page}`; //! with API_KEY
// const url = `${BASE_URL}?q=${q}&image_type=photo&page=${page}&per_page=${per_page}`; //! fetch(url, options) - так не роботает!
// console.log(url);


//!  Создаем слушателя событий на поле ввода данных - input form:
refs.searchForm.addEventListener('submit', onFormSearch);


//!  Ф-ция, к-рая прослушивает события на поле ввода данных - input form:
function onFormSearch(evt) {
    evt.preventDefault();
    console.log("Вешаю слушателя на поле ввода данных - input form"); //!

    const q = evt.currentTarget.elements.searchQuery.value; //!  то, что приходит в input
    console.log("Search: ", q); //!

    const url = `${BASE_URL}?key=${API_KEY}&q=${q}&image_type=photo&page=${page}&per_page=${per_page}`; //! with API_KEY

    //! Делаем fetch-запрос:
    fetch(url)
        .then(response => response.json())
        .then(console.log)



    // newsApiService.query = evt.currentTarget.elements.query.value;

    // if (newsApiService.query === '') {
    //     return alert('Введи что-то нормальное');
    // }

    // loadMoreBtn.show();
    // newsApiService.resetPage();
    // clearArticlesContainer();
    // fetchArticles();
}









