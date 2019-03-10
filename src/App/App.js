import React, { Component } from 'react';
import './App.css';
import NavBar from '../Component/layout/navBar';
import Footer from '../Component/layout/footer';
import DashBoard from '../Component/dashboard/dashBoard';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <DashBoard/>
        <Footer/>



      </div>
    );
  }
}

export default App;
