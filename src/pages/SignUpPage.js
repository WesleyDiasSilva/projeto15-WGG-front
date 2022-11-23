import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/form/Button'
import Input from '../components/form/Input'
import ContainerData from '../components/sign/ContainerData'
import TitleOfPage from '../components/sign/TitleOfPage'

function LoginPage() {
  return (
    <Container>
      <ContainerData>
        <TitleOfPage>WGG STORE</TitleOfPage>
        <Informations>insira suas credencias de login </Informations>
        <Input label="Nome"/>
        <Input label="Username"/>
        <Input label="Email"/>
        <Input label="Senha"/>
        <Input label="Confirmar senha"/>
        <Button text="CRIAR CONTA"/>
        <RedirectInformation>
          <Informations>Já tem uma conta? </Informations>
          <Link to="/sign-in">
            <Redirect>Entrar</Redirect>
          </Link>
        </RedirectInformation>
      </ContainerData>
    </Container>
  )
}

export default LoginPage

const Container = styled.div`
  background-color: #000;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Informations = styled.span`
  font-family: Inter;
  font-size: 1.2rem;
  color: #fff;
`

const RedirectInformation = styled.div`
  
`

const Redirect = styled.span`
  font-family: Inter;
  font-size: 1.2rem;
  color: #000;
`