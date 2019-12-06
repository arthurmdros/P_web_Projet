import React from "react";
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import Main from "./pages/main";
import Provider from './pages/provider';

const Routes = () =>( 
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/providers/:id" component={Provider} />

            
        </Switch>
    </BrowserRouter>
    );

export default Routes;
