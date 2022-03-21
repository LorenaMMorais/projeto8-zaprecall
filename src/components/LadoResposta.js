import React from "react";
import FecharCartao from "./FecharCartao";

export default function LadoResposta(props){
    const {resposta, questao, tamanhoDeck} = props;
    const [fecharCartao, setFecharCartao] = React.useState(false);

    return !fecharCartao ?(
        <div className="cartao-resposta">
            <p>{resposta}</p>
            <div className='auto-avaliacao'>
                <div className="nao-lembrei" onClick={() => setFecharCartao('vermelho')}><p>Não lembrei</p></div>
                <div className="quase" onClick={() => setFecharCartao('laranja')}><p>Quase não lembrei</p></div>
                <div className="zap" onClick={() => setFecharCartao('verde')}><p>Zap!</p></div>
            </div>
        </div>
    ) : (<FecharCartao /*cor={fecharCartao}*/ questao={questao} tamanhoDeck={tamanhoDeck}/>);
}