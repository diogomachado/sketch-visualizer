import React from "react";
import Artboard from "../components/Artboard";
import Header from "../components/Header";
import "./Documents.css";

export default function DocumentsPage() {
  return (
    <div>
      <Header title="Document name" />

      <section className="grid-documents">
        <Artboard
          title="Artboard title"
          image="https://via.placeholder.com/300x300"
        />
        <Artboard
          title="Artboard title"
          image="https://via.placeholder.com/300x300"
        />
        <Artboard
          title="Artboard title"
          image="https://via.placeholder.com/300x300"
        />
        <Artboard
          title="Artboard title"
          image="https://via.placeholder.com/300x300"
        />
        <Artboard
          title="Artboard title"
          image="https://via.placeholder.com/300x300"
        />
        <Artboard
          title="Artboard title"
          image="https://via.placeholder.com/300x300"
        />
      </section>
    </div>
  );
}
