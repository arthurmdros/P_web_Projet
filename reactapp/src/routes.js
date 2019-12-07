import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Customer from './pages/customer';
import New_Customer from './pages/new_customer';
import User from './pages/user';
import Funcionario from './pages/funcionario';
import FuncionarioDetalhar from './pages/funcionario-detalhar';
import Novo_Funcionario from './pages/novo_funcionario';
import Provider from './pages/provider';
import ProviderDetail from './pages/provider-detail';
import New_Provider from './pages/new_provider'
import Product from './pages/product';
import ProductDetail from './pages/product-detail';
import New_Product from './pages/new_product'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/api/customers" component={Main} />
            <Route path="/api/customers/:id" component={Customer} />
            <Route path="/api/new_customer" component={New_Customer} />
            <Route path="/api/user" component={User} />
            <Route exact path="/api/funcionario" component={Funcionario} />
            <Route path="/api/funcionario/:id" component={FuncionarioDetalhar} />
            <Route path="/api/novo_funcionario" component={Novo_Funcionario} />
            <Route exact path="/api/providers" component={Provider} />
            <Route path="/api/providers/:id" component={ProviderDetail} />
            <Route path="/api/new_provider" component={New_Provider} />
            <Route exact path="/api/products" component={Product} />
            <Route path="/api/products/:id" component={ProductDetail} />
            <Route path="/api/new_product" component={New_Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;