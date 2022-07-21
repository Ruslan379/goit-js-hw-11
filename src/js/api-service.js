import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';


//*   Ф-ция, которая делает HTTP-запрос на ресурс name 
//*  и возвращает промис с массивом стран по ID или Name:
function fetchCountries(name) {
    // console.log(name); //!

    //? return axios.get(`${BASE_URL}/name/${name}`)
    return axios.get(`${BASE_URL}/name/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
            return response.data;
            // return response.json();
        })
}

export default { fetchCountries };


<div class="photo-card">
    <img src="" alt="" loading="lazy" />
    <div class="info">
        <p class="info-item">
            <b>Likes</b>
        </p>
        <p class="info-item">
            <b>Views</b>
        </p>
        <p class="info-item">
            <b>Comments</b>
        </p>
        <p class="info-item">
            <b>Downloads</b>
        </p>
    </div>
</div>