import "@/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll } from "@/components/ef/SmoothScroll";
import { Navbar } from "@/components/ef/Navbar";
import { Footer, WhatsAppFloat } from "@/components/ef/Footer";
import { scrollTop, scrollToId } from "@/lib/scroll";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import PortfolioPage from "@/pages/PortfolioPage";
import PricingPage from "@/pages/PricingPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";

const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    scrollTop();
    if (!hash) return undefined;
    const t = setTimeout(() => scrollToId(hash.slice(1)), 300);
    return () => clearTimeout(t);
  }, [pathname, hash]);
  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SmoothScroll />
        <ScrollManager />
        <Navbar />
        <main id="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </BrowserRouter>
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
