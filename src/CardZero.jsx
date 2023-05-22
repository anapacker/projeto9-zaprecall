import styled from "styled-components"

export default function CardZero({cont, handleClick, estadoDoCard}) {

    return (
        <>
            <p>Pergunta {`${cont}`}</p>
            <FlipButton onClick={handleClick}>
                <img src="../assets/seta_play.png" alt="seta para mostrar pergunta" estadoDoCard={estadoDoCard} />
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