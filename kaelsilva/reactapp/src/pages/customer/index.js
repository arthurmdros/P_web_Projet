import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';

export default class Customer extends Component{
    constructor(){
        super();
        this.state = {
            customer: {},
            nome :'',
            dataDeNascimento: '',
            cpf: '',
            sexo: '',
        };
    }

    handleChange = event => {
        this.setState({[event.target.name] : event.target.value}, ()=>{
            if (this.state.nome != '')
                this.state.customer.nome = this.state.nome;
            if (this.state.dataDeNascimento != '')
                this.state.customer.dataDeNascimento = this.state.dataDeNascimento;
            if (this.state.cpf != '')
                this.state.customer.cpf = this.state.cpf;
            if (this.state.sexo != '')
                this.state.customer.sexo = this.state.sexo;
            console.log(this.state.customer);
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const customer = this.state.customer;
        
        const { id } = this.props.match.params;

        api.put(`/customers/${id}`, customer);
    }

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/customers/${id}`);

        this.setState({ customer: response.data });
    }

    render(){
        const { customer } = this.state;

        return (
            <div className="customer-info">
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p><strong>Nome:</strong></p>
                                </td>
                                <td>
                                    <input name="nome" className="customer-name" defaultValue={customer.nome} onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>Data de Nascimento:</strong></p>
                                </td>
                                <td>
                                    <input name="dataDeNascimento" className="customer-birthday" defaultValue={customer.dataDeNascimento} onChange={this.handleChange}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>Sexo:</strong></p>
                                </td>
                                <td>
                                    <input name="sexo" className="customer-sex" defaultValue={customer.sexo} onChange={this.handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><strong>CPF:</strong></p>
                                </td>
                                <td>
                                    <input name="cpf" className="customer-cpf" defaultValue={customer.cpf} onChange={this.handleChange} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="actions">
                        <Link to={`/api/customers`}>Voltar</Link>
                        <button type="submit" onClick={this.handleChange}>
                            Alterar
                        </button>
                    </div>
                </form>
                 
            </div>
        );
    }
}