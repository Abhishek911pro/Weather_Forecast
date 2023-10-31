// import '../componentCss/WeatherData.css';
// import React,{ useState } from 'react';
// import { useEffect } from 'react';

// function WeatherData (props) {

//     // const APIkey = "8498078f2e97df6941e654441daa452d";
//     // let url =`https://api.openweathermap.org/data/2.5/weather?q=London&appid=8498078f2e97df6941e654441daa452d`;
    
//     // useEffect(() => {
//     // fetch(url).then(response => response.json())
//     // .then(data => console.log(data));
//     // }, []);
//     // let response = fetch(url)
// //     let data = response.json();
// //     let ddata = document.getElementsByClassName("d");
// //     ddata[0].innerHTML = data.main.temp;
    
//     // const search = async () =>{
//     //     let url =`https://api.openweathermap.org/data/2.5/weather?q=patna&appid={APIkey}`;
//     //     let response = await fetch(url);
//     //     let data = await response.json();

//     //     let ddata = document.getElementsByClassName("d");
//     //     ddata[0].innerHTML = data.main.temp;
//     // }

//     return(
//         <div>
//             <h6 className='d'></h6>
//             <h6>38 <span>&#176;</span>C</h6>
//             <h6>{props.name}</h6>
//         </div>
//     );
// }
// export default WeatherData;