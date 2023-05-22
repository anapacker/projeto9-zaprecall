import { useState } from "react"
import styled from "styled-components"

export default function CardDois({ card, handleClick, setEscolha, setQtdConcluidos, qtdConcluidos}) {

    function statusEscolha(escolhido) {
        if(escolhido == "Não lembrei"){
            setEscolha("Não lembrei")
        } 
        if(escolhido == "Quase não lembrei"){
            setEscolha("Quase não lembrei")
        } 
        if(escolhido == "Zap!"){
            setEscolha("Zap!")
        }

    }

    return (
        <ConteudoCardDois>
            <p data-test="flashcard-text">{card.answer}</p>

            <BoxButton>
                <button onClick={() => {
                    statusEscolha("Não lembrei")
                    handleClick()
                    setQtdConcluidos(qtdConcluidos + 1)
                }} className="vermelho">
                    Não lembrei
                </button>
                <button onClick={() => {
                    statusEscolha("Quase não lembrei")
                    handleClick()
                    setQtdConcluidos(qtdConcluidos + 1)
                }} className="amarelo">
                    Quase não lembrei
                </button>
                <button onClick={() => {
                    statusEscolha("Zap!")
                    handleClick()
                    setQtdConcluidos(qtdConcluidos + 1)
                }} className="verde">
                    Zap!
                </button>
            </BoxButton>

        </ConteudoCardDois>
    )
}
const ConteudoCardDois = styled.div`
    display: flex;
    flex-direction: column;

`
const BoxButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    button{
        border: none;
        outline: none;
        cursor: pointer;
        width: 85px;
        height: 80px;
        font-size: 12px;
    }
    .vermelho{
        background:#FF3030;
    }
    .verde{
        background:#2FBE34;
    }
    .amarelo{
        background: #FF922E;
    }
`