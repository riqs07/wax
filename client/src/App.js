import React, { Fragment } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/routing/PrivateRoute'
import "./App.scss";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import Navbar from "./components/layout/Navbar";
import Alerts from "./components/layout/Alerts";
import Explore from "./components/pages/Explore";
import Home from "./components/pages/Home";

import AlbumsPage from "./components/pages/AlbumsPage";
import SongsPage from "./components/pages/SongsPage";
import ArtistsPage from "./components/pages/ArtistsPage";
import PageNotFound from "./components/pages/PageNotFound";

import ArtistState from "./contex/artists/ArtistState";
import AlbumState from "./contex/album/AlbumState";
import AuthState from "./contex/auth/AuthState";
import AlertState from "./contex/alert/AlertState";

import setAuthToken from './utils/setAuthToken'

if(localStorage.token){
	setAuthToken(localStorage.token)
}
const Wrapper = styled.div`
	padding: 0 2rem;
`;

function App() {
	return (
		<AuthState>
			<ArtistState>
				<AlbumState>
          <AlertState>

					<Router>
						<Fragment>
							<Navbar />
							<Wrapper>
                <Alerts/>
								<Switch>
									<Route exact path="/explore" component={Explore} />
									<PrivateRoute exact path="/home" component={Home} />
									<PrivateRoute exact path="/artists" component={ArtistsPage} />
									<PrivateRoute exact path="/albums" component={AlbumsPage} />
									<PrivateRoute exact path="/songs" component={SongsPage} />
									<Route exact path="/register" component={Register} />
									<Route exact path="/login" component={Login} />
									<Route render={PageNotFound} />
								</Switch>
							</Wrapper>
						</Fragment>
					</Router>
          </AlertState>
				</AlbumState>
			</ArtistState>
		</AuthState>
	);
}

export default App;
