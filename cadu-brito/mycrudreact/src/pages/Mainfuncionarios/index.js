import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';

import { Link } from 'react-router-dom';
export default class Main extends Component {
    state = {
        funcionarios: [],
        funcionarioInfo: {},
        page: 1,
    }

    componentDidMount(){
        this.loadFuncionarios();
    }

    loadFuncionarios = async ( page = 1 ) => {
        const response = await api.get(`/funcionarios?page=${page}`);

        const { docs, ... funcionarioInfo } = response.data;

        this.setState({ funcionarios: docs, funcionarioInfo, page });
    }

    nextPage = () => {
        const { page, funcionarioInfo } = this.state;

        if (page === funcionarioInfo.pages) return;

        const pageNumber = page+1;
        
        this.loadFuncionarios(pageNumber);
    };
    prevPage = () => {
        const { page, funcionarioInfo } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadFuncionarios(pageNumber);
    };

    render(){
        const {funcionarios, page, funcionarioInfo} = this.state;

        return (
            <div className="funcionario-list">
                {funcionarios.map(funcionario => (
                    <article key={funcionario._id}>
                        <p><strong>CPF:</strong> '{funcionario.cpf}'</p>
                        <p><strong>Nome do funcionario:</strong> {funcionario.nome}</p>
                        <p><strong>Url:</strong> '{funcionario.url}'</p>
                        <Link to={`/funcionarios/${funcionario._id}`}>Consultar</Link>
                        <br /><br />
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>
                        Anterior
                    </button>
                    <Link to={`/novofuncionario`}>Adiconar oum Funcionario</Link>
                    <button disabled={page === funcionarioInfo.pages} onClick={this.nextPage}>
                        Próxima
                    </button>
                </div>
            </div>
        );  
    }
}
