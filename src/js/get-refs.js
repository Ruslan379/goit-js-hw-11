export default function getRefs() {
  return {
    //todo Получаем ссылку на input form:
    searchForm: document.querySelector('#search-form'),

    //todo Получаем ссылку на div-контейнер для разметки карточек изображений:
    imageCards: document.querySelector('.gallery'),

    //todo Получаем ссылку на кнопку LOAD MORE:
    // loadMoreBtn: document.querySelector('.load-more'), //! OLD
  };
}

