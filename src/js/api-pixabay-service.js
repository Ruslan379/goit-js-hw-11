//! Переменные для URL-запроса:
const API_KEY = '28759369-3882e1068ac26fe18d14affeb';
const BASE_URL = 'https://pixabay.com/api/';

export default class PixabayApiService {
    constructor() {
        this.searchQuery = ''; //! это то, что приходит в input
        //! Пагинация:
        this.page = 1; //! номер страници в fetch-запросе
        this.per_page = 7; // по ТЗ надо 40
    }

    fetchHits() {
        // console.log("this ДО: ", this); //!
        const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.per_page}`; //! with API_KEY

        //! Делаем fetch-запрос:
        return fetch(url)
            .then(response => response.json())
            // .then(response => { console.log(response); }) //!
            .then(({ hits }) => {
                // console.log(data); //!
                this.incrementPage();
                // console.log("this ПОСЛЕ: ", this); //!
                return hits
            })
    }

    incrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }

}
