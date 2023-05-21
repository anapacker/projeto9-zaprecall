import styled from "styled-components"
import Flashcards from "./Flashcards"
import deckCards from "./deckCards"


export default function BoxCards(){
    return(
        <TodosOsCards>
            {deckCards.map((card, i) =>(
                <Flashcards cont={i +1}/>
    
            ))}
        </TodosOsCards>
        )
    }



export const TodosOsCards = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  
  
`