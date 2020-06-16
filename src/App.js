import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Route } from 'react-router-dom';

import './App.css';
import Faq from './Faq/Faq';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
          <Route exact={true} path="/" Component={Home}/>
          <Route path="/faq" Component={Faq} />
        <Footer />
        <Faq/>

      </div>
    );
  }
}

export default App;
