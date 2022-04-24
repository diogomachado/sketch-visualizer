import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import DocumentsPage from "./pages/Documents";
import ArtboardPage from "./pages/Artboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DocumentsPage />} />
        <Route path="artboard" element={<ArtboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
