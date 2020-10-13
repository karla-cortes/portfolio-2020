import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

class Navigation extends Component {
  constructor() {
    super();

    this.state = {  
      isActive: false,
      width: 0
    }

    window.addEventListener("resize", this.update);
  }
    componentDidMount() {
      this.update();
    }

    update = () => {
      this.setState({width: window.innerWidth});
      if(this.state.width >= 1031) {
        this.setState({isActive: false});
      }
    };

    toggleClass() {
      this.setState({isActive: !this.state.isActive});
    }

    render() { 
        return ( 
            <header className="main-header">
            <div className={this.state.isActive ? "container active" : "container"} id="nav">
              <div className="nav">
                <NavLink to="/" className="logo" ><img src="https://via.placeholder.com/100x50" className={this.state.isActive ? "logo-image active" : "logo-image"} alt="Karla Cortes"/></NavLink>
                <div className={this.state.isActive ? "main-container active" : "main-container"} id="button" onClick={() => this.toggleClass()}>
                  <div className="line-one"></div>
                  <div className="line-two"></div>
                  <div className="line-three"></div>
                </div>
               
                <ul className={this.state.isActive ? "desktop-menu active" : "desktop-menu"} id="js-menu" >
                <div class="bg-active">
                  </div>
                <Fade up duration={2000}>
                  <li><NavLink to="/" className="nav-links">Home</NavLink></li>
                  <li><NavLink to="/about" className="nav-links">About</NavLink></li>
                  <li><NavLink to="/" className="nav-links">Projects</NavLink></li>
                  <li><a href="KarlaCortes-Resume-2020.pdf" className="nav-links" target="_blank">Resume</a></li>
                  <li><NavLink to="/about" className="nav-links">Connect</NavLink></li>
                  </Fade>
                </ul>
              </div>
            </div>
          </header>
         );
    }
}
 
export default Navigation;