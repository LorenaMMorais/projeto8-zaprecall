import React from "react";

export default function Cartao(props){
    const {questao, pergunta, resposta} = props;
    const {selecionado, setSelecionado} = React.useState(false);
    const css = `cartao ${selecionado ? "selecionado" : ""}`;

    return (
        <div className={css} onClick={() => setSelecionado(true)}>
            {selecionado ? <AbrirCartao pergunta = {pergunta} resposta = {resposta} /> : <CartaoFechado questao = {questao}/>}
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

function AbrirCartao(props){
    const {pergunta, resposta} = props;
    const [virarCartao, setVirarCartao] = React.useState(true);

    return(
        <div onClick = {() => setVirarCartao(false)}>
            {virarCartao ? <LadoPergunta pergunta={pergunta}/> : <LadoResposta resposta={resposta}/>}
        </div>
    )
}

function LadoPergunta(props){
    const {pergunta} = props;
    return(
        <>
            {pergunta}
            <img src = "./assets/setinha.png" alt="setinha"/>
        </>
    )
}

function LadoResposta(props){
    const {resposta} = props;
    <>
        {resposta}
        <div className="nao-lembrei"><p>Não lembrei</p></div>
        <div className="quase"><p>Quase não lembrei</p></div>
        <div className="zap"><p>Zap!</p></div>
    </>
}