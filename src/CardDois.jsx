import styled from "styled-components"

export default function CardDois({card, handleClick, estadoDoCard}) {

    return (
        <ConteudoCardDois>
            <p>{card.answer}</p>

            <BoxButton onClick={handleClick}>
                <button className="vermelho">Não lembrei</button>
                <button className="amarelo">Quase não lembrei</button>
                <button className="verde">Zap!</button>
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