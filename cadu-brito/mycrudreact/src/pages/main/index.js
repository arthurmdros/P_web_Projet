import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import "./styles.css";

export default class Main extends Component {
    state = {
        funcionarios: [],
        funcionarioInfo: {},
        page: 1
    };

    componentDidMount() {
        this.loadFuncionarios();
    }

    loadFuncionarios = async (page = 1) => {
        const response = await api.get(`/funcionario/?page=${page}`);

        const { docs, ...funcionarioInfo} = response.data;

        this.setState({ funcionarios: docs, funcionarioInfo, page });
    };

    prevPage = () => {
        const { page, funcionarioInfo } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadFuncionarios(pageNumber);
    };

    nextPage = () => {

        const { page, funcionarioInfo } = this.state;

        if (page === funcionarioInfo.pages) return;

        const pageNumber = page + 1;

        this.loadFuncionarios(pageNumber);
    };

    render() {

        const { funcionarios, funcionarioInfo, page } = this.state;

        return (
            <div className="funcionario-list">
                {funcionarios.map(funcionario => (
                    <article key={funcionario._id}>
                           <strong>{funcionario.cpf}</strong> 
                            <p>{funcionario.nome}</p>

                            < Link to={`/funcionario/${funcionario._id}`}>Acessar</Link>
                    </article>

                ))}
            <div className="actions">
                <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                <button disabled={page === funcionarioInfo.pages} onClick={this.nextPage}>Proximo</button>
            </div>

            </div>            
        );
    }
}