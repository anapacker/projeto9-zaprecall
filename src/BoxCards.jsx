import styled from "styled-components"
import Flashcards from "./Flashcards"
import { useState } from "react"


export default function BoxCards({deckCards, qtdConcluidos, setQtdConcluidos}){
    return(
        <>
        <ContainerLogo>
            <img src="../assets/logo.png" alt="Logo ZapRecall - raio amarelo" />
            <h1>ZapRecall</h1>
        </ContainerLogo>
        <CardsPerguntaFechada>
            {deckCards.map((card, i) =>(
                <Flashcards qtdConcluidos={qtdConcluidos} setQtdConcluidos={setQtdConcluidos} key={i} card={card} cont={i +1}/>
                
            ))}
        </CardsPerguntaFechada>
        
        </>
        )
    }


const CardsPerguntaFechada = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
`
const ContainerLogo = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  margin:30px 0px;

  
    h1{
      color: white;
      font-size:40px;
    }
    img{
      width: 50px;
      
    }
`
