import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Wallpaper from './Wallpaper';
import Meeting from './Meeting';

function Upper() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Wallpaper/>}/>
        <Route path='/room/:roomID' element={<Meeting/>}/>
      </Routes>
    </div>
  )
}

export default Upper
