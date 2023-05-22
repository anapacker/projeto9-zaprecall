import styled from "styled-components"

export default function CardUm({card, handleClick, estadoDoCard}) {

    return (
        <>
            <p data-test="flashcard-text">{card.question}</p>
            <FlipButton data-test="turn-btn" onClick={handleClick}>
                <img src="../assets/seta_virar.png" alt="seta para mostrar resposta" estadoDoCard={estadoDoCard} />
            </FlipButton>

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