import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';

export default class FuncionarioDetalhar extends Component{
    constructor(){
        super();
        this.state = {
            funcionario: {},
            nome :'',
            dataDeNascimento: '',
            cpf: '',
            sexo: '',
        };
    }

    deleteFuncionario = event => {
        event.preventDefault();

        const { id } = this.props.match.params;

        api.delete(`/funcionario/${id}`);

        alert('Funcionario deletado com sucesso!');
    }

    handleChange = event => {
        this.setState({[event.target.name] : event.target.value}, ()=>{
            if (this.state.nome != '')
                this.state.funcionario.nome = this.state.nome;
            if (this.state.dataDeNascimento != '')
                this.state.funcionario.dataDeNascimento = this.state.dataDeNascimento;
            if (this.state.cpf != '')
                this.state.funcionario.cpf = this.state.cpf;
            if (this.state.sexo != '')
                this.state.funcionario.sexo = this.state.sexo;
            console.log(this.state.funcionario);
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const funcionario = this.state.funcionario;
        
        const { id } = this.props.match.params;

        api.put(`/funcionario/${id}`, funcionario);

        alert('Funcionario atualizado com sucesso!');
    }

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/funcionario/${id}`);

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
                                    <p><strong>Nome:</strong></p>
                                </td>
                                <td>
                                    <input name="nome" className="funcionario-name" defaultValue={funcionario.nome} onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>Data de Nascimento:</strong></p>
                                </td>
                                <td>
                                    <input name="dataDeNascimento" className="funcionario-birthday" defaultValue={funcionario.dataDeNascimento} onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>Sexo:</strong></p>
                                </td>
                                <td>
                                    <input name="sexo" className="funcionario-sex" defaultValue={funcionario.sexo} onChange={this.handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>CPF:</strong></p>
                                </td>
                                <td>
                                    <input name="cpf" className="funcionario-cpf" defaultValue={funcionario.cpf} onChange={this.handleChange} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="actions">
                        <Link to={`/api/funcionario`}>Voltar</Link>
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