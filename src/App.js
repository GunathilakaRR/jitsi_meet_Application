
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import MeetingsSchedule from './Components/MeetingsSchedule';
import Wallpaper from './Components/Wallpaper';
import VideoUI from './Components/VideoUI';
import Meeting from './Components/Meeting';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Wallpaper/>}/>
        <Route path='/room/:roomID' element={<Meeting/>}/>
      </Routes>

      
      {/* <Wallpaper/>
      <MeetingsSchedule/>
      <VideoUI/> */}

      {/* <Meeting/> */}
    </div>
  );
}

export default App;
