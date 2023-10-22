
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MeetingsSchedule from './Components/MeetingsSchedule';
import Wallpaper from './Components/Wallpaper';
import Meeting from './Components/Meeting';
import Feature from './Components/Feature';
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Wallpaper/>}/>
        <Route path='/room/:roomID' element={<Meeting/>}/>
      </Routes>
      
      
      <MeetingsSchedule/>
      <Feature/>
      <Footer/>

    </div>
  );
}

export default App;
