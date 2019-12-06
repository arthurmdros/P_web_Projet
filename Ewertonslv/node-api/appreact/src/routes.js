import React from "react";
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import Main from "./pages/main";

import Provider from './pages/provider';


import New_Provider from './pages/new_provider';
const Routes = () =>( 
    <BrowserRouter>
        <Switch>

            <Route exact path="/api/providers" component={Main} />
            <Route path="/api/providers/:id" component={Provider} />
            <Route path="/api/new_providers" component={New_Provider} />
            
        </Switch>
    </BrowserRouter>
    );

export default Routes;
