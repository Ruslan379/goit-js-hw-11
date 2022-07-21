export default function getRefs() {
  return {
    //! Получаем ссылку на input form:
    searchForm: document.querySelector('#search-form'),

    //! Получаем ссылку на div-контейнер для разметки карточек изображений:
    imageCards: document.querySelector('.gallery'),

    //! Получаем ссылку на кнопку LOAD MORE:
    loadMoreBtn: document.querySelector('.load-more'),
  };
}

