import { Component  } from 'react';
import './App.css';
import Comentario from './components/Comentario'

class App extends Component {
  state = {
    comentarios: [{
      nome: "João",
      email: "joao@gmail.com",
      data: new Date(2021, 2, 23),
      mensagem: "Mensagem do João para você!"
    },
    {
      nome: "Ana",
      email: "ana@gmail.com",
      data: new Date(2021, 2, 22),
      mensagem: "Mensagem da Maria para você!"
    }
  ]
  }
  
  render(){
    return (
    <div className="App">
      <h1>Meu projeto</h1>
      {this.state.comentarios.map((comentario, indice) => (
        <Comentario
        key = {indice}
        nome = {comentario.nome}
        email = {comentario.email}
        data = {comentario.data.toString()}
        >{comentario.mensagem}
        </Comentario>
      ))}
    </div>
    );
  }
}

export default App;
