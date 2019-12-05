import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';

export default class User extends Component {
    constructor(){
        super();
        this.state = {};
    }
    render(){

        return (
            <div className="index-list">
                <div className="actions">
                    <Link to={'/funcionarios'}>Funcionários</Link>
                    <Link to={''}>Fornecedores</Link>
                    <Link to={'/customers'}>Clientes</Link>
                    <Link to={''}>Produtos</Link>
                    <Link to={''}>Vendas</Link>
                </div>
            </div>
        );  
    }
}