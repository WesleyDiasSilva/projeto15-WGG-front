import React, { useState } from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/form/Button'
import Input from '../components/form/Input'
import ContainerData from '../components/sign/ContainerData'
import TitleOfPage from '../components/sign/TitleOfPage'

function LoginPage() {
    const [form, setForm] = useState({
        name: "",
        username: "",
        birthday: "",
        email: "",
        picture: "",
        password: ""
    })

    function Form(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    console.log(form)

    return (
        <Container>
            <ContainerData>
                <TitleOfPage>WGG STORE</TitleOfPage>
                <Informations>insira suas credencias de login </Informations>
                <Input
                    label="Nome"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={Form}
                />
                <Input
                    label="Username"
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={Form}
                />
                <Input
                    label="Ano de nascimento"
                    type="text"
                    name="birthday"
                    value={form.birthday}
                    onChange={Form}
                />
                <Input
                    label="Email"
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={Form}
                />
                <Input
                    label="Foto de perfil (URL)"
                    type="url"
                    name="picture"
                    value={form.picture}
                    onChange={Form}
                />
                <Input
                    label="Senha"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={Form}
                />
                <Input
                    label="Confirmar senha"
                    type="password"
                    name="confirmPassword"
                />
                <Button
                    text="CRIAR CONTA"
                />
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