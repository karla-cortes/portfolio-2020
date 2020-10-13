import React, { Component } from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Fade from 'react-reveal/Fade';
import Data from "../data.json";
import Footer from "./Footer";

class Info extends Component {
  state = {
    post: null,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    return (
     Data.map((post) => {
        let id = parseInt(this.props.match.params.post_id);
        let datalength = Data.length;
        if (post.id === id) {
          return (
            <React.Fragment>
              <Navigation />
              <div className="container">
              <ScrollToTop />
                  <div className="project-bio">
                 
                  <div className="bio">
                   <video controls width="100%" height="500" className="bio-video" poster="/images/vice-media.jpg" style={{ display: post.video ? 'block' : 'none'}}>
                   <source src={`../${post.video}`}type="video/mp4">
                   </source>
                   </video>
                  <img
                    src={`../${post.thumbnail}`}
                    style={{ display: post.video ? 'none' : 'block'}}
                    className={ post.video ? "project-image-video-hero": "project-image-hero"}
                    id="project-top"
                    alt=""
                  />
                  <div className="project-stats">
                  <h1>{post.title}</h1>
                  <p>{post.info}
</p>
<div className="project-info">
                  <h4>Client</h4>
                  <p>{post.client}</p>
                  <h4>Technologies Used</h4>
                  <p>{post.technology}</p>
                  <button><a href={post.link} target="_blank">View Project</a></button>
                  </div>
</div>

</div>

                  <div className="portfolio-images">
                
                  <iframe src={post.banners[0]} width="500" height="417" style={{ display: post.banners[0] ? 'block' : 'none'}}  frameBorder="0" className="port-img frame"></iframe>

                  <iframe src={post.banners[1]} width="500" height="417" style={{ display: post.banners[1] ? 'block' : 'none'}}  frameBorder="0" className="port-img frame"></iframe>

                  <iframe src={post.banners[2]} width="500" height="417" style={{ display: post.banners[2] ? 'block' : 'none'}}  frameBorder="0" className="port-img frame"></iframe>
              
                  <img src={post.gallery[0]} style={{ display: post.gallery[0] ? 'block' : 'none'}} alt="" className="port-img" />
                  <img src={post.gallery[1]} style={{ display: post.gallery[1] ? 'block' : 'none'}} alt="" className="port-img" />
                  <img src={post.gallery[2]} style={{ display: post.gallery[2] ? 'block' : 'none'}} alt="" className="port-img" />
                  </div>
                 
                </div>
                <div className="previous-next">
                  <Link to={post.id > 1 ? `/info/${post.id - 1}` : `/info/${datalength}`} className="previous">
                  Previous Project
                  </Link>
                  <Link to={post.id < datalength ? `/info/${post.id + 1}` : `/info/1`} className="next">
                  Next Project
                  </Link>
                </div>
                
              </div>
              <Footer />
            </React.Fragment>
          );
        }
      })
    
    )
  }
}

export default Info;
