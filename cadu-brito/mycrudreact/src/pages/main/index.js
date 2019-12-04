import React, { Component } from "react";
import api from "../../services/api";
import './styles.css';


export default class Main extends Component{
    state = {
        funcionario: [],
    }
    componentDidMount(){
        this.loadFuncionario();
    }
    loadFuncionario = async () => {
        const response = await api.get("/funcionario");

        console.log(response.data.docs);
        this.setState({funcionario: response.data.docs});
    };
    render(){
        const { funcionario } = this.state;
        return(
            <div className="funcionario-list">
            {funcionario.map(funcionario =>(
                <article key = {funcionario._id}>
                <strong>{funcionario.cpf}</strong>
                <p>{funcionario.nome}</p>
                <a href="">Acessar</a>
                </article>

            ))}
            </div>


        )
    }
}
/*quando a funcao e nossa criar erowfunction8*/