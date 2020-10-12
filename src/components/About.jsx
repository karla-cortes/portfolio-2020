import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Navigation from './Navigation';
import Footer from './Footer';


class About extends Component {
    state = {  }

    componentDidMount() {
      window.scrollTo(0, 0);
    }
  
    render() { 
        return ( 
                <React.Fragment>
                <Navigation />
                <div className="aboutme-container">
                  <div className="about-skills-container">
                    <div className="aboutme-bio">
                    <Fade up duration={2000}>
                      <div>
                    <h1>Who I Am</h1>
                    <p>I am a 25-year old Cretive Developer from the Greater Boston area currently residing in Miami, FL. My passion is combining the elements of design with technology and problem-solving.</p><br></br>

                    <p>I am a 25-year old Cretive Developer from the Greater Boston area currently residing in Miami, FL. My passion is combining the elements of design with technology and problem-solving</p>

                    <button>
                      <a href="mailto:kmcortes7@gmail.com">Talk to Me</a>
                    </button>
                    </div>
                  
                    <img
                    src="images/me.jpg"
                    width="500"
                    height="400"
                    className="me"
                    alt=""
                  />  
                
                  </Fade>
                    </div>
                  

                  
                  <div className="skills">
                  <Fade up duration={2000}>
                  <h1>Skills</h1>
                  <div className="skills-container">
                    <div className="tech-skills">
                    <h2>Technology</h2>
                    <ul>
                    <li>HTML</li>
                    <li>CSS/SCSS</li>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>Salesforce Marketing Cloud</li>
                    <li>Salesforce Email Studio</li>
                    <li>Wordpress</li>
                    <li>Squarespace Template Development</li>
                    <li>Google Web Design - HTML5 Digital Banners</li>
                    </ul>
                    </div>
                    <div className="design-skills">
                    <h2>Design</h2>
                    <ul>
                    <li>Sketch</li>
                    <li>Adobe XD</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe After Effects</li>
                    <li>Adobe Illustrator</li>
                    <li>Procreate</li>
                    </ul>
                    </div>
                    </div>
                    </Fade>
                  </div>
                  </div>
                  <div className="barcode-container">
<img
                    src="images/barcode.png"
                    className="bar-code"
                    alt="" 
                  />
</div>
                </div>
                <Footer />
                </React.Fragment>
                
        )
    }
}
 
export default About;