import React from 'react';
import BackToTop from './BackToTop';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (  
       
        <footer>
               <BackToTop/>
            
            <div className="footer-links">
                <p>Designed & Built by Karla Cortes</p>
                <ul>
                    <li><a href="mailto:kmcortes7@gmail.com"><i class="fas fa-at"></i></a></li>
                    <li> <a href="https://www.linkedin.com/in/karla-cortes/" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                    <li> <a href="https://codepen.io/karlacortes" target="_blank"><i class="fab fa-codepen"></i></a></li>
                    <li>
                    <a href="https://github.com/karla-cortes" target="_blank"><i class="fab fa-github"></i></a></li>
                    <li>
                    <a href="https://vimeo.com/karlacortes" target="_blank"><i class="fab fa-vimeo-v"></i></a></li>
                </ul>
            </div>
          
        </footer>
  
    );
}
 
export default Footer;