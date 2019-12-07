import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './style.css';

export default class Customer extends Component{
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

    deleteProvider = event => {
        event.preventDefault();

        const { id } = this.props.match.params;

        api.delete(`/provider/${id}`);

        alert('Fornecedor deletado com sucesso!');
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

        const customer = this.state.provider;
        
        const { id } = this.props.match.params;

        api.put(`/provider/${id}`, customer);

        alert('Fornecedor atualizado com sucesso!');
    }

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/providers/${id}`);

        this.setState({ customer: response.data });
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
                                    <input name="nome" className="provider" defaultValue={provider.nome} onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>cnpj:</strong></p>
                                </td>
                                <td>
                                    <input name="cnpj" className="provider" defaultValue={provider.cnpj} onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>endereco:</strong></p>
                                </td>
                                <td>
                                    <input name="endereco" className="provider" defaultValue={provider.endereco} onChange={this.handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>telefone:</strong></p>
                                </td>
                                <td>
                                    <input name="telefone" className="provider" defaultValue={provider.telefone} onChange={this.handleChange} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="actions">
                        <Link to={`/api/providers`}>Voltar</Link>
                        <button type="submit" onClick={this.deleteProvider}>
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