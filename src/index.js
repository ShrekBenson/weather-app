import './styles/index.css'
import './styles/search-row.css'
import './styles/data-row.css'
import './styles/data-table.css'

import setData from './utils/set-data';
import setSearchBox from './components/search-box';
import setFormatButton from './components/format-button';

function setPage() {  
  setData()
  setSearchBox();
  setFormatButton();
}

document.addEventListener('DOMContentLoaded', setPage);