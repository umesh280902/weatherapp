import React from 'react';

export default function Search(props) {
  return (
    <div className='border-sky-950 border-2' style={{width:'40%'}} >
      <input className='p-4 text-3xl' style={{width:'80%'}} type="search" value={props.searchData} onChange={props.eventHandler} name='city' />
      <button onClick={props.weatherEventHandler} className='bg-red-500 text-white p-4 border-sky-950 border-l-2 text-3xl' style={{width:'20%'}}>Search</button>
    </div>
  );
}
