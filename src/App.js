import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudBolt } from '@fortawesome/free-solid-svg-icons'
import './components/Searchbar'
import Searchbar from './components/Searchbar';
import { data } from 'jquery';

function App() {
 
  return (
    
    <div className=" container-fluid Body">
      <div className="Appbody p-3 shadow">
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
          <div className='col-sm-4'>
          <div className='weather'>
            <FontAwesomeIcon icon={faCloudBolt} className='weatherIcon'/>
            <div>
              <h1>22'C</h1>
              <h6>Windspeed</h6>
            </div>
          </div>
          <div className='weatherType'>
            <h1>HAZE</h1>
            
          </div>
          </div>
          
          
          <div className='col-sm-8 '>
            <div className='row weatherReport mt-2'>
              <div className='col-sm-2'>
                <h6>Min</h6>
                <h6>Humidity</h6>
                <h6>Sunrise</h6>
              </div>
              
              <div className='col-sm-2'>
                <h6>Max</h6>
                <h6>Feels like</h6>
                <h6>Sunset</h6>
              </div>
            </div>
          </div>
          <hr />

        </div>
        
      </div>
      
    </div>
  );
}

export default App;
