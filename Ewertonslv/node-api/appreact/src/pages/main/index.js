import React, { Component } from "react";
import api from "../../services/api";
import {Link} from 'react-router-dom';

import './styles.css';

export default class Main extends Component {
    state = {
        providers: [],
        providerInfo: {},
        page: 1,
    }

    componentDidMount(){
        this.loadProviders();
    }
    loadProviders = async (page = 1) => {
        const response = await api.get(`/providers?page=${page}`);
        
        const { docs, ...providerInfo } = response.data;

        this.setState({ providers: docs, providerInfo, page});
    };

    prevPage = () => {
        const {page, providerInfo} = this.state; 

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProviders(pageNumber);
    };

    nextPage = () => {
        const {page, providerInfo} = this.state;
        
        if (page === providerInfo.pages) return;
        
        const pageNumber = page + 1;

        this.loadProviders(pageNumber);
    };

    render(){
        const { providers, page, providerInfo } = this.state;

    return (
        <div className="provider-list">
            {providers.map(provider => (
              <article key={provider._id}>
                  <strong>{provider.title}</strong>
            <p>{provider.description}</p>
            
            <Link to={`/providers/${provider._id}`}>Acessar</Link>
              </article>
            ))}
            <div className= "actions">
                <button disabled={page === 1} onClick ={this.prevPage}>Anterior</button>
                <button disabled={page === providerInfo.pages} onClick ={this.nextPage}>Proximo</button>
            </div>
        </div>
    );
    }

}