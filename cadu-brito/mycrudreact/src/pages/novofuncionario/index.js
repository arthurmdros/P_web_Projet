import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class NovoFuncionario extends Component{
    constructor(){
        super();
        this.state = {
            funcionario: {},
            cpf: '',
            nome:'',
            url: '',
        };
    }
    handleChange = event => {
        this.setState({[event.target.name] : event.target.value}, ()=>{
            if (this.state.cpf != '')
            this.state.funcionario.cpf = this.state.cpf;
            if (this.state.nome != '')
                this.state.funcionario.nome = this.state.nome;
            if (this.state.url != '')
                this.state.funcionario.url = this.state.url;
            console.log(this.state.funcionario);
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const funcionario = this.state.funcionario;

        //const { id } = this.props.match.params;

        api.post('funcionario/', funcionario);

        alert('Cliente criado com sucesso.');
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
                             <input name="cpf" className="funcionarior-cpf" onChange={this.handleChange} />
                        </td>
                    </tr>
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
                                <p><strong>URL:</strong></p>
                            </td>
                            <td>
                                <input name="url" className="funcionario-url" onChange={this.handleChange}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="actions">
                    <Link to={`/funcionarios`}>Voltar</Link>
                    <button type="submit" onClick={this.handleChange}>
                        Criar
                    </button>
                </div>
            </form>
             
        </div>
    );
}
}