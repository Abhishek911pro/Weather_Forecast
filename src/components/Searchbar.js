import '../componentCss/Searchbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Searchbar() {
    return(
        <div className='searchbar'>
            <input type="Search" placeholder='...search' />
            <button><FontAwesomeIcon icon={faSearch} /></button> 
        </div> 
    )
}

export default Searchbar;