import './css/styles.css';
import Notiflix from 'notiflix';
// import axios from 'axios';
// import debounce from 'lodash.debounce';

//? Библиотека SimpleLightbox
import SimpleLightbox from "simplelightbox";
//? Библиотека SimpleLightbox - дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

// import getRefs from './js/get-refs.js'; //! Импорт всех ссылок с ./js/get-refs.js



//! old
// const API_KEY = '4330ebfabc654a6992c2aa792f3173a3'; //! old
// const BASE_URL = 'https://newsapi.org/v2'; //! old


const API_KEY = '28759369-3882e1068ac26fe18d14affeb';
const BASE_URL = 'https://pixabay.com/api/';

// const options = {
//     headers: {
//         Authorization: API_KEY,
//     },
// };

const q = "cat";
const page = 1;
const per_page = 5;


// const url = `${BASE_URL}everything?q=${q}&language=en&pageSize=5&page=${page}`; //! old


// https://pixabay.com/api/?key=28759369-3882e1068ac26fe18d14affeb&q=yellow+flowers&image_type=photo //! Example
// fetch('https://pixabay.com/api/?key=28759369-3882e1068ac26fe18d14affeb&q=yellow+flowers&image_type=photo'); //! Example

const url = `${BASE_URL}?key=${API_KEY}&q=${q}&image_type=photo&page=${page}&per_page=${per_page}`;

console.log(url);


fetch(url);
