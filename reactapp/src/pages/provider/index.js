import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';

import { Link } from 'react-router-dom';

export default class Provider extends Component {
    state = {
        providers: [],
        providerInfo: {},
        page: 1,
    }

    componentDidMount(){
        this.loadProviders();
    }

    loadProviders = async ( page = 1 ) => {
        const response = await api.get(`/providers?page=${page}`);

        const { docs, ... providerInfo } = response.data;

        this.setState({ providers: docs, providerInfo, page });
    }

    nextPage = () => {
        const { page, providerInfo } = this.state;

        if (page === providerInfo.pages) return;

        const pageNumber = page+1;
        
        this.loadProviders(pageNumber);
    };
    prevPage = () => {
        const { page, providerInfo } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProviders(pageNumber);
    };

    render(){
        const {providers, page, providerInfo} = this.state;

        return (
            <div className="provider-list">
                {providers.map(provider => (
                    <article key={provider._id}>
                        <p><strong>Nome do fornecedor:</strong> {provider.nome}</p>
                        <p><strong>Data de criação:</strong> {provider.dataDeCriacao}</p>
                        <Link to={`/api/providers/${provider._id}`}>Consultar</Link>
                        <br /><br />
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>
                        Anterior
                    </button>
                    <Link to={`/api/new_provider`}>Novo fornecedor</Link>
                    <button disabled={page === providerInfo.pages} onClick={this.nextPage}>
                        Próxima
                    </button>
                </div>
            </div>
        );  
    }
}