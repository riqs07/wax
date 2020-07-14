import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'


import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import AlbumsPage from './components/pages/AlbumsPage';

import ArtistState from './contex/artists/ArtistState'
import AlbumState from './contex/album/AlbumState'
import ArtistsPage from './components/pages/ArtistsPage'
import PageNotFound from './components/pages/PageNotFound';
import './App.scss';


function App() {

  
  return (
   
<AlbumState>
  <ArtistState>
<Router>
      <Fragment>
      <Navbar/>
    <div classname = "container" >


    <Switch>

       <Route exact path = '/about' component = {About}/>
       <Route exact path = '/' component = {Home}/>
       <Route exact path = '/artists' component = {ArtistsPage}/>
       <Route exact path = '/albums' component = {AlbumsPage}/>
       <Route render={PageNotFound} />

    </Switch>

    </div>

      </Fragment>
</Router>
</ArtistState>
</AlbumState>
  );
}

export default App;
