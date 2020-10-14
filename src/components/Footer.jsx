import React from 'react';
import BackToTop from './BackToTop';


const Footer = () => {
    return (  
       
        <footer>
               <BackToTop/>
        
            <div className="footer-links">
                <p>Designed &#38; Built by Karla Cortes</p>
                <ul>
                    <li><a href="mailto:kmcortes7@gmail.com"><i className="fas fa-at"></i></a></li>
                    <li> <a href="https://www.linkedin.com/in/karla-cortes/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                    <li> <a href="https://codepen.io/karlacortes" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen"></i></a></li>
                    <li>
                    <a href="https://github.com/karla-cortes" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                    <li>
                    <a href="https://vimeo.com/karlacortes" target="_blank" rel="noopener noreferrer"><i className="fab fa-vimeo-v"></i></a></li>
                </ul>
            </div>
          
        </footer>
  
    );
}
 
export default Footer;