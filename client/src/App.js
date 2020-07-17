import React,{Fragment} from 'react';
import styled from "styled-components";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.scss';


import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';

import AlbumsPage from './components/pages/AlbumsPage';
import SongsPage from './components/pages/SongsPage';
import ArtistsPage from './components/pages/ArtistsPage'
import PageNotFound from './components/pages/PageNotFound';

import ArtistState from './contex/artists/ArtistState'
import AlbumState from './contex/album/AlbumState'


const Wrapper = styled.div`
	padding: 0 2rem;
`;

function App() {

  
  return (
   
<AlbumState>
  <ArtistState>
<Router>
      <Fragment>
      <Navbar/>
    <Wrapper>


    <Switch>

       <Route exact path = '/about' component = {About}/>
       <Route exact path = '/' component = {Home}/>
       <Route exact path = '/artists' component = {ArtistsPage}/>
       <Route exact path = '/albums' component = {AlbumsPage}/>
       <Route exact path = '/songs' component = {SongsPage}/>
       <Route render={PageNotFound} />

    </Switch>

    </Wrapper>

      </Fragment>
</Router>
</ArtistState>
</AlbumState>
  );
}

export default App;
