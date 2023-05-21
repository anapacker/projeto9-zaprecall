import styled from "styled-components"
import Flashcards from "./Flashcards"
import deckCards from "./deckCards"


export default function BoxCards(){

    return(
        <CardPerguntaFechada>
            {deckCards.map((card, i) =>(
                <Flashcards key={i} card={card} cont={i +1}/>
    
            ))}
        </CardPerguntaFechada>
        )
    }


const CardPerguntaFechada = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
`