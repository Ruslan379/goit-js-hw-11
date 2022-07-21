//! Переменные для URL-запроса:
const API_KEY = '28759369-3882e1068ac26fe18d14affeb';
const BASE_URL = 'https://pixabay.com/api/';


// let searchQuery = ""; //!  то, что приходит в input
//! Пагинация:
const page = 1;
const per_page = 5; // по ТЗ надо 40





export default class PixabayApiService {
    constructor() {
        this.searchQuery = ''; //! это то, что приходит в input
    }

    fetchHits() {
        console.log("this: ", this); //!
        const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${per_page}`; //! with API_KEY

        //! Делаем fetch-запрос:
        fetch(url)
            .then(response => response.json())
            .then(console.log)
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }

}
