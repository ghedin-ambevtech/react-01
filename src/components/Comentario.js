import React from 'react';
import './Comentario.css'


//JSX
const Comentario = (props) => {
    return (
    <div className = "Comentario" >
        <h2>Comentario</h2>
        <p>{props.nome}</p>
        <p>{props.email}</p>
        <p>{props.children}</p>
        <p>{props.data.toString()}</p>
        <button onClick={props.onRemove}>&times;</button>
    </div>
    );
};

export default Comentario;