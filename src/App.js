import React, { useState } from 'react'
import Result from './components/result'
import Search from './components/search'
import axios from 'axios'

export default function App() {
  const [weather,setWeather]=useState([])
  const [search,setSearch]=useState('')
  const searchHandler=(event)=>{
    setSearch(event.target.value)
  }
  const getWeatherData=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3265874a2c77ae4a04bb96236a642d2f&units=metric`)
    .then((response)=>{
      const main=response.data.main
      const coord=response.data.coord
      const sys=response.data.sys
      const Weather=response.data.weather
      const name=response.data.name
      const weatherData={main,sys,coord,Weather,name} 
      setWeather(weatherData)
    }).catch(()=>{
      alert("Cannot find the weather details of the requested city.Please try another city")
    })
  }
  const weatherHandler=()=>{
    if(search!==""){
     getWeatherData() 
    }else if(search===""){
      alert("Cannot find the weather details of the requested city.Please try another city")
    }
  }
  return (
    <>
    <div className='border-2 border-sky-950 ml-2 mr-2 bg-cyan-300'>
      <div className='m-5 flex justify-center '>
      <Search searchData={search} eventHandler={searchHandler} weatherEventHandler={weatherHandler}/>
    </div>
    <div className='m-5 flex justify-center '>
      <Result weatherData={weather} />
    </div>
    </div>
    </>
  )
}
