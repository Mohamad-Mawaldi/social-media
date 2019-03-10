import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Switch , Route} from 'react-router-dom'
import NavBar from '../Component/layout/navBar';
import Post from '../Component/post/postItem';
import Footer from '../Component/layout/footer';
import DashBoard from '../Component/dashboard/dashBoard';
import AboutMe from '../Component/layout/aboutMe';





class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path = "/" component= {DashBoard}/>
            <Route path = "/Post/:id" component= {Post}/>
            <Route path = "/AboutMe" component= {AboutMe}/>
            <DashBoard/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
