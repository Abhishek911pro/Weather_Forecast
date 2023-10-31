import './App.css';
import React,{ useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import clear from './components/Assets/clear.png'
import cloud from './components/Assets/cloud.png'
import drizzle from './components/Assets/drizzle.png'
import rain from './components/Assets/rain.png'
import snow from './components/Assets/snow.png'
import wind from './components/Assets/wind.png'
import humidity from './components/Assets/humidity.png'


import { useEffect } from 'react';

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
        console.log(data);
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
    <div className=" container-fluid Body">
      <div className="Appbody p-3 shadow">
        <div className='Appheader1 shadow'>
          <h1 className='Apptitle ms-3'>Weather Forecast</h1>
          <div className='searchbar me-3'>
            <input type="Search" className='rounded-pill border ps-3' placeholder='...search' onChange={ (event)=>{
               setCity(event.target.value);
            }}/>
            <button className="rounded-circle ms-1 shadow" onClick={ () =>{
              setSearch(city)
              } }><FontAwesomeIcon icon={faSearch}/></button> 
          </div> 
        </div>
        <hr />
        <div className='Appheader2'>
          <h2 className='ps-3'>{city.name}</h2>
            <div className='dateTime'>
              <h5 className='pe-5'>{newTime}</h5>
               <h5>{newdate}</h5>
            </div>
        </div>
        <hr />
        <div className='row'>
          <div className='col-sm-4 '>
            <div className='weather'>
              <img src={icon} alt="" className='mainIcon'/>
              <div>
                {city.main ? <h1>{Math.trunc(city.main.temp)}&deg;Cel</h1> : <h1></h1>}
              </div>
            </div>
            <div className='weatherType'>
              {city.weather && city.weather.length > 0 ? (
                <h1>{city.weather[0].main}</h1>
                ) : (
                  <h1></h1>
              )}
            </div>
          </div>
          <div className='col-sm-3 '></div>
          <div className='col-sm-5 p-4'>
              <div className='weatherReport mb-3'>
                <div>
                  {city.main ? <h6>{Math.trunc(city.main.temp_min)}&deg;Cel</h6> : <h6></h6>}
                  <h6>min</h6>
                </div>
                <div>
                  {city.main ? <h6>{Math.trunc(city.main.temp_max)}&deg;Cel</h6> : <h6></h6>}
                  <h6>max</h6>
                </div>
              </div>

              <div className='weatherReport'>
                <div>
                  {city.main ? <h6>{city.main.humidity}%</h6> : <h6></h6>}
                  <h6>Humidity</h6>
                </div>
                <div>
                  {city.wind ? <h6>{Math.trunc((city.wind.speed)*18/5)}km/h</h6> : <h6></h6>}
                  <h6>Windspeed</h6>
                </div>
                <div>
                  {city.main ? <h6>{Math.trunc(city.main.feels_like)}&deg;Cel</h6> : <h6></h6>}
                  <h6>Feels like</h6>
                </div>
              </div>
          </div>
          <hr />
        </div>
           {/* <div className='col-sm-4'>
           <div className='weather'>
            <FontAwesomeIcon icon={faCloudBolt} className='weatherIcon'/>
             <div>
              {city.main ? <h1>{Math.trunc(city.main.temp)}&deg;Cel</h1> : <h1></h1>}
             </div>
           </div>
           <div className='weatherType'>
              {city.weather && city.weather.length > 0 ? (
                <h1>{city.weather[0].main}</h1>
              ) : (
                <h1></h1>
              )}
           </div>
           </div>
          
          </div>
          <div className='col-sm-4 ' >
            <div className='row weatherReport mt-2'>
              {city.main ? <h6>{Math.trunc(city.main.temp_min)}&deg;Cel</h6> : <h6></h6>}
              <h6>min</h6>
              {city.main ? <h6>{city.main.humidity}%</h6> : <h6></h6>}
              <h6>Humidity</h6> 
              {city.sys ? <h6>{city.sys.sunrise}</h6> : <h6></h6>}
              <h6>Sunrise</h6>
            </div>
            <div className='row weatherReport mt-2'>
              {city.main ? <h6>{Math.trunc(city.main.temp_max)}&deg;Cel</h6> : <h6></h6>}
              <h6>max</h6>
              {city.main ? <h6>{Math.trunc(city.main.feels_like)}&deg;Cel</h6> : <h6></h6>}
              <h6>Feels like</h6>
              {city.wind ? <h6>{Math.trunc((city.wind.speed)*18/5)}km/h</h6> : <h6></h6>}
              <h6>Windspeed</h6>
              {city.sys ? <h6>{city.sys.sunset}</h6> : <h6></h6>}
              <h6>Sunset</h6>
            </div>
          </div>
           <hr /> */}

        
      </div>
    </div>
  )
}

export default App;

