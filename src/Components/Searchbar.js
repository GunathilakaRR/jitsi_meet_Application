
import './CssFiles/Searchbar.css'
import { useNavigate } from "react-router-dom";



const Searchbar = () => {


  const navigate = useNavigate();

  const submitHandler=(event)=>{
    event.preventDefault() //prevents, page refresh when the button is clicked
    navigate(`/room/${randomId}`)
  }


  //this function generates a random id number
  function generateRandomId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; 
    let id = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters.charAt(randomIndex);
    }
    return id;
  }
  const randomId = generateRandomId(20);



  return (
    <div>
      <form onSubmit={submitHandler}>
        <div class="input-group srchbox">
          <button id="search-button" type="submit" class="btn btn-primary btncss">
            <h3 className="btntxt">Start meeting</h3>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;



