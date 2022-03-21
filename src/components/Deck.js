import React from "react";
import Cartao from "./Cartao";

export default function Deck(){
    const perguntas= [
        {pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"},
        {pergunta: "O React é __", resposta: "uma biblioteca JavaScript para construção de interfaces"},
        {pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula"},
        {pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões"},
        {pergunta: "O ReactDOM nos ajuda __", resposta: "interagindo com a DOM para colocar componentes React na mesma"},
        {pergunta: "Usamos o npm para __", resposta: "gerenciar os pacotes necessários e suas dependências"},
        {pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes "},
        {pergunta: "Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ];
    perguntas.sort(embaralhar)

    function embaralhar(){
        return Math.random() - 0.5;
    }

    function opçaoPergunta(){
        for(let i = 0; i < perguntas.length; i++){
            perguntas[i].questao = `Pergunta ${i+1}`;
        }
    }
    opçaoPergunta();
    
    return (
        <div className="deck">
            {perguntas.map(cartao => <Cartao questao={cartao.questao} pergunta={cartao.pergunta} resposta={cartao.resposta}/>)}
        </div>
    );
}