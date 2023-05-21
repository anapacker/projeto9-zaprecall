import { useState } from 'react'
import styled from 'styled-components'
import BoxCards from './BoxCards'
import Footer from './Footer'

function App() {

  return (
    <TelaInicial>
      <ContainerLogo>
        <img src="../assets/logo.png" alt="Logo ZapRecall - raio amarelo" />
        <h1>ZapRecall</h1>
      </ContainerLogo>
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
const ContainerLogo = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  margin:30px 0px;

  
    h1{
      color: white;
      font-size:45px;
    }
    img{
      width: 50px;
      
    }
`



