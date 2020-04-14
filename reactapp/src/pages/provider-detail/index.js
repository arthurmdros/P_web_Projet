import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';

export default class ProviderDetail extends Component{
    constructor(){
        super();
        this.state = {
            provider: {},
            nome :'',
            dataDeCriacao: '',
            cnpj: '',
        };
    }

    deleteProvider = event => {
        event.preventDefault();

        const { id } = this.props.match.params;

        api.delete(`/providers/${id}`);

        alert('Fornecedor deletado com sucesso!');
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
        
        const { id } = this.props.match.params;

        api.put(`/providers/${id}`, provider);

        alert('Fornecedor atualizado com sucesso!');
    }

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/providers/${id}`);

        this.setState({ provider: response.data });
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
                                    <input name="nome" className="provider-name" defaultValue={provider.nome} onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>Data de Criação:</strong></p>
                                </td>
                                <td>
                                    <input name="dataDeCriacao" className="provider-birthday" defaultValue={provider.dataDeCriacao} onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>CNPJ:</strong></p>
                                </td>
                                <td>
                                    <input name="cnpj" className="provider-cnpj" defaultValue={provider.cnpj} onChange={this.handleChange} />
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