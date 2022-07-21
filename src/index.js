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



// https://pixabay.com/api/?key=28759369-3882e1068ac26fe18d14affeb&q=yellow+flowers&image_type=photo //! Example URL
// fetch('https://pixabay.com/api/?key=28759369-3882e1068ac26fe18d14affeb&q=yellow+flowers&image_type=photo'); //! Example fetch-URL


//! Формируем строку URL-запроса:
// const url = `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&page=${page}&per_page=${per_page}`; //! with API_KEY
// const url = `${BASE_URL}?q=${searchQuery}&image_type=photo&page=${page}&per_page=${per_page}`; //! fetch(url, options) - так не роботает!
// console.log(url);


//todo  Создаем слушателя событий на поле ввода данных - input form:
refs.searchForm.addEventListener('submit', onFormSearch);

//todo  Создаем слушателя событий на кнопке LOAD MORE:
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
        .then(appendHitsMarkup); //* Рисование интерфейса выносим в отдельную ф-цию 

}


//!  Ф-ция, к-рая прослушивает события на кнопке LOAD MORE:
function onLoadMore(evt) {

    //! Делаем fetch-запрос с помощью метода .fetchHits из класса PixabayApiService
    pixabayApiService.fetchHits()
        .then(appendHitsMarkup); //* Рисование интерфейса выносим в отдельную ф-цию
    //! Или так:
    // pixabayApiService.fetchHits().
    //     then(hits => {
    //     appendHitsMarkup(hits); //* Рисование интерфейса выносим в отдельную ф-цию 
    // });
}

//*  Ф-ция-then, к-рая отрисовывает  интерфейс:
function appendHitsMarkup(hits) {
    //!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
    refs.imageCards.insertAdjacentHTML('beforeend', createImageCardsMarkup(hits));
}



//?   Ф-ция, к-рая создает новоую разметку для ОДНОЙ карточки:
function createImageCardsMarkup(hits) {
    return hits
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
            return `
                <div class="photo-card">
                    <img class="img-card"
                        src="${webformatURL}"
                        alt="${tags}"
                        loading="lazy" 
                        />
                    <div class="info">
                        <p class="info-item">
                            <b>Likes</b>
                            <b>"${likes}"</b>
                        </p>
                        <p class="info-item">
                            <b>Views</b>
                            <b>"${views}"</b>
                        </p>
                        <p class="info-item">
                            <b>Comments</b>
                            <b>"${comments}"</b>
                        </p>
                        <p class="info-item">
                            <b>Downloads</b>
                            <b>"${downloads}"</b>
                        </p>
                    </div>
                </div>
            `;
        })
        .join('');
}











