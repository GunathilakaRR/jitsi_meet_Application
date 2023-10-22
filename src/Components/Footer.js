import React from "react";
import "./CssFiles/Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-section">
          <div className="footer-items">

            <div className="footer-icon">
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
                <a href=""><i class="fa-brands fa-github"></i></a>
                <a href=""><i class="fa-brands fa-linkedin"></i></a>
            </div>


            <div className="footer-menu">
              <p>Home</p>
              <p>About Us</p>
              <p>Contact</p>
              <p>Our Team</p>
            </div>

            
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
