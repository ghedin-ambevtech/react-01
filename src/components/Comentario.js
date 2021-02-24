import React from 'react';
import './Comentario.css'
import imagemUsuario from './user.png'


//JSX
const Comentario = (props) => {
    return (
    <div className = "Comentario" >
        <h2 className = "nome">{props.nome}</h2>
        <img src={imagemUsuario} alt={props.nome} className="avatar"/>
        <div>
            <p className = "email">{props.email}</p>
            <p className = "mensagem">{props.children}</p>
            <p className = "data">{props.data.toString()}</p>
        </div>
        <button onClick={props.onRemove}>&times;</button>
    </div>
    );
};

export default Comentario;