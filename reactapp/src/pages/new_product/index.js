import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class New_Product extends Component{
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

        //const { id } = this.props.match.params;

        api.post('products/', product);

        alert('Produto criado com sucesso.');
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
                                    <input name="nome" className="product-name" onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>Tipo:</strong></p>
                                </td>
                                <td>
                                    <input name="tipo" className="product-type" onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>Quantidade:</strong></p>
                                </td>
                                <td>
                                    <input name="quantidade" className="product-quantity" onChange={this.handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>Fornecedor:</strong></p>
                                </td>
                                <td>
                                    <input name="fornecedor" className="product-provider" onChange={this.handleChange} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="actions">
                        <Link to={`/api/products`}>Voltar</Link>
                        <button type="submit" onClick={this.handleChange}>
                            Criar
                        </button>
                    </div>
                </form>
                 
            </div>
        );
    }
}