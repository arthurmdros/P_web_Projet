import React, { Component } from "react";
import api from '../../services/api';
import {Link} from 'react-router-dom';
import './styles.css'

export default class Funcionario extends Component {
    state = {
        funcionario: {}
    };

    async componentDidMount(){
        const { id } = this.props.match.params;
         
        const response = await api.get(`/funcionario/${id}`);

        this.setState({ funcionario: response.data});
    }

    render() {
        const { funcionario } = this.state;
 
       return (
            <div className="funcionario-info">
                <h1>{funcionario.cpf}</h1>
                <p>{funcionario.nome}</p>   
            </div>
        );
    }
}