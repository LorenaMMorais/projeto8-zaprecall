import React from "react";
import Cartao from "./Cartao";

export default function Deck(){
    const perguntas= [
        {questao: "Pergunta 1", pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"},
        {questao: "Pergunta 2", pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces"},
        {questao: "Pergunta 3", pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula"},
        {questao: "Pergunta 4", pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões"},
        {questao: "Pergunta 5", pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma"},
        {questao: "Pergunta 6", pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências"},
        {questao: "Pergunta 7", pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes "},
        {questao: "Pergunta 8", pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ];
    return (
        <div className="deck">
            {perguntas.map(cartao => <Cartao questao={cartao.questao} pergunta={cartao.pergunta} resposta={cartao.resposta}/>)}
        </div>
    );
}