import styled from "styled-components"

export default function Footer({deckCards, qtdConcluidos}){
    return(
        <FooterConcluido data-test="footer">
          <p>{qtdConcluidos}/{deckCards.length} CONCLUÍDOS</p>
        </FooterConcluido>
    )
}

const FooterConcluido = styled.footer`
  width: 100%;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #333333;
  padding: 25px 0px;
`