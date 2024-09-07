import searchData from "../utils/search-data";

const celsiusFormat = document.getElementById('celsiusFormat');
const farenheitFormat = document.getElementById('farenheitFormat');
const searchBox = document.getElementById('searchCity');
const searchButton = document.getElementById('searchButton');

function setFormat(e) {
  if (celsiusFormat.classList.contains('format-selected')) {
    celsiusFormat.classList.remove('format-selected');
  } else {
    farenheitFormat.classList.remove('format-selected');
  }

  e.target.classList.add('format-selected');
  searchButton.dataset.format = e.target.value;
  searchData(searchBox.dataset.save, undefined, e.target.value);
}

export default async function setFormatButton() {
  celsiusFormat.removeEventListener('click', setFormat);
  farenheitFormat.removeEventListener('click', setFormat);
  celsiusFormat.addEventListener('click', setFormat);
  farenheitFormat.addEventListener('click', setFormat);
}