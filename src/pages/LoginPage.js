import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/form/Button'
import Input from '../components/form/Input'
import BackgroundImg from '../components/sign/BackgroundImg'
import ContainerData from '../components/sign/ContainerData'
import TitleOfPage from '../components/sign/TitleOfPage'


function LoginPage() {
  return (
    <BackgroundImg>
      <ContainerData>
        <TitleOfPage>WGG STORE</TitleOfPage>
        <Informations>insira suas credencias de login </Informations>
        <Input label="Email"/>
        <Input label="Senha"/>
        <Button text="Login"/>
        <RedirectInformation>
          <Informations>Novo usuário? </Informations>
          <Link to="/sign-up">
            <Redirect>Cadastre-se</Redirect>
          </Link>
        </RedirectInformation>
      </ContainerData>
    </BackgroundImg>
  )
}

export default LoginPage

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