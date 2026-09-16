import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Footer from "./Components/Footer";
import QuiSuisJe from "./pages/quiSuisJe";
import Competences from "./pages/competences";
import ContactForm from "./pages/contactForm";
import Projets from "./pages/projets";
import Services from "./pages/services";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />

        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quisuisje" element={<QuiSuisJe />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;