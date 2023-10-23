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
//   const [todos, setTodos] = useState([]);
//   const [task, setTask] = useState("");

//   const addTodo = () => {
//     if (task) {
//       setTodos([...todos, task]);
//       setTask("");
//     }
//   };

//   const deleteTodo = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div className="textArea">
//       <h1 className="notesHeader">Add Your Notes Here</h1>
//       <input
//       className="addNote"
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="Add a new task"
//       />
//       <button className="addbtn" onClick={addTodo}>Add</button>
//       <ul >
//         {todos.map((todo, index) => (
//           <li className="list" key={index}>
//             {todo}
//             <button className="dltbtn" onClick={() => deleteTodo(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default MeetingsSchedule;
