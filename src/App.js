import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyles from "../src/assets/reset";
import LoginPage from "./pages/LoginPage";
import styled from 'styled-components'
import SignUpPage from './pages/SignUpPage'
import Homepage from './pages/HomePage'
function App() {
  return (
    <BrowserRouter>
     <Content>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
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