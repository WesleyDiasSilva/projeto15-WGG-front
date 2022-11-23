import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalStyles from "../src/assets/reset";
import LoginPage from "./pages/LoginPage";

function App() {
  return <BrowserRouter>
  <GlobalStyles />
  <Routes>
    <Route path="sign-up" element={<LoginPage />}/>
  </Routes>
  </BrowserRouter>;
}

export default App;
