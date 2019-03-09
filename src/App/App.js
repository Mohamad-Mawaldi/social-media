import React, { Component } from 'react';
import './App.css';
import NavBar from '../Component/layout/navBar';
import Footer from '../Component/layout/footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Footer/>



      </div>
    );
  }
}

export default App;
