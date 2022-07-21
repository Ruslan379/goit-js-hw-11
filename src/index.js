import './css/styles.css';
import Notiflix from 'notiflix';
// import axios from 'axios';

//? Библиотека SimpleLightbox
import SimpleLightbox from "simplelightbox";
//? Библиотека SimpleLightbox - дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

import PixabayApiService from './js/api-pixabay-service.js'; //! Импорт класса PixabayApiService с ./js/get-refs.js
import getRefs from './js/get-refs.js'; //! Импорт всех ссылок с ./js/get-refs.js

// import API from './js/api-service.js';

const refs = getRefs(); //! Создаем объект всех ссылок refs.*

const pixabayApiService = new PixabayApiService(); //! Экземпляр класса PixabayApiService



// https://pixabay.com/api/?key=28759369-3882e1068ac26fe18d14affeb&q=yellow+flowers&image_type=photo //! Example URL
// fetch('https://pixabay.com/api/?key=28759369-3882e1068ac26fe18d14affeb&q=yellow+flowers&image_type=photo'); //! Example fetch-URL


//! Формируем строку URL-запроса:
// const url = `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=photo&page=${page}&per_page=${per_page}`; //! with API_KEY
// console.log(url);


//todo  Создаем слушателя событий на поле ввода данных - input form:
refs.searchForm.addEventListener('submit', onFormSearch);

//todo  Создаем слушателя событий на кнопке LOAD MORE:
refs.loadMoreBtn.addEventListener('click', onLoadMore);


//! +++++++++++++++++++++++++++++++++++ input form +++++++++++++++++++++++++++++++++++++++++++++++

//!  Ф-ция, к-рая прослушивает события на поле ввода данных - input form:
function onFormSearch(evt) {
    evt.preventDefault();
    console.log("Вешаю слушателя на поле ввода данных - input form"); //!

    //! это то, что приходит в input и 
    //! записывается с помощью сетера класса PixabayApiService в переменную searchQuery
    pixabayApiService.query = evt.currentTarget.elements.searchQuery.value;
    console.log("searchQuery: ", pixabayApiService.query); //!

    if (pixabayApiService.query === "") {
        return alert("Поле ввода не долно быть пустым!");
    }

    //! Делаем сброс значения page = 1 после submit form 
    //! с помощью метода resetPage из класса PixabayApiService
    pixabayApiService.resetPage()

    //! Очищаем контейнер при новом вводе данных в input form:
    clearHitsContainer()


    //? Делаем ОБЩИЙ fetch-запрос с помощью метода .fetchHits из класса PixabayApiService
    pixabayApiService.fetchHits()
        .then(appendHitsMarkup); //* Рисование интерфейса выносим в отдельную ф-цию


    //! Делаем fetch-запрос для получения TotalHit
    pixabayApiService.fetchTotalHits()
        .then(showsTotalHits); //* Консолим свойство totalHits
}
//! ++++++++++++++++++++++++++++++++ Кнопка LOAD MORE ++++++++++++++++++++++++++++++++++++++++++++

//!  Ф-ция, к-рая прослушивает события на кнопке LOAD MORE:
function onLoadMore(evt) {

    //? Делаем fetch-запрос с помощью метода .fetchHits из класса PixabayApiService
    pixabayApiService.fetchHits()
        .then(appendHitsMarkup); //* Рисование интерфейса выносим в отдельную ф-цию
    //! Или так:
    // pixabayApiService.fetchHits().
    //     then(hits => {
    //     appendHitsMarkup(hits); // Рисование интерфейса выносим в отдельную ф-цию 
    // });

}
//! +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




//*  Ф-ция-then, к-рая отрисовывает интерфейс ВСЕХ карточек на странице:
function appendHitsMarkup(hits) {
    //! ПРОВЕРКА hits на пустой массив:
    checkHitsForEmpty(hits)
    //!   Добавляем новую разметку в div-контейнер с помощью insertAdjacentHTML:
    refs.imageCards.insertAdjacentHTML('beforeend', createImageCardsMarkup(hits));
    // console.log(hits[0].largeImageURL); //! ссылка на большое изображение
    // console.log(hits[0].largeImageURL); //! ссылка на большое изображение
}




//?  Ф-ция от appendHitsMarkup, к-рая  прверяет hits на пустой массив:
function checkHitsForEmpty(hits) {
    // console.log(hits[0]); //!
    if (hits[0] === undefined)
        Notiflix.Notify.failure(`Sorry, there are no images matching your search query. Please try again.`, { timeout: 3000, },);
}



//!   Ф-ция, к-рая очищает контейнер при новом вводе данных в input form:
function clearHitsContainer() {
    refs.imageCards.innerHTML = "";
}




//*   Ф-ция, к-рая консолит свойство totalHits:
function showsTotalHits(totalHits) {
    if (totalHits > 0)
        Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`, { timeout: 3000, },);;
}



//?   Ф-ция, к-рая создает новую разметку для ОДНОЙ карточки:
function createImageCardsMarkup(hits) {
    return hits
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
            return `
                <div class="photo-card">
                    <img class="img-card"
                        src="${webformatURL}"
                        alt=${tags}
                        loading="lazy" 
                        />
                    <div class="info">
                        <p class="info-item">
                            <b>Likes</b>
                            <b>${likes}</b>
                        </p>
                        <p class="info-item">
                            <b>Views</b>
                            <b>${views}</b>
                        </p>
                        <p class="info-item">
                            <b>Comments</b>
                            <b>${comments}</b>
                        </p>
                        <p class="info-item">
                            <b>Downloads</b>
                            <b>${downloads}</b>
                        </p>
                    </div>
                </div>
            `;
        })
        .join('');
}












