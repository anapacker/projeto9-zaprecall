import { useState } from 'react'
import styled from 'styled-components'
import BoxCards from './BoxCards'
import Footer from './Footer'

function App() {

  return (
    <TelaInicial>
      
      <BoxCards/>
      <Footer/>
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



