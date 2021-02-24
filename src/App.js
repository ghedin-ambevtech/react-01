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
  ],
  novoComentario:{
    nome: "",
    email: "",
    mensagem: ""
    }
  }
  
  adicionarComentario = (evento) => {
    evento.preventDefault();
    const novoComentario = {...this.state.novoComentario, data: new Date()}
    // utilização do spread
    this.setState({comentarios: [...this.state.comentarios, novoComentario],
                  novoComentario: {nome: "", email: "", comentario: ""}
    })
  }

  removerComentario = (comentario) => {
    let lista = this.state.comentarios
    lista = lista.filter(c => c !== comentario )
    this.setState({comentarios: lista })
  }

  digitarCampo = (evento) => {
    const {name, value} = evento.target
    this.setState({novoComentario: {...this.state.novoComentario, [name]: value}})
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
        data = {comentario.data}
        onRemove = {this.removerComentario.bind(this, comentario)}
        >{comentario.mensagem}
        </Comentario>
      ))}
      <form method="post" onSubmit = {this.adicionarComentario}>
        <h2>Adicionar Comentario</h2>
        <div>
          <input 
          type="text" 
          name= "nome" 
          value = {this.state.novoComentario.nome}
          onChange = {this.digitarCampo}
          placeholder = "Digite seu nome"/>
        </div>
        <div>
          <input 
          type="email" 
          name= "email" 
          value = {this.state.novoComentario.email}
          onChange = {this.digitarCampo}
          placeholder = "Digite seu email"/>
        </div>
        <div>
          <textarea 
          name = "mensagem" 
          value = {this.state.novoComentario.mensagem}
          onChange = {this.digitarCampo}
          rows = "4"/>
        </div>
        <button type="submit">Adicionar Comentário</button>
      </form>
    </div>
    );
  }
}

export default App;
