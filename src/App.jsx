import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "flowbite"; // Flowbite import after Tailwind
import AOS from 'aos'; // AOS for scroll animations
import 'aos/dist/aos.css'; // AOS styles
import './index.css'; // Tailwind imports

// Components
import Navbar from "./components/Header";
import Footer from "./components/footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

// Pages
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  // Initialize AOS animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
}

export default App;
