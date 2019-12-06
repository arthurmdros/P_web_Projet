import React from "react";
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import Main from "./pages/main";
import Funcionario from "./pages/funcionario";
import Customer from './pages/customer';
import New_Customer from './pages/new_customer';
import User from './pages/user';
import Mainfuncionarios from './pages/Mainfuncionarios';
import NovoFuncionario from './pages/novofuncionario';

const Routes = () =>( 
<BrowserRouter>
    <Switch>

            <Route exact path="/customers" component={Main} />
            <Route path="/customers/:id" component={Customer} />
            <Route path="/new_customer" component={New_Customer} />
            <Route path="/user" component={User} />

        <Route exact path="/funcionarios" component={Mainfuncionarios} />
        <Route path="/funcionarios/:id" component={Funcionario}/>
        <Route path="/novofuncionario" component={NovoFuncionario} />
    </Switch>
</BrowserRouter>
);
export default Routes;
//<Route exact path="/" component={Main}/>