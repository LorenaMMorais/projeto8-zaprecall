export default function LadoPergunta(props){
    const {pergunta} = props;
    return(
        <>
            {pergunta}
            <img onClick={() => pergunta.callback('')} src = "./assets/setinha.png" alt="setinha"/>
        </>
    )
}