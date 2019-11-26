import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';

export default class Main extends Component {
    state = {
        customers: [],
    }

    componentDidMount(){
        this.loadCustomers();
    }

    loadCustomers = async () => {
        const response = await api.get('/customers');
        this.setState({ customers: response.data.docs });
    }

    render(){
        const {customers} = this.state;

        return (
            <div className="customer-list">
                {customers.map(customer => (
                    <article key={customer._id}>
                        <p><strong>Nome do cliente:</strong> {customer.nome}</p>
                        <p><strong>Data de nascimento:</strong> {customer.dataDeNascimento}</p>
                        <p><strong>Sexo:</strong> '{customer.sexo}'</p>
                        <a href="">Alterar</a>
                        <a href="">Deletar</a>
                        <br /><br />
                    </article>
                ))}
                <div className="actions">
                    <button>Anterior</button>
                    <button>Próxima</button>
                </div>
            </div>
        );  
    }
}