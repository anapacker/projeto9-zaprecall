import { useState } from "react"
import styled from "styled-components"

export default function Flashcards({card, cont}){
    const [cartaVirada, setCartaVirada] = useState(false)


    function handleClick(){
        setCartaVirada(true)
    }


    return(
        <>
            <ConteudoCard cartaVirada={cartaVirada}>
                <p>{!cartaVirada ? `Pergunta ${cont}`: `${card.question}`}</p>
            <FlipButton onClick={handleClick}>
                <img src="../assets/seta_play.png" alt="seta para virar o card" cartaVirada={cartaVirada}/>
                    
            </FlipButton> 
        
            </ConteudoCard>
        </>
          
    )
}


const ConteudoCard = styled.div`
    width: 65vw;
    height: ${props => (props.cartaVirada ? '95px' : 'fit-content')};
    background-color: ${props => (props.cartaVirada ? '#FFFFD4' : '#FFFFFF' )} ;
    padding: 15px 15px;
    border-radius: 5px;
    font-size: 16px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color: #333333;

`

const FlipButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    img{
        transform: ${props => (props.cartaVirada ? 'rotate(180deg' : 'rotate(0)')};
        transition: tranform 0.3s;
    }
`