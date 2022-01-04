import React from "react";
import logo from "./logo-footer.png";
import "./App.css";

function App() {
  return (
    <div class="body">
      <footer>
        <div class="container">
          <div class="sec logo">
            <a href="#">
              <img src={logo} class="logo2" alt="Logo" />
            </a>
            <p>
              Ladidapp is a design studio founded in London and expanded our
              services, and offering solutions Worldwide.
            </p>
            <ul class="sci">
              <li>
                <a href="#" class="fa fa-twitter"></a>
              </li>
              <li>
                <a href="#" class="fa fa-facebook"></a>
              </li>
              <li>
                <a href="#" class="fa fa-instagram"></a>
              </li>
            </ul>
          </div>
          <div class="sec ImportantLinks">
            <h2>Important Links</h2>
            <ul>
              <li>
                <span>-</span>
                <a href="#">About Us</a>
              </li>
              <li>
                <span>-</span>
                <a href="#">Compare Services</a>
              </li>
              <li>
                <span>-</span>
                <a href="#">Our Mission</a>
              </li>
              <li>
                <span>-</span>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div class="sec ImportantLinks">
            <h2>Learning Lessons</h2>
            <ul>
              <li>
                <span>-</span>
                <a href="#">Tutorials</a>
              </li>
              <li>
                <span>-</span>
                <a href="#">Compare Services</a>
              </li>
              <li>
                <span>-</span>
                <a href="#">How It Works</a>
              </li>
              <li>
                <span>-</span>
                <a href="#">F.A.Q</a>
              </li>
            </ul>
          </div>
          <div class="sec ImportantLinks">
            <h2>Our Policy</h2>
            <ul>
              <li>
                <span>-</span>
                <a href="#">Application Security</a>
              </li>
              <li>
                <span>-</span>
                <a href="#">Software Principles</a>
              </li>
              <li>
                <span>-</span>
                <a href="#">Responsible Supply Chain</a>
              </li>
              <li>
                <span>-</span>
                <a href="#">Software Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div class="copyrightText">
        <hr />
        <p>2021 © Zytheme.All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default App;
