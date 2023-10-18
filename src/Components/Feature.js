import React from "react";
import "./CssFiles/Feature.css";
import f1 from "../Assets/images/f1.png";
import f2 from "../Assets/images/f2.png";
import f3 from "../Assets/images/f3.png";

function Feature() {
  return (
    <div className="feature-section">
      <h1>Check out All Features</h1>
      <div class="card-group cardSize">
        <div class="card">
          <img class="card-img-top" src={f1} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Audio & Video Calling</h5>
            <p class="card-text">
              Connect with friends and loved ones with crystal-clear clarity, no
              matter where they are in the world. Stay close, even when you're
              miles apart.
            </p>
          </div>
        </div>
        <div class="card ">
          <img class="card-img-top" src={f2} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Screen Sharing</h5>
            <p class="card-text">
              Share your ideas, documents, and visuals in real-time with the
              click of a button. Make communication more engaging and productive
              with our screen sharing feature.
            </p>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src={f3} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Instant Chat</h5>
            <p class="card-text">
              Instantly connect, chat, and share ideas with friends and
              colleagues, no matter where you are.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
