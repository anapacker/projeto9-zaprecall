import styled from "styled-components"

export default function Flashcards(props){

    return(
        <>
            <CardPerguntaFechada>
                <p>Pergunta {props.cont}</p>
                <img src="../assets/seta_play.png" alt="seta para virar o card" />
            </CardPerguntaFechada>
        </>
    )
}

const CardPerguntaFechada = styled.li`
    width: 90vw;
    background-color: #FFFFFF;
    padding: 15px;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;

    p{
        font-size: 16px;

    }
`