import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './Style.css'
import Desc from './Des';




export default function App() {
  const [search,setSearch]=useState();

  const [city,setCity]=useState();

  const [temp,setTemp]=useState();

  const [des,setDes]=useState();

  useEffect(()=>{
    async function getWeatherApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b21ab90f469c7307705b0c8716de55ee`);
        console.log(response);
        setCity(response.data.name);
        setTemp(response.data.main.temp)
        setDes(response.data.weather[0].description)
      } catch (error) {
        console.error(error);
      }
      }
      getWeatherApi();
      
  },[search])
  console.log(search)

  const backgroundImage=document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?" + ${city} + "')`;
  
  
  return (
    <div>
        <div className='box'>
              <h1 style={{fontSize:"30px"}}>Weather APP</h1>
              <input value={search} onChange={(e)=>setSearch(e.target.value)}/>
              <h3>{city}</h3>
              <h3>{Math.floor(temp)+"°C"}</h3>
              <Desc acıklama={des}/>
        </div>
    </div>
    
  )

}

