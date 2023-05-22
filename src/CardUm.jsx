import styled from "styled-components"

export default function CardUm({card, handleClick, estadoDoCard}) {

    return (
        <>
            <p>{card.question}</p>
            <FlipButton onClick={handleClick}>
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