import Footer from "./Footer"

function CartaoFechado(props){
    const {cor, questao, icone} = props;
    return(
        <>
            <h1 className={cor}>{questao}</h1>
            <ion-icon className={cor} name={icone}></ion-icon>
        </>
    )
}
export default function FecharCartao(props) {
    const{questao, tamanhoDeck} = props;
    let cor = "";
    if(cor === "vermelho"){
        return (
            <>
                <CartaoFechado cor="vermelho" icone="close-circle" questao={questao} />
                <Footer tamanhoDeck={tamanhoDeck} icone="1" cor="vermeho"/>
            </>
        )
    }if(cor === "verde"){
        return (
            <>
                <CartaoFechado cor="verde" icone="checkmark-circle" questao={questao} />
                <Footer tamanhoDeck={tamanhoDeck} icone="2" color="verde" />
            </>
        )
    }if(cor === "laranja"){
        return (
            <>
                <CartaoFechado cor="laranja" icone="help-circle" questao={questao}/>
                <Footer tamanhoDeck={tamanhoDeck} icone="3" cor="laranja"/>
            </>
        )
    }if(cor === ""){
        return(
            <CartaoFechado questao={questao} tamanhoDeck={tamanhoDeck}/>
        )
    }
}