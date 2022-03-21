let pontos = 0;
let placar = [];
function AddIcone(resposta){
    if(resposta.icon === '1'){
        return(
            <>
                <ion-icon className="vermelho" name="close-circle"></ion-icon>
            </>
        )
    }
    if(resposta.icon === "2"){
        return (
            <>
                <ion-icon class="verde" name="checkmark-circle"></ion-icon>
            </>
        )
    }
    if(resposta.icon === "3"){
        return (
            <>
                <ion-icon class="laranja" name="help-circle"></ion-icon>
            </>
        )
    }
}
export default function Footer(props){

    const{tamanhoDeck} =props;
    console.log(tamanhoDeck);
    return(
        <footer>
            <p>0/{tamanhoDeck} CONCLUÍDOS</p>
        </footer>
    );
}
