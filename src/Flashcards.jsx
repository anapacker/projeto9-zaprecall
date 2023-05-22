import { useState } from "react"
import styled from "styled-components"
import CardZero from "./CardZero"
import CardUm from "./CardUm"
import CardDois from "./CardDois"

export default function Flashcards({card, cont}){
    const [estadoDoCard, setEstadoDoCard] = useState(0)


    function handleClick(){
        setEstadoDoCard(estadoDoCard + 1)

    }

    function retornarConteudo(){
        if(estadoDoCard == 0){
            return <CardZero cont={cont} handleClick={handleClick} estadoDoCard={estadoDoCard}/>
        }
        if(estadoDoCard == 1) {
            return <CardUm card={card} handleClick={handleClick} estadoDoCard={estadoDoCard}/>
        }
        if(estadoDoCard == 2){
            return <CardDois card={card} handleClick={handleClick} estadoDoCard={estadoDoCard}/>
        }
    }
                    
    

    return(
        <>
            <ConteudoCard estadoDoCard={estadoDoCard}>
                {retornarConteudo()}
            </ConteudoCard>
        </>
          
    )
}


const ConteudoCard = styled.div`
    width: 65vw;
    height: ${props => (props.estadoDoCard ? '95px' : 'fit-content')};
    background-color: ${props => (props.estadoDoCard ? '#FFFFD4' : '#FFFFFF' )} ;
    padding: 15px 15px;
    border-radius: 5px;
    font-size: 16px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color: #333333;

`

