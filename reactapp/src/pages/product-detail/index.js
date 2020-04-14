import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';

export default class Product extends Component{
    constructor(){
        super();
        this.state = {
            product: {},
            nome :'',
            tipo: '',
            quantidade: '',
            fornecedor: '',
        };
    }

    deleteProduct = event => {
        event.preventDefault();

        const { id } = this.props.match.params;

        api.delete(`/products/${id}`);

        alert('Produto deletado com sucesso!');
    }

    handleChange = event => {
        this.setState({[event.target.name] : event.target.value}, ()=>{
            if (this.state.nome != '')
                this.state.product.nome = this.state.nome;
            if (this.state.tipo != '')
                this.state.product.tipo = this.state.tipo;
            if (this.state.quantidade != '')
                this.state.product.quantidade = this.state.quantidade;
            if (this.state.fornecedor != '')
                this.state.product.fornecedor = this.state.fornecedor;
            console.log(this.state.fornecedor);
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const product = this.state.product;
        
        const { id } = this.props.match.params;

        api.put(`/products/${id}`, product);

        alert('Produto atualizado com sucesso!');
    }

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data });
    }

    render(){
        const { product } = this.state;

        return (
            <div className="product-info">
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>Nome:</strong></p>
                                </td>
                                <td>
                                    <input name="nome" className="product-name" defaultValue={product.nome} onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>Tipo:</strong></p>
                                </td>
                                <td>
                                    <input name="tipo" className="product-tipo" defaultValue={product.tipo} onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>Quantidade:</strong></p>
                                </td>
                                <td>
                                    <input name="quantidade" className="product-quantity" defaultValue={product.quantidade} onChange={this.handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>Fornecedor:</strong></p>
                                </td>
                                <td>
                                    <input name="fornecedor" className="product-provider" defaultValue={product.fornecedor} onChange={this.handleChange} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="actions">
                        <Link to={`/api/products`}>Voltar</Link>
                        <button type="submit" onClick={this.deleteProduct}>
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