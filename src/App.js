import './App.css';
import Comentario from './components/Comentario'

function App() {
  return (
    <div className="App">
      <h1>Meu projeto</h1>
      <Comentario nome = "João" email = "joao@gmail.com" data = {new Date(2020, 2, 23)}>
        Mensagem 01
      </Comentario>
      <Comentario nome = "Maria" email = "maria@gmail.com" data = {new Date(2020, 2, 22)}>
        Mensagem 02
      </Comentario>
    </div>
  );
}

export default App;
