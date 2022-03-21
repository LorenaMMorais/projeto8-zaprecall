import React from "react";
import AbrirCartao from "./AbrirCartao";
import FecharCartao from "./FecharCartao";

export default function Cartao(props){
    const {questao, pergunta, resposta, tamanhoDeck} = props;
    const [selecionado, setSelecionado] = React.useState(false);
    const css = `cartao ${selecionado ? "selecionado" : ""}`;

    return (
        <div className={css} onClick={() => setSelecionado(true)}>
            {selecionado ? <AbrirCartao key={questao} pergunta={pergunta} resposta={resposta} /> : <FecharCartao questao={questao} tamanhoDeck={tamanhoDeck}/>}
        </div>
    )
}
