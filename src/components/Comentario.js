import React from 'react';
import './Comentario.css'
import imagemUsuario from './user.png'


//JSX
const Comentario = (props) => {
    return (
    <div className = "Comentario" >
        <img src={imagemUsuario} alt={props.nome} className="avatar"/>
        <div className="conteudo">
            <h2 className = "nome">{props.nome}</h2>
            <p className = "email">{props.email}</p>
            <p className = "mensagem">{props.children}</p>
            <p className = "data">{props.data.toString()}</p>
            <button onClick={props.onRemove}>&times;</button>
        </div>
    </div>
    );
};

export default Comentario;