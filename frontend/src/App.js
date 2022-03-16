import { Routes, Route } from "react-router-dom";

import Meta from "./components/Meta";
import Nav from "./components/Nav";
import GlobalStyle from "./styles/GlobalStyle";

import "./assets/css/style.css";

import Index from "./pages/Index";
import Search from "./pages/Search";
import Camp from "./pages/Camp";
import Exhibition from "./pages/Exhibition";
import ExhiList from "./pages/ExhiList";
import Heart from "./pages/Heart";
import Join from "./pages/Join";
import MyActive from "./pages/MyActive";
import Settings from "./pages/Settings";
import SignUp from "./pages/SignUp";
import Notice from "./pages/Notice";

function App() {
  return (
    <div>
      <Meta />

      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:id" element={<Camp />} />
        <Route path="/exhibition" element={<ExhiList />} />
        <Route path="/exhibition/:id" element={<Exhibition />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/join" element={<Join />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/my-active" element={<MyActive />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notice/*" element={<Notice />} />
      </Routes>

      <Nav />
    </div>
  );
}

export default App;
