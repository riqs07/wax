import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'


import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Albums from './components/pages/AlbumsPage';

import AlbumState from './contex/album/AlbumState'

import './App.css';

function App() {
  return (
   
<AlbumState>
<Router>
      <Fragment>
      <Navbar/>
    <div classname = "container" >


    <Switch>

       <Route exact path = '/about' component = {About}/>
       <Route exact path = '/' component = {Home}/>
       <Route exact path = '/test' component = {Home}/>

    </Switch>

    </div>

      </Fragment>
</Router>
</AlbumState>
  );
}

export default App;
