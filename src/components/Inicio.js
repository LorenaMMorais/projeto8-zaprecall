import React from 'react';
import TelaRecall from './TelaRecall';

function PaginaInicial(){
    const[inicio, setInicio] = React.useState(true);
    return inicio ? (
        <div className="tela-inicial fundo-mobile">
            <div className="logo"> 
                <img src="./assets/logo.png" alt="logo ZapRecall"/>
                <h1>ZapRecall</h1>
            </div>
            <button className="botao-iniciar" onClick={() => setInicio(false)}>Iniciar Recall!</button>
        </div>
    ) : (<TelaRecall/>);
}

export default function Inicio(){
    return (
        <>
        <PaginaInicial/>
        </>
    );
}