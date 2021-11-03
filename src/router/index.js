import React from 'react';
import NavBar from '../components/NavBar';
import Show from '../pages/Show';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import routes from './routes';

const AppRouter = () => {
	return (
		<Router>
			<NavBar routes={routes} />
			<h1>📚My Bookmarks📚</h1>
			<Switch>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						exact
						component={() => <Component page={key} />}
					></Route>
				))}
				<Route
					path={'/:id'}
					render={routerProps => <Show {...routerProps} />}
				></Route>
			</Switch>
		</Router>
	);
};

export default AppRouter;
