import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class Novo_Funcionario extends Component{
    constructor(){
        super();
        this.state = {
            funcionario : {},
            nome :'',
            dataDeNascimento: '',
            cpf: '',
            sexo: '',
        };
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

        //const { id } = this.props.match.params;

        api.post('funcionario/', funcionario);

        alert('Funcionário criado com sucesso.');
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
                                    <input name="nome" className="funcionario-name" onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>Data de Nascimento:</strong></p>
                                </td>
                                <td>
                                    <input name="dataDeNascimento" className="funcionario-birthday" onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>Sexo:</strong></p>
                                </td>
                                <td>
                                    <input name="sexo" className="funcionario-sex" onChange={this.handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>CPF:</strong></p>
                                </td>
                                <td>
                                    <input name="cpf" className="funcionario-cpf" onChange={this.handleChange} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="actions">
                        <Link to={`/api/funcionario`}>Voltar</Link>
                        <button type="submit" onClick={this.handleChange}>
                            Criar
                        </button>
                    </div>
                </form>
                 
            </div>
        );
    }
}