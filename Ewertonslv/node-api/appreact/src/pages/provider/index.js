import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';

export default class Provider extends Component{
    state = {
        provider: {},
    };

    async componentDidMount(){
        const {id} = this.props.match.params;
        const response = await api.get(`/providers/${id}`);

        this.setState({provider: response.data });
    }

        render(){

            const {provider} = this.state;

        return(
            <div className="provider-info">
        <h1>{provider.title}</h1>
        <p>{provider.description}</p>

        <p>URL: <a href={provider.url}>{provider.url}</a> 
        </p>
            </div>
        )
    }
}