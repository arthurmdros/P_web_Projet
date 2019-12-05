import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';
export default class Funcionario extends Component{
    constructor(){
        super();
        this.state = {
            funcionario: {},
            cpf: '',
            nome :'',
            url: '',
        };
    }
    
    deleteFuncionario = event => {
        event.preventDefault();

        const { id } = this.props.match.params;

        api.delete(`/funcionarios/${id}`);

        alert('sucesso!');
    }

    handleChange = event => {
        this.setState({[event.target.name] : event.target.value}, ()=>{
            if (this.state.cpf != '')
                this.state.funcionario.cpf = this.state.cpf;
            if (this.state.nome != '')
                this.state.funcionario.nome = this.state.nome;
            if (this.state.url != '')
                this.state.funcionario.url = this.state.url
            console.log(this.state.funcionario);
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const funcionario = this.state.funcionario;
        
        const { id } = this.props.match.params;

        api.put(`/funcionarios/${id}`, funcionario);

        alert('atualizado com sucesso!');
    }

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/funcionarios/${id}`);

        this.setState({ funcionario: response.data });
    }

    render(){
        const { funcionario } = this.state;

        return (
            <div className="funcionario-info">
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>CPF:</strong></p>
                                </td>
                                <td>
                                    <input name="cpf" className="funcionario-cpf" defaultValue={funcionario.cpf} onChange={this.handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>Nome:</strong></p>
                                </td>
                                <td>
                                    <input name="nome" className="funcionario-name" defaultValue={funcionario.nome} onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>URL:</strong></p>
                                </td>
                                <td>
                                    <input name="url" className="funcionario-cpf" defaultValue={funcionario.cpf} onChange={this.handleChange} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="actions">
                        <Link to={`/funcionarios`}>Voltar</Link>
                        <button type="submit" onClick={this.deleteFuncionario}>
                            Deletar
                        </button>
                        <button type="submit" onClick={this.handleChange}>
                            Alterar
                        </button>
                    </div>
                </form>
                 
            </div>
        );
    }
}