export default function getRefs() {
  return {
    //? 1.0.Получаем ссылку на div-контейнер для разметки ОДНОЙ страны:
    countryInfoContainer: document.querySelector('.country-info'),

    //todo 2.0.Получаем ссылку на список для разметки СПИСКА стран:
    countriesList: document.querySelector('.country-list'),

    //* 2.0.Получаем ссылку на поле ввода данных - input:
    input: document.querySelector('input#search-box'),
  };
}
