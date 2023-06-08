import React from 'react';

const Result = ({ weatherData }) => {
  const { main, coord, sys, Weather, name } = weatherData;

  if (weatherData.length !== 0) {
    return (
      <div className='grid grid-rows-1 gap-6 text-2xl'>
        <h2 className='text-gray-800 text-4xl'>Weather Result</h2>
        {main && (
          <div className='-mt-4'>
            <h1 className='text-white text-3xl'>Temperature Details</h1>
            <p className='text-gray-800'>Temperature: {main.temp} °C</p>
            <p className='text-gray-800'>Humidity: {main.humidity} %</p>
          </div>
        )}
        {coord && (
          <div className='-mt-4'>
            <h1 className='text-white text-3xl'>Coordinates Details</h1>
            <p className='text-gray-800'>Latitude: {coord.lat}</p>
            <p className='text-gray-800'>Longitude: {coord.lon}</p>
          </div>
        )}
        {sys && (
          <div className='-mt-4'>
            <h1 className='text-white text-3xl'>Country Details</h1>
            <p className='text-gray-800'>Country: {sys.country}</p>
          </div>
        )}
        {Weather && (
          <div className='-mt-4'>
            <h1 className='text-white text-3xl'>Overall Description</h1>
            <p className='text-gray-800'>Description: {Weather[0].description}</p>
            <p className='text-white'>
              Icon: <img className='w-32 h-32' src={`http://openweathermap.org/img/w/${Weather[0].icon}.png`} alt="weatherImage" />
            </p>
          </div>
        )}
        {name && (
          <div className='-mt-4'>
            <p className='text-gray-800'>City: {name}</p>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className='text-center'>
        <h1 className='text-3xl text-white font-serif'>Please enter a city name</h1>
      </div>
    );
  }
};

export default Result;
