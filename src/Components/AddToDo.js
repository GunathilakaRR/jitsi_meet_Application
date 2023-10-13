import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import './CssFiles/AddToDo.css'

function AddToDo({text, deleteToDo}) {
  return (
    <div className='todo'>
        <div className='text'>{text}</div>
        <div className='icons'>
            <AiFillDelete className='icon' onClick={deleteToDo} />
        </div>
      
    </div>
  )
}

export default AddToDo
