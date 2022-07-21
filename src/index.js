import './css/styles.css';
import Notiflix from 'notiflix';
// import axios from 'axios';
// import debounce from 'lodash.debounce';

//? Библиотека SimpleLightbox
import SimpleLightbox from "simplelightbox";
//? Библиотека SimpleLightbox - дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

import PixabayApiService from './js/api-pixabay-service.js'; //! Импорт класса PixabayApiService с ./js/get-refs.js
import getRefs from './js/get-refs.js'; //! Импорт всех ссылок с ./js/get-refs.js

// import API from './js/api-service.js';

const refs = getRefs(); //! Создаем объект всех ссылок refs.*

const pixabayApiService = new PixabayApiService();
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


// let searchQuery = ""; //!  то, что приходит в input
//! Пагинация:
const page = 1;
const per_page = 5; // по ТЗ надо 40


// https://pixabay.com/api/?key=28759369-3882e1068ac26fe18d14affeb&q=yellow+flowers&image_type=photo //! Example URL
// fetch('https://pixabay.com/api/?key=28759369-3882e1068ac26fe18d14affeb&q=yellow+flowers&image_type=photo'); //! Example fetch-URL


//! Формируем строку URL-запроса:
// const url = `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&page=${page}&per_page=${per_page}`; //! with API_KEY
// const url = `${BASE_URL}?q=${searchQuery}&image_type=photo&page=${page}&per_page=${per_page}`; //! fetch(url, options) - так не роботает!
// console.log(url);


//!  Создаем слушателя событий на поле ввода данных - input form:
refs.searchForm.addEventListener('submit', onFormSearch);

//!  Создаем слушателя событий на кнопке LOAD MORE:
refs.loadMoreBtn.addEventListener('click', onLoadMore);


//!  Ф-ция, к-рая прослушивает события на поле ввода данных - input form:
function onFormSearch(evt) {
    evt.preventDefault();
    console.log("Вешаю слушателя на поле ввода данных - input form"); //!

    //! это то, что приходит в input и 
    //! записывается с помощью сетера класса PixabayApiService в переменную searchQuery
    pixabayApiService.query = evt.currentTarget.elements.searchQuery.value;
    console.log("Search: ", pixabayApiService.query); //!



    //! Делаем сброс значения page = 1 после submit form 
    //! с помощью метода resetPage из класса PixabayApiService
    pixabayApiService.resetPage()

    //! Делаем fetch-запрос с помощью метода .fetchHits из класса PixabayApiService
    pixabayApiService.fetchHits()


    //!--------------------------------OLD--------------------------


    // if (newsApiService.query === '') {
    //     return alert('Введи что-то нормальное');
    // }

    // loadMoreBtn.show();
    // newsApiService.resetPage();
    // clearArticlesContainer();
    // fetchArticles();
}


//!  Ф-ция, к-рая прослушивает события на кнопке LOAD MORE:
function onLoadMore(evt) {

    //! Делаем fetch-запрос с помощью метода .fetchHits из класса PixabayApiService
    pixabayApiService.fetchHits()

}








