export default function LadoResposta(props){
    const {resposta} = props;
    return(
        <div className="cartao-resposta">
            <p>{resposta}</p>
            <div className='auto-avaliacao'>
                <div className="nao-lembrei"><p>Não lembrei</p></div>
                <div className="quase"><p>Quase não lembrei</p></div>
                <div className="zap"><p>Zap!</p></div>
            </div>
        </div>
    )
}