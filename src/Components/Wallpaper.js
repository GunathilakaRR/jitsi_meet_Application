import React from "react";
import "./CssFiles/Wallpaper.css";
import wallpaper from "../Assets/images/w1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbar from "./Searchbar";


function Wallpaper() {
  return (
    <container>
      <div className="wallpaper-card ">
        <div className="position-relative ">
          <img
            src={wallpaper}
            className="img-fluid "
            alt="Responsive image"
          ></img>
          <figcaption>
            <h1>Start & join meetings for free</h1>
            <Searchbar/>
            <h4>Or book a meeting URL in advance where you are the only moderator</h4>
          </figcaption>
        </div>
      </div>
    </container>
  );
}

export default Wallpaper;
