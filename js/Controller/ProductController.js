import {BASE_API_URL} from "../config.js"

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idProduct = urlParams.get('id')
console.log(idProduct);