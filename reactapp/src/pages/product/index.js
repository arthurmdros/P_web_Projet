import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';

import { Link } from 'react-router-dom';

export default class Product extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async ( page = 1 ) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ... productInfo } = response.data;

        this.setState({ products: docs, productInfo, page });
    }

    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return;

        const pageNumber = page+1;
        
        this.loadProducts(pageNumber);
    };
    prevPage = () => {
        const { page, productInfo } = this.state;

        if (page === 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    };

    render(){
        const {products, page, productInfo} = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <p><strong>Nome produto:</strong> {product.nome}</p>
                        <p><strong>Tipo do produto:</strong> {product.tipo}</p>
                        <p><strong>Quantidade:</strong> '{product.quantidade}'</p>
                        <Link to={`/api/products/${product._id}`}>Consultar</Link>
                        <br /><br />
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>
                        Anterior
                    </button>
                    <Link to={`/api/new_product`}>Novo produto</Link>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>
                        Próxima
                    </button>
                </div>
            </div>
        );  
    }
}