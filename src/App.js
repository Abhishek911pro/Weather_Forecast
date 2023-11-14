import './App.css';
import React,{ useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons'
import { faTemperatureLow } from '@fortawesome/free-solid-svg-icons'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faThermometer } from '@fortawesome/free-solid-svg-icons'
import clear from './components/Assets/clear.png'
import cloud from './components/Assets/cloud.png'
import drizzle from './components/Assets/drizzle.png'
import rain from './components/Assets/rain.png'
import snow from './components/Assets/snow.png'

function App() {

    const [city, setCity]=useState("");
    const [search, setSearch]=useState("patna");
    const [icon, seticon]=useState(clear);


    useEffect(() => {
      const fetchData = async () =>{
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8498078f2e97df6941e654441daa452d`;
      const response = await fetch(url);
      const data = await response.json();
          
      if (data.cod==='404')
      {
        alert("city not found");
      }else{
        setCity(data);
      }

        // Check if city.weather exists and has at least one element
      if (data.weather && data.weather.length > 0) {
      const iconCode = data.weather[0].icon;

      // Check the icon code and set the appropriate icon
      if (iconCode === "01d" || iconCode === "01n") {
        seticon(clear);
        } else if (iconCode === "02d" || iconCode === "02n") {
          seticon(cloud);
        } else if (iconCode === "03d" || iconCode === "03n") {
          seticon(cloud);
        } else if (iconCode === "04d" || iconCode === "04n") {
          seticon(cloud);
        } else if (iconCode === "09d" || iconCode === "09n") {
          seticon(rain);
        } else if (iconCode === "10d" || iconCode === "10n") {
          seticon(rain);
        } else if (iconCode === "11d" || iconCode === "11n") {
          seticon(rain);
        } else if (iconCode === "13d" || iconCode === "13n") {
          seticon(snow);
        } else if (iconCode === "50d" || iconCode === "50n") {
          seticon(cloud);
        } else {
          console.log("other data");
        }
      } else {
        console.log("No weather data available");
      }
    }

    if (search) {
      fetchData();
    }
  },[search,icon]);
    
    //for date and time

    let d = new Date();
    let localTime = d.getTime();
    let localOffset = d.getTimezoneOffset() * 60000;
    let utc = localTime + localOffset
    let destcity = utc + (1000 * city.timezone);
    let nd = new Date(destcity);

     let newTime = nd.toLocaleTimeString('en-US');

    // let month = nd.getUTCMonth() + 1; //months from 1-12
    let month = nd.toLocaleString('en-US',{month: 'long'});
    let day = nd.getUTCDate();
    let year = nd.getUTCFullYear();
    let newdate = day + "-" + month + "-" + year;

    

  return(
    <div className=" container-fluid Body image-fluid">
        <div className="Appbody bgimage p-3 shadow">
          <div className='row Appheader1 shadow'>
            <div className="col-md-6">
              <h1 className='Apptitle ms-3 text-start text-white'>Weather Forecast</h1>
            </div>
            <div className="col-md-6">
              <div className='searchbar text-end me-3 '>
                <input type="Search" className='rounded-pill border ps-3' placeholder='...City_name' onChange={ (event)=>{
                  setCity(event.target.value);
                }}/>
                <button className="rounded-circle ms-1 shadow" onClick={ () =>{
                  setSearch(city)
                  } }><FontAwesomeIcon icon={faSearch}/></button> 
              </div>   
            </div>
          </div>
          <div className='row Appheader2 border-bottom border-dark'>
            <div className="col-6 ">
              <h2 className='Apptitle2'>{city.name}</h2>
            </div>
            <div className='col-6 dateTime '>
              <h5 className='datetitle'>{newTime == "Invalid Date" ? <p></p>: newTime}</h5>
              <h5 className='datetitle'>{newdate == "NaN-Invalid Date-NaN" ? <p></p>: newdate}</h5>
            </div>
          </div>
          <br/>
          <div className='row mt-2 '>
            <div className='col-sm-4'>
              <div className='weather'>
                <img src={icon} alt="" className='mainIcon'/>
                <div className='ms-4'>
                  {city.main ? <h1 className='fw-normal'>{Math.trunc(city.main.temp)}&deg;Cel</h1> : <h1></h1>}
                  {city.weather && city.weather.length > 0 ? (
                  <h1 className='fw-normal'>{city.weather[0].main}</h1>
                  ) : (
                    <h1></h1>
                )}
                </div>
              </div>
              
            </div>
            <div className='col-sm-3 '></div>
            <div className='col-sm-5 p-4'>
                <div className=' row weatherReport mb-3'>
                  <div className='col-4 boxes shadow'>
                    <div>
                      {city.main ? <h6 className='text-center fw-normal '>{Math.trunc(city.main.temp_min)}&deg;Cel</h6> : <h6></h6>}
                      <h6 className='text-center fw-normal'><FontAwesomeIcon icon={faTemperatureLow} /> min</h6>
                    </div>
                  </div>
                  <div className='col-4 '></div>
                  <div className='col-4 boxes shadow'>
                    <div>
                      {city.main ? <h6 className='text-center fw-normal'>{Math.trunc(city.main.temp_max)}&deg;Cel</h6> : <h6></h6>}
                      <h6 className='text-center fw-normal'><FontAwesomeIcon icon={faTemperatureHigh} /> max</h6>
                    </div>
                  </div>
                </div>

                <div className='row weatherReport '>
                  <div className='col-sm-4 boxes shadow'>
                    <div>
                      {city.main ? <h6 className='text-center fw-normal'>{city.main.humidity}%</h6> : <h6></h6>}
                      <h6 className='text-center fw-normal'><FontAwesomeIcon icon={faDroplet} /> Humidity</h6>
                    </div>
                  </div>
                  <div className='col-sm-4 boxes shadow'>
                    <div>
                      {city.wind ? <h6 className='text-center fw-normal'>{Math.trunc((city.wind.speed)*18/5)}km/h</h6> : <h6></h6>}
                      <h6 className='text-center fw-normal'><FontAwesomeIcon icon={faWind} /> Windspeed</h6>
                    </div>
                  </div>
                  <div className='col-sm-4 boxes shadow'>
                    <div>
                      {city.main ? <h6 className='text-center fw-normal'>{Math.trunc(city.main.feels_like)}&deg;Cel</h6> : <h6></h6>}
                      <h6 className='text-center fw-normal'><FontAwesomeIcon icon={faThermometer} /> Feels like</h6>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App;

