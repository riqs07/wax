import React, { Fragment } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import Navbar from "./components/layout/Navbar";
import Alerts from "./components/layout/Alerts";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

import AlbumsPage from "./components/pages/AlbumsPage";
import SongsPage from "./components/pages/SongsPage";
import ArtistsPage from "./components/pages/ArtistsPage";
import PageNotFound from "./components/pages/PageNotFound";

import ArtistState from "./contex/artists/ArtistState";
import AlbumState from "./contex/album/AlbumState";
import AuthState from "./contex/auth/AuthState";
import AlertState from "./contex/alert/AlertState";

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
									<Route exact path="/about" component={About} />
									<Route exact path="/" component={Home} />
									<Route exact path="/artists" component={ArtistsPage} />
									<Route exact path="/albums" component={AlbumsPage} />
									<Route exact path="/songs" component={SongsPage} />
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
