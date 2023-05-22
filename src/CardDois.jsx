import styled from "styled-components"

export default function CardDois({card, handleClick, estadoDoCard}) {

    return (
        <ConteudoCardDois>
            <p>{card.answer}</p>

            <BoxButton onClick={handleClick}>
                <button>Não lembrei</button>
                <button>Quase não lembrei</button>
                <button>Zap!</button>
            </BoxButton> 

        </ConteudoCardDois>
    )
}
const ConteudoCardDois = styled.div`
    display: flex;
    flex-direction: column;

`
const BoxButton = styled.button`
    width: 100%;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    button{
        width: 85px;
        height: 37;
        font-size: 12px;
    }
`