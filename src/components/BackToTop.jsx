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
           
           
            <label for="animation2">
            <p>Back to Top</p>
              <div class="arrow"></div>
            </label>
          
            </div>
         );
    }
}
 
export default BackToTop;