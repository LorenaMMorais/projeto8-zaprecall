import LadoResposta from "./LadoResposta";

export default function LadoPergunta(props){
    const {pergunta} = props;
    return(
        <div className="cartao-pergunta">
            <p>{pergunta}</p>
            <img onClick={() => <LadoResposta />} src = "./assets/setinha.png" alt="setinha"/>
        </div>
    )
}