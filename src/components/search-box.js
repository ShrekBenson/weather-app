import searchData from "../utils/search-data";

const searchBox = document.getElementById('searchCity');
const searchButton = document.getElementById('searchButton');

function searchCity() {
  if (searchBox.value == '') {
    return alert('Please enter a city to perform the search');
  } else {
    searchBox.dataset.save = searchBox.value;
    searchData(searchBox.value, undefined, searchButton.dataset.format);
  }
}

export default async function setSearchBox() {
  searchButton.removeEventListener('click', searchCity);
  searchButton.addEventListener('click', searchCity);
}