import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';

import { Link } from 'react-router-dom';

export default class Main extends Component {
    state = {
        customers: [],
        customerInfo: {},
        page: 1,
    }

    componentDidMount(){
        this.loadCustomers();
    }

    loadCustomers = async ( page = 1 ) => {
        const response = await api.get(`/customers?page=${page}`);

        const { docs, ... customerInfo } = response.data;

        this.setState({ customers: docs, customerInfo, page });
    }

    nextPage = () => {
        const { page, customerInfo } = this.state;

        if (page === customerInfo.pages) return;

        const pageNumber = page+1;
        
        this.loadCustomers(pageNumber);
    };
    prevPage = () => {
        const { page, customerInfo } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadCustomers(pageNumber);
    };

    render(){
        const {customers, page, customerInfo} = this.state;

        return (
            <div className="customer-list">
                {customers.map(customer => (
                    <article key={customer._id}>
                        <p><strong>Nome do cliente:</strong> {customer.nome}</p>
                        <p><strong>Data de nascimento:</strong> {customer.dataDeNascimento}</p>
                        <p><strong>Sexo:</strong> '{customer.sexo}'</p>
                        <Link to={`/api/customers/${customer._id}`}>Consultar</Link>
                        <br /><br />
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>
                        Anterior
                    </button>
                    <Link to={`/api/new_customer`}>Novo cliente</Link>
                    <button disabled={page === customerInfo.pages} onClick={this.nextPage}>
                        Próxima
                    </button>
                </div>
            </div>
        );  
    }
}