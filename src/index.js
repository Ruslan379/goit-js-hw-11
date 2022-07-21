import './css/styles.css';
import Notiflix from 'notiflix';
// import axios from 'axios';
// import debounce from 'lodash.debounce';

//? Библиотека SimpleLightbox
import SimpleLightbox from "simplelightbox";
//? Библиотека SimpleLightbox - дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

// import getRefs from './js/get-refs.js'; //! Импорт всех ссылок с ./js/get-refs.js




const API_KEY = '4330ebfabc654a6992c2aa792f3173a3';
const BASE_URL = 'https://newsapi.org/v2';
const options = {
    headers: {
        Authorization: API_KEY,
    },
};
const q = "cat";
const page = 3;

const url = `${BASE_URL}/everything?q=${q}&language=en&pageSize=5&page=${page}`;
console.log(url);


fetch(url, options)