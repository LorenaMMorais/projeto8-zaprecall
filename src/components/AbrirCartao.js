import React from "react";
import LadoPergunta from "./LadoPergunta";
import LadoResposta from "./LadoResposta";

export default function AbrirCartao(props){
    const {pergunta, resposta} = props;
    const [virar, setVirar] = React.useState(true);
    return(
        <div onClick = {() => setVirar(false)}>
            {virar ? <LadoPergunta pergunta={pergunta}/> : <LadoResposta resposta={resposta}/>}
        </div>
    )
}