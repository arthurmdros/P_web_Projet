import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class New_Provider extends Component{
    constructor(){
        super();
        this.state = {
            provider: {},
            nome :'',
            cnpj: '',
            endereco: '',
            telefone: '',
        };
    }

    handleChange = event => {
        this.setState({[event.target.name] : event.target.value}, ()=>{
            if (this.state.nome != '')
                this.state.provider.nome = this.state.nome;
            if (this.state.cnpj != '')
                this.state.provider.cnpj = this.state.cnpj;
            if (this.state.endereco != '')
            this.state.provider.endereco = this.state.endereco;
            if (this.state.telefone != '')
            this.state.provider.telefone = this.state.telefone;
          
            console.log(this.state.provider);
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const provider = this.state.provider;

      

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
                                    <input name="nome" className="provider" onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>cnpj:</strong></p>
                                </td>
                                <td>
                                    <input name="cnpj" className="provider" onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>endereco:</strong></p>
                                </td>
                                <td>
                                    <input name="endereco" className="provider" onChange={this.handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>telefone:</strong></p>
                                </td>
                                <td>
                                    <input name="telefone" className="provider" onChange={this.handleChange} />
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