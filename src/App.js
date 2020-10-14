import React from 'react';
import Home from './components/Home';
import Info from './components/Info';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import './stylesheets/styles.scss';
import './stylesheets/App.css';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
   <div>
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/info/:post_id" component={Info}/>
        <Route path="/about" component={About}/>
     </Switch>
     </Router>

   </div>

  );
}

export default App;
