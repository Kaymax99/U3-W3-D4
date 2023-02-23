import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { SingleArticle } from "./components/SingleArticle";
import { NotFound } from "./components/NotFound";
import { CustomNav } from "./components/CustomNav.";

function App() {
  return (
    <BrowserRouter>
      <CustomNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:articleID" element={<SingleArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
