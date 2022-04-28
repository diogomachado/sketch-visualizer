import React, { useEffect, useState } from "react";
import HeaderArtboard from "../components/HeaderArtboard";
import Artboard from "../components/Artboard";
import "./Artboard.css";
import { getLocalStorage } from "../utils/localStorage";
import { useParams } from "react-router";

export default function ArtboardPage() {
  let { id } = useParams();
  const [artboard, setArtboard] = useState({
    files: [] as any,
  });

  // useEffect to listener for keydown event
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      // TODO: add keydown event listener
      if (event.key === "ArrowLeft") {
      }
      if (event.key === "ArrowRight") {
      }
    });
  }, []);

  useEffect(() => {
    filterArtboardSelected(Number(id));
  }, []);

  const filterArtboardSelected = (id: Number) => {
    // Filter data saved localStorage
    const localData = getLocalStorage("artboards");

    const [artboardSelected] = localData.filter(
      (artboard: any, index: number) => index === Number(id)
    );
    setArtboard(artboardSelected);
  };

  return (
    <div>
      <HeaderArtboard title={document.title} />

      <section className="artboard-visualizer">
        <Artboard image={artboard.files[0]?.url} />
      </section>
    </div>
  );
}
