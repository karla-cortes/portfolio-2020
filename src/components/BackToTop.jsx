import React, { Component } from 'react';


class BackToTop extends Component {
    state = {  }
       goUp() {
            window.scrollTo({  top: 0,
                behavior: 'smooth'});   
       }
    render() { 
        return ( 
            <div onClick={this.goUp} className="moveUp">
           
           
            <label htmlFor="animation2">
            <p>Back to Top</p>
              <div className="arrow"></div>
            </label>
          
            </div>
         );
    }
}
 
export default BackToTop;