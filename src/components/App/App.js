import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import './App.css';
import Main from '../Main/Main';
import Saved from '../Saved/Saved';

const App = () => {
    return (
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
    );
}

export default App;