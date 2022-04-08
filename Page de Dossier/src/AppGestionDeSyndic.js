import React from "react";
import App from "./component-DetailsDossier/App";
import DossierApp from "./Component/DossierApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function AppGestionDeSyndic() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DossierApp />} />
        <Route path="/zebi" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
