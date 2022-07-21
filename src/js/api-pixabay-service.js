//! Переменные для URL-запроса:
const API_KEY = '28759369-3882e1068ac26fe18d14affeb';
const BASE_URL = 'https://pixabay.com/api/';


// let searchQuery = ""; //!  то, что приходит в input
//! Пагинация:
// const page = 1;
// const per_page = 5; // по ТЗ надо 40





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
        fetch(url)
            .then(response => response.json())
            .then(response => { console.log(response); }) //!
            .then(data => {
                // console.log(data); //!
                this.incrementPage();
                // console.log("this ПОСЛЕ: ", this); //!
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
