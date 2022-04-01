import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home";
import About from './pages/About'
import QuotesDetails from "./components/QuotesDetails/QuotesDetails";
import Favourite from "./pages/Favourite";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quote/:id" element={<QuotesDetails />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
