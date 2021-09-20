import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home/Home'
import About from './components/About/About'
import CustomNavbar from './components/CustomNavbar/CustomNavbar'
import Footer from './components/Footer/Footer';
import CheckAnt from './components/CheckAnt/CheckAnt'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <CustomNavbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/checkant' component={CheckAnt} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
