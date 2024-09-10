import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Share from "../components/Share";
import BackToTop from "../components/BackToTop";

//routers
import HomePage from "../routers/HomePage";
import CategoriesPage from "../routers/CategoriesPage";
import CategoriesDetail from "../routers/CategoriesDetail";
import BlogPage from "../routers/BlogPage";
import BlogDetail from "../routers/BlogDetail";
import IntroductionPage from "../routers/IntroductionPage";
import Contact from "../routers/Contact";
import QuotationPage from "../routers/QuotationPage";
import PolicyPage from "../routers/PolicyPage";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/danh-muc-in" element={<CategoriesPage />} />
          <Route path="/danh-muc-in/:slug" element={<CategoriesDetail />} />
          <Route path="/tin-tuc" element={<BlogPage />} />
          <Route path="/tin-tuc/:slug" element={<BlogDetail />} />
          <Route path="/gioi-thieu" element={<IntroductionPage />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/bao-gia" element={<QuotationPage />} />
          <Route path="/chinh-sach/:slug" element={<PolicyPage />} />
        </Routes>
      </div>
      <Footer />
      <Share></Share>
      <BackToTop />
    </div>
  );
}

export default App;
