import React, { Component } from "react";
import api from '../../services/api';
import {Link} from 'react-router-dom';
import './styles.css'

export default class Funcionario extends Component {
    state = {
        funcionario: [],
        funcionarioInfo: {},
        page: 1,
    }

    componentDidMount(){
        this.loadFuncionario();
    }

    loadFuncionario = async ( page = 1 ) => {
        const response = await api.get(`/funcionario?page=${page}`);

        const { docs, ...funcionarioInfo } = response.data;

        this.setState({ funcionario: docs, funcionarioInfo, page });
    }

    nextPage = () => {
        const { page, funcionarioInfo } = this.state;

        if (page === funcionarioInfo.pages) return;

        const pageNumber = page+1;
        
        this.loadFuncionario(pageNumber);
    };
    prevPage = () => {
        const { page, funcionarioInfo } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadFuncionario(pageNumber);
    };

    render() {
        const {funcionario, page, funcionarioInfo} = this.state;
 
        return (
            <div className="funcionario-list">
                {funcionario.map(funcionario => (
                    <article key={funcionario._id}>
                        <p><strong>Nome do funcionário:</strong> {funcionario.nome}</p>
                        <p><strong>Data de nascimento:</strong> {funcionario.dataDeNascimento}</p>
                        <p><strong>Sexo:</strong> '{funcionario.sexo}'</p>
                        <Link to={`/api/funcionario/${funcionario._id}`}>Consultar</Link>
                        <br /><br />
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>
                        Anterior
                    </button>
                    <Link to={`/api/novo_funcionario`}>Novo funcionario</Link>
                    <button disabled={page === funcionarioInfo.pages} onClick={this.nextPage}>
                        Próxima
                    </button>
                </div>
            </div>
        );
    }
}