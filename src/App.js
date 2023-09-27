import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudBolt } from '@fortawesome/free-solid-svg-icons'
import './components/Searchbar'
import Searchbar from './components/Searchbar';
import { data } from 'jquery';

function App() {
 
  return (
    
    <div className=" container-fluid Body">
      <div className="Appbody p-3">
        <div className='Appheader1'>
          <h1>Weather Forecast</h1>
          <Searchbar />
        </div>
        <hr />
        <div className='Appheader2'>
          <h2 className='ps-3'>Place</h2>
          <div className='dateTime'>
            <h5 className='pe-5'>current_time</h5>
            <h5>date</h5>
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className='col-sm-8 '>
          <FontAwesomeIcon icon={faCloudBolt} className='weatherIcon'/>
          <h1>22'C</h1>
          </div>
          
          <div className='col-sm-4'>
            
          </div>

        </div>
        
      </div>
      
    </div>
  );
}

export default App;
