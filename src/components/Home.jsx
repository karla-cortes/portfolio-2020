import React from 'react';
import Navigation from './Navigation';
import Projects from './Projects';
import Footer from './Footer';

const Home = () => {
    return ( 
        <React.Fragment>
        <Navigation />
        <Projects />
        <Footer /> 
        </React.Fragment>
     );
}
 
export default Home;