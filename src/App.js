
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import MeetingsSchedule from './Components/MeetingsSchedule';
import Wallpaper from './Components/Wallpaper';
import Meeting from './Components/Meeting';
import Feature from './Components/Feature';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Wallpaper/>}/>
        <Route path='/room/:roomID' element={<Meeting/>}/>
      </Routes>
      
      <MeetingsSchedule/>
      <Feature/>

    </div>
  );
}

export default App;
