import { Routes, Route } from "react-router-dom";

import Meta from "./components/Meta";
import Nav from "./components/Nav";
import GlobalStyle from "./styles/GlobalStyle";

import "./assets/css/style.css";

import Index from "./pages/Index";
import Search from "./pages/Search";
import Camp from "./pages/Camp";
import Exhibition from "./pages/Exhibition";

function App() {
  return (
    <div>
      <Meta />

      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:id" element={<Camp />} />
        <Route path="/exhibition" element={<Exhibition />} />
      </Routes>

      <Nav />
    </div>
  );
}

export default App;
