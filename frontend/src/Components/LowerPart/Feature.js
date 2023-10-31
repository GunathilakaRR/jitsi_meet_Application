import React from "react";
import "../CssFiles/Feature.css";
import f1 from "../../Assets/images/f1.png";
import f2 from "../../Assets/images/f2.png";
import f3 from "../../Assets/images/f3.png";

function Feature() {
  return (
    <div className="container-fluid" style={{padding: 0}}>
      <div className="feature-section">
        <h1>Check out All Features</h1>

        <div className="card-container">
          <div className="card">
            <img className="card-image" src={f1} alt="Card image cap" />
            <div className="card-title">
              <h5 class="card-title">Audio & Video Calling</h5>
              <p className="card-content">
                Connect with friends and loved ones with crystal-clear clarity,
                no matter where they are in the world. Stay close, even when
                you're miles apart.
              </p>
            </div>
          </div>

          <div className="card">
            <img className="card-image" src={f2} alt="Card image cap" />
            <div className="card-title">
              <h5 class="card-title">Screen Sharing</h5>
              <p className="card-content">
                Share your ideas, documents, and visuals in real-time with the
                click of a button. Make communication more engaging and
                productive with our screen sharing feature.
              </p>
            </div>
          </div>

          <div className="card">
            <img className="card-image" src={f3} alt="Card image cap" />
            <div className="card-title">
              <h5 class="card-title">Instant Messaging</h5>
              <p className="card-content">
                Instantly connect, chat, and share ideas with friends and
                colleagues, no matter where you are.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
