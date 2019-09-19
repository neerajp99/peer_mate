import React, { Component } from 'react'
import randomImage from './topo-services.png'
import randomImage2 from './desktop-cubes-stacked.png'
import Navbar from './Navbar'

class Homepage extends Component {
  render () {
    return (
      <div className="landing">
        <hr className="landinghr" />
        <Navbar />
        <div className="col-md-6">
          <h1 class = "homeText">Find a peer for course related help and freelance jobs.</h1>
          <br />
          <div className="homeButtons">
            <button className="homeButton">I'm a mentor</button>
            <button className="homeButton">I'm a mentee</button>
          </div>

        </div>
        <img src={randomImage} alt="random" className="randomImage"/>
        <img src={randomImage2} alt="random" className="randomImage2"/>

      </div>
    )
  }
}

export default Homepage;
