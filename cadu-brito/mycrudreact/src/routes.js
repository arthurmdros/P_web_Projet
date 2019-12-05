import React from "react";
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import Main from "./pages/main";
import Funcionario from "./pages/funcionario";

const Routes = () =>( 
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/funcionarios/:id" component={Funcionario}/>
    </Switch>
</BrowserRouter>
);
export default Routes;