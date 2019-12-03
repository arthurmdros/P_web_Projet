import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Customer from './pages/customer';
import New_Customer from './pages/new_customer';
import User from './pages/user';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/api/customers" component={Main} />
            <Route path="/api/customers/:id" component={Customer} />
            <Route path="/api/new_customer" component={New_Customer} />
            <Route path="/api/user" component={User} />
        </Switch>
    </BrowserRouter>
);

export default Routes;