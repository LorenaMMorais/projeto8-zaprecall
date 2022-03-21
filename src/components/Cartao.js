import React from "react";
import AbrirCartao from "./AbrirCartao";

export default function Cartao(props){
    const {questao, pergunta, resposta} = props;
    const [selecionado, setSelecionado] = React.useState(false);
    const css = `cartao ${selecionado ? "selecionado" : ""}`;

    return (
        <div className={css} onClick={() => setSelecionado(true)}>
            {selecionado ? <AbrirCartao key={questao} pergunta={pergunta} resposta={resposta} /> : <CartaoFechado questao={questao}/>}
        </div>
    )
}
function CartaoFechado(props){
    const {questao} = props;
    return(
        <>
            {questao}
            <ion-icon name="play-outline"></ion-icon>
        </>
    )
}