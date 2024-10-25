import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import FicheLogement from "./pages/fichelogement";
import APropos from "./pages/apropos"
import NotFound from "./pages/notfound";
import Layout from "./components/Layout";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fichelogement" element={<FicheLogement />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;