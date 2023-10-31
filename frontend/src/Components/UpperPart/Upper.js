

import React from 'react'
import { Router,Route, Routes } from 'react-router-dom';
import Wallpaper from './Wallpaper';
import Meeting from './Meeting';

function Upper() {
  return (
    <div>
      {/* <Router> */}
        <div>
        <Routes>
        <Route path='/' element={<Wallpaper/>}/>
        <Route path='/room/:roomID' element={<Meeting/>}/>
        
        </Routes>
        </div>
      {/* </Router> */}
    </div>
  )
}

export default Upper
