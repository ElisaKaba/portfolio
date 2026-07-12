import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Footer from "./Components/Footer";
import QuiSuisJe from "./pages/quiSuisJe";
import Competences from "./pages/competences";
import ContactForm from "./pages/contactForm";
import Projets from "./pages/projets";
import Services from "./pages/services"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/quisuisje" element={<QuiSuisJe />} />
          <Route exact path="/competences" element={<Competences />} />
          <Route exact path="/projets" element={<Projets />} />
          <Route exact path="/services" element={<Services />}/>
          <Route exact path="/contact" element={<ContactForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
