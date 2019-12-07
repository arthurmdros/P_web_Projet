import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class New_Provider extends Component{
    constructor(){
        super();
        this.state = {
            provider: {},
            nome :'',
            dataDeCriacao: '',
            cnpj: '',
        };
    }

    handleChange = event => {
        this.setState({[event.target.name] : event.target.value}, ()=>{
            if (this.state.nome != '')
                this.state.provider.nome = this.state.nome;
            if (this.state.dataDeCriacao != '')
                this.state.provider.dataDeCriacao = this.state.dataDeCriacao;
            if (this.state.cnpj != '')
                this.state.provider.cnpj = this.state.cnpj;
            console.log(this.state.provider);
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const provider = this.state.provider;

        //const { id } = this.props.match.params;

        api.post('providers/', provider);

        alert('Fornecedor criado com sucesso.');
    }


    render(){
        const { provider } = this.state;

        return (
            <div className="provider-info">
                <form onSubmit={this.handleSubmit}>
                <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>Nome:</strong></p>
                                </td>
                                <td>
                                    <input name="nome" className="provider-name" onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>Data de Criação:</strong></p>
                                </td>
                                <td>
                                    <input name="dataDeCriacao" className="provider-birthday" onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>CNPJ:</strong></p>
                                </td>
                                <td>
                                    <input name="cnpj" className="provider-cnpj" onChange={this.handleChange} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="actions">
                        <Link to={`/api/providers`}>Voltar</Link>
                        <button type="submit" onClick={this.handleChange}>
                            Criar
                        </button>
                    </div>
                </form>
                 
            </div>
        );
    }
}