import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SobreMi from "./pages/SobreMi";
import Educacion from "./pages/Educacion";
import Proyectos from "./pages/Proyectos";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";



function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Navbar />

      <Routes>
        <Route path="/" element={<SobreMi />} />
        <Route path="/educacion" element={<Educacion />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
