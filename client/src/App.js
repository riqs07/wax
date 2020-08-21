import React, { Fragment } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/routing/PrivateRoute'
import "./App.scss";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import Navbar from "./components/layout/Navbar";
import Alerts from "./components/layout/Alerts";
import Discover from "./components/pages/Discover";
import Home from "./components/pages/Home";

import AlbumsPage from "./components/pages/AlbumsPage";
import ArtistsPage from "./components/pages/ArtistsPage";
import PageNotFound from "./components/pages/PageNotFound";

import ArtistState from "./contex/artists/ArtistState";
import AlbumState from "./contex/album/AlbumState";
import AuthState from "./contex/auth/AuthState";
import AlertState from "./contex/alert/AlertState";
import UserState from "./contex/users/UserState";

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
			<UserState>
          <AlertState>

					<Router>
						<Fragment>
							<Navbar />
							<Wrapper>
                <Alerts/>
								<Switch>
									<PrivateRoute exact path="/discover" component={Discover} />
									<PrivateRoute exact path="/home" component={Home} />
									<PrivateRoute exact path="/artists" component={ArtistsPage} />
									<PrivateRoute exact path="/albums" component={AlbumsPage} />
									<Route exact path="/register" component={Register} />
									<Route exact path="/login" component={Login} />
									<Route render={PageNotFound} />
								</Switch>
							</Wrapper>
						</Fragment>
					</Router>
          </AlertState>
			</UserState>
				</AlbumState>
			</ArtistState>
		</AuthState>
	);
}
export default App;
