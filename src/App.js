import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyles from "../src/assets/reset";
import LoginPage from "./pages/LoginPage";
import styled from 'styled-components'
import SignUpPage from './pages/SignUpPage'
import HomePage from "./pages/HomePage";
import React from "react";
import { ContextUser } from "./contexts/ContextUser";

function App() {
const [user, setUser] = React.useState({})

  return (
    <BrowserRouter>
     <Content>
      <GlobalStyles />
      <ContextUser.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
      </ContextUser.Provider>
      </Content>
    </BrowserRouter>
  )
}

export default App;

const Content = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #333333;
`