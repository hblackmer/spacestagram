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
import Saved from '../Saved/Saved';
import Navigation from '../Navigation/Navigation';

const App = () => {
    return (
        <Fragment>
            <Navigation />
            <Router className="App">
                <Switch>
                    <Route path="/" exact>
                        <Main />
                    </Route>
                    <Route path="/saved" exact>
                        <Saved />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </Router>
        </Fragment>
    );
}

export default App;