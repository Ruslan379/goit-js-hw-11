export default function getRefs() {
  return {
    //! Получаем ссылку на input form:
    searchForm: document.querySelector('#search-form'),

    //! Получаем ссылку на список-контейнер для разметки карточек:
    cardsList: document.querySelector('.js-articles-container'),

    //! Получаем ссылку на :
    // input: document.querySelector('input#search-box'),
  };
}

