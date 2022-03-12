import { Routes, Route } from "react-router-dom";

import Meta from "./components/Meta";
import Main from "./components/Main";
import Nav from "./components/Nav";
import GlobalStyle from "./styles/GlobalStyle";

import Index from "./pages/Index";

import "./assets/css/style.css";

function App() {
  return (
    <div>
      <Meta />

      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/community" element={<Main />} />
      </Routes>

      <Nav />
    </div>
  );
}

export default App;
