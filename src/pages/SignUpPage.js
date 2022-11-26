import React, { useState } from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/form/Button'
import Input from '../components/form/Input'
import ContainerData from '../components/sign/ContainerData'
import TitleOfPage from '../components/sign/TitleOfPage'
import BackgroundImg from "../components/sign/BackgroundImg";

import axios from "axios"

export default function LoginPage() {
    const [form, setForm] = useState({
        name: "",
        username: "",
        birthday: "",
        email: "",
        picture: "",
        password: ""
    })
    const [checkPassword, setCheckPassword] = useState({})

    function Form(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    function ConfirmPassword(e){
        const { value } = e.target
        setCheckPassword(value)
    }
    
    function Send(){   
        if(form === ''){

        }
        if(checkPassword !== form.password){
            alert("As senhas não coincidem")
            return
        }
  
        const URL = 'http://localhost:5000/sign-up'
        const post = axios.post (URL, form)
        post.then((res) => {
            
            console.log(res.data)
        })
        post.catch((err) => {
            console.log(err.response.data)
        })
    }

    return (
        <BackgroundImg>
            <ContainerData >
                <TitleOfPage>WGG STORE</TitleOfPage>
                <Informations>insira suas credencias de login </Informations>
                <Input
                    type="text" 
                    label="Nome" 
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
                    onChange={ConfirmPassword}
                />
                <Button
                    text="CRIAR CONTA"
                    onClick={Send}
                />
                <RedirectInformation>
                    <Informations>Já tem uma conta? </Informations>
                    <Link to="/sign-in">
                        <Redirect>Entrar</Redirect>
                    </Link>
                </RedirectInformation>
            </ContainerData>
        </BackgroundImg>
    )
}

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