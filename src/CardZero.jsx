import { useState } from "react"
import styled from "styled-components"
    
export default function CardZero({ cont, handleClick, estadoDoCard, escolha }) {

    function renderizarStatusCard(){
      if(escolha == "Não lembrei"){
        return(
            <img data-test="no-icon" src="../assets/icone_erro.png" alt="icone de incorreto" /> 

        )
      }else if(escolha == "Quase não lembrei"){
        return(
            <img data-test="partial-icon" src="../assets/icone_quase.png" alt="icone de quase acertou" /> 

        )
      }
      return(
        <img data-test="zap-icon" src="../assets/icone_certo.png" alt="icone de correto" /> 
      )
    

    }
    
    function recebeAlgumaCoisa() {
        if (escolha == "Não lembrei") {
            return (
                <BotaoEscolha>
                    <del className="vermelho" data-test="flashcard-text">Pergunta {`${cont}`}</del>
                </BotaoEscolha>
            )
        }
        if (escolha == "Quase não lembrei") {
            return (
                <BotaoEscolha>
                    <del className="amarelo" data-test="flashcard-text">Pergunta {`${cont}`}</del>
                </BotaoEscolha>
            )
        }
        if (escolha == "Zap!") {
            return (
                <BotaoEscolha>
                    <del className="verde" data-test="flashcard-text">Pergunta {`${cont}`}</del>
                </BotaoEscolha>
            )
        }

    } 
    return (
        <>
            <p data-test="flashcard-text" >{escolha ? recebeAlgumaCoisa() : `Pergunta ${cont}`}</p>
            {estadoDoCard == 0 ? 
                 <FlipButton data-test="play-btn" onClick={handleClick}>
                    <img src="../assets/seta_play.png" alt="seta para mostrar pergunta" estadoDoCard={estadoDoCard} />
                 </FlipButton>
            : renderizarStatusCard()
            }
           

        </>
    )
}

const FlipButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    img{
        transform: ${props => (props.estadoDoCard ? 'rotate(180deg' : 'rotate(0)')};
        transition: tranform 0.3s;
    }
`

const BotaoEscolha = styled.del`
    .vermelho{
        color:#FF3030
        }
    .amarelo{
        color:#FF922E;

    }
    .verde{
        color: #2FBE34

    }
`