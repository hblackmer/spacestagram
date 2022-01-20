import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from '../Main/Main';
import Favorites from '../Favorites/Favorites';
import Navigation from '../Navigation/Navigation';

const App = () => {
    return (
        <Fragment>
            <Navigation />
            <Router>
                <Switch>
                    <Route path="/spacestagram" exact>
                        <Main />
                    </Route>
                    <Route path="/spacestagram/favorites" exact>
                        <Favorites />
                    </Route>
                    <Redirect to="/spacestagram" />
                </Switch>
            </Router>
        </Fragment>
    );
}

export default App;