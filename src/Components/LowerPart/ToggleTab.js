import React, {useState} from "react";
import "../CssFiles/ToggleTab.css";
import Calendar from "./Calendar";
import MeetingsSchedule from "./MeetingsSchedule";
import Button from 'react-bootstrap/Button';


function ToggleTab() {

    const [toggle, setToggle] = useState(1);

    function updateToggle(id){
        setToggle(id)
    }


  return (
    <div >

<div className="sceduler-btn">
<button className="btn btn1 " onClick={() => updateToggle(1)}>
          <h4 className="text">Set importatnt notes</h4>
        </button>
        <button className="btn btn2 " onClick={() => updateToggle(2)}>
        <h4 className="text">Set importatnt dates</h4>
        </button>
</div>
        
      


      <div className={toggle === 1 ? "show-content" : "content"}>
      <MeetingsSchedule/>
      </div>

      <div className={toggle === 2 ? "show-content" : "content"}>
        <Calendar />
      </div>
      
    </div>
  );
}

export default ToggleTab;
