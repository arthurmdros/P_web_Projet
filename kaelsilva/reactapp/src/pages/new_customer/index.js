import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

export default class New_Customer extends Component{
    constructor(){
        super();
        this.state = {
            customer: {},
        };
    }

    render(){
        const { customer } = this.state;

        return (
            <div className="customer-info">
                <form>
                    <table>
                        <tr>
                            <td>
                                <p><strong>Nome:</strong></p>
                            </td>
                            <td>
                                <input className="customer-name" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>Data de Nascimento:</strong></p>
                            </td>
                            <td>
                                <input className="customer-birthday" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>Sexo:</strong></p>
                            </td>
                            <td>
                                <input className="customer-sex" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p><strong>CPF:</strong></p>
                            </td>
                            <td>
                                <input className="customer-cpf" />
                            </td>
                        </tr>
                    </table>
                </form>
                 <div className="actions">
                    <Link to={`/api/customers`}>Voltar</Link>
                    <button onClick={this.nextPage}>
                        Criar
                    </button>
                </div>
            </div>
        );
    }
}