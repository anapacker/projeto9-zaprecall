import { useState } from "react"
import styled from "styled-components"
import CardZero from "./CardZero"
import CardUm from "./CardUm"
import CardDois from "./CardDois"

export default function Flashcards({card, cont}){
    const [estadoDoCard, setEstadoDoCard] = useState(0)
    const [escolha, setEscolha] = useState("")


    function handleClick(){
        setEstadoDoCard(estadoDoCard + 1)

    }

    function retornarConteudo(){
        if(estadoDoCard == 0){
            return <CardZero cont={cont} handleClick={handleClick} estadoDoCard={estadoDoCard} escolha={escolha}/>
        }
        if(estadoDoCard == 1) {
            return <CardUm card={card} handleClick={handleClick} estadoDoCard={estadoDoCard}/>
        }
        if(estadoDoCard == 2){
            return <CardDois card={card} handleClick={handleClick} estadoDoCard={estadoDoCard} setEscolha={setEscolha}/>
        }
        if(estadoDoCard == 3){
            return <CardZero cont={cont} handleClick={handleClick} estadoDoCard={estadoDoCard} escolha={escolha}/>
        }
    }
                    
    

    return(
        <>
            <ConteudoCard data-test="flashcard" estadoDoCard={estadoDoCard}>
                {retornarConteudo()}
            </ConteudoCard>
        </>
          
    )
}


const ConteudoCard = styled.div`
    width: 65vw;
    height: ${props => {
         if(props.estadoDoCard == 0 || props.estadoDoCard >= 3){
            return 'fit-content'
        }   
            return '95px'
    }
       };
    background: ${props => {
         if(props.estadoDoCard == 0 || props.estadoDoCard >= 3){
            return '#FFFFFF'
        }   
            return '#FFFFD4'
    }
       };

    padding: 15px 15px;
    border-radius: 5px;
    font-size: 16px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color: #333333;

`
