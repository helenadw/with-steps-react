// routes

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
// import PrivateRoute from './PrivateRoute';
import SavingTimeline from './SavingTimeline/SavingTimeline';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/saving-timeline" component={SavingTimeline} />
                {/* <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/profile" component={Profile} /> */}
            </Switch>
        </Router>
    );
};

export default Routes;