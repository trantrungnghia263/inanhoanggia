import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Header from "../components/Header";
import Footer from "../components/Footer";
//routers
import HomePage from "../routers/HomePage";
import CategoriesPage from "../routers/CategoriesPage";
import CategoriesDetail from "../routers/CategoriesDetail";
import BlogPage from "../routers/BlogPage";
import BlogDetail from "../routers/BlogDetail";
import IntroductionPage from "../routers/IntroductionPage";
import Contact from "../routers/Contact";
import QuotationPage from "../routers/QuotationPage";

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
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
