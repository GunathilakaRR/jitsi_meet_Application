


import React, {useState} from "react";
import './CssFiles/Searchbar.css'
import { useNavigate } from "react-router-dom";



const Searchbar = () => {
  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();


  const submitHandler=(event)=>{
    event.preventDefault() //prevents, page refresh when the button is clicked
    navigate(`/room/${RoomCode}`)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div class="input-group srchbox">
          <div class="form-outline srchbar">
            <input
              id="search-input "
              type="search"
              placeholder="Enter meetind ID"
              value={RoomCode}
              required
              class="form-control srchbar"
              onChange={(event) => {
                setRoomCode(event.target.value);
              }}
            />
          </div>
          <button id="search-button" type="submit" class="btn btn-primary">
            Start meeting
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;


// const Searchbar = () => {
//   return (
//     <div >
//       <div class="input-group srchbox">
//         <div class="form-outline srchbar">
//           <input id="search-input " type="search" class="form-control srchbar"/>
          
//         </div>
//         <button id="search-button" type="button" class="btn btn-primary">
//           Start meeting
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Searchbar;
