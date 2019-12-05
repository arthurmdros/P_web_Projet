import React from 'react';//react divide uam pagina em varios componentes
import Routes from "./routes";
import "./styles.css";
import Header from './componentes/Header';
/*import Main from "./pages/main";
import Funcionario from "./pages/funcionario";*/

 /*enves de mostrar mais la embaixo mostra as rotas*/
const App = () => (
    <div className="App">
      <Header/>
      <Routes/>
    </div>
);

export default App;
