import React, { Component } from "react";
import { Link } from "react-router-dom";
import Data from "../data.json";
import Fade from 'react-reveal/Fade';


class Projects extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
      <div className="sortable">
      <div className="sortable-media">
      <div className="projects-main-container">   
      <div className="projects-container">
         <Fade bottom duration={1000}>
        {Data.map((post) => {
          return (
            <div className={`project-image-container project-${post.id}`} key={post.id}>
              <Link to={`/info/${post.id}`}>
                <div className="project-image" key={post.id}>
                  <img
                    src={post.thumbnail} 
                    alt={`${post.id}`}
                  />
                </div>
                <div className="overlay">
                  <p>{post.title}</p>
                </div>
              </Link>
            </div>
          );
        })}
        </Fade>
      </div>
      </div>
      </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Projects;
