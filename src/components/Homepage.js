import React, { Component } from "react";
import randomImage from "./topo-services.png";
import randomImage2 from "./desktop-cubes-stacked.png";
import Navbar from "./Navbar";

class Homepage extends Component {
  render() {
    return (
      <div className="landing">
        <hr className="landinghr" />
        <Navbar />
        <div className="col-md-6">
          <h1 class="homeText">
            Get academic help from the best in your course.
            <br />
            Or, make money helping your peers succeed.
          </h1>
          <br />
          <div className="homeButtons">
            <ul>
              <li>
                <a
                  className="homeButton"
                  href="https://forms.gle/gjfczWfqEVGYVTYR6"
                >
                  I want to help
                </a>
              </li>
              <li>
                <a
                  className="homeButton"
                  href="https://forms.gle/9ZvT2UjeQE6eJkJs9"
                >
                  I need help
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img src={randomImage} alt="random" className="randomImage" />
        <img src={randomImage2} alt="random" className="randomImage2" />
      </div>
    );
  }
}

export default Homepage;
