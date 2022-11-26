import axios from "axios";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/form/Button";
import Input from "../components/form/Input";
import ContainerData from "../components/sign/ContainerData";
import TitleOfPage from "../components/sign/TitleOfPage";
import { API } from "../API";
import { ContextUser } from "../contexts/ContextUser";
import userEvent from "@testing-library/user-event";

function LoginPage() {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const contextUser = useContext(ContextUser)

  const navigate = useNavigate()

  function signIn() {
    const body = {
      emailOrUsername: email,
      password,
    };
    const request = axios.post(`${API}/sign-in`, body)
    request.then((data) => {
      const token = data.data;
      contextUser.setUser({...contextUser.user, token})
      localStorage.setItem("token", JSON.stringify({token: token}))
      navigate("/home")
    })
    request.catch((err)=> console.log(err))
  }

  return (
    <Container>
      <ContainerData>
        <TitleOfPage>WGG STORE</TitleOfPage>
        <Informations>insira suas credencias de login </Informations>
        <Input onChange={setEmail} value={email} label="Email" />
        <Input
          onChange={setPassword}
          type={"password"}
          value={password}
          label="Senha"
        />
        <Button onClick={signIn} text="Login" />
        <RedirectInformation>
          <Informations>Novo usuário? </Informations>
          <Link to="/sign-up">
            <Redirect>Cadastre-se</Redirect>
          </Link>
        </RedirectInformation>
      </ContainerData>
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  background-color: #000;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Informations = styled.span`
  font-family: Inter;
  font-size: 1.2rem;
  color: #fff;
`;

const RedirectInformation = styled.div``;

const Redirect = styled.span`
  font-family: Inter;
  font-size: 1.2rem;
  color: #000;
`;
