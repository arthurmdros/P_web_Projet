import React from 'react';//react divide uam pagina em varios componentes
import "./styles.css";
import Header from './componentes/Header';
import Main from "./pages/main";


const App = () => (
    <div className="App">
      <Header/>
      <Main/>
    </div>
);

export default App;
