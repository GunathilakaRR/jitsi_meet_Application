import React, { useState, useEffect } from "react";
import "../CssFiles/MeetingsSchedule.css";
import AddToDo from "./AddToDo";
import { addToDo, getAllToDo, deleteToDo } from "../../utils/HandleApi";

function MeetingsSchedule() {

  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  return (
    <div className="container">
      <h3 className="todo-list">Set important dates, events, and to-dos to keep <br></br> your schedule on track </h3>
      <div className="top">
        <input
          type="text"
          placeholder="Never forget a thing "
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="add" onClick={() => addToDo(text, setText, setToDo)}>
          Add
        </div>
      </div>
      <div className="list">
        {toDo.map((item) => (
          <AddToDo key={item._id} text={item.text} 
          deleteToDo={()=>deleteToDo(item._id, setToDo)}/>
        ))}
      </div>
    </div>
  );


}


export default MeetingsSchedule;
