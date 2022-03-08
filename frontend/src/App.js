import { Routes, Route } from "react-router-dom";

import Meta from "./components/Meta";
import Main from "./components/Main";
import GlobalStyle from "./styles/GlobalStyle";

import Index from "./pages/Index";

function App() {
  return (
    <div>
      <Meta />

      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/community" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
