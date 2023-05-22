import { useState } from 'react'
import styled from 'styled-components'
import BoxCards from './BoxCards'
import Footer from './Footer'
import deckCards from './deckCards'

function App() {
  const [qtdConcluidos, setQtdConcluidos] = useState(0)

  return (
    <TelaInicial>
      
      <BoxCards deckCards={deckCards} qtdConcluidos={qtdConcluidos} setQtdConcluidos={setQtdConcluidos}/>
      <Footer deckCards={deckCards} qtdConcluidos={qtdConcluidos}/>
    </TelaInicial>

  )
}

export default App

const TelaInicial = styled.div`
  background-color: #FB6B6B;
  min-height:100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
`



