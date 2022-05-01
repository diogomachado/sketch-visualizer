import React, { useEffect, useState } from "react";
import HeaderArtboard from "../components/HeaderArtboard";
import Artboard from "../components/Artboard";
import "./Artboard.css";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import { useLocation } from "react-router-dom";

export default function ArtboardPage() {
  let location = useLocation();
  const { artboardId, artboardName } = location.state as any;

  const [artboard, setArtboard] = useState({
    files: [] as any,
  });

  useEffect(() => {
    setLocalStorage("artboardId", artboardId);
    filterArtboardSelected(artboardId);
  }, []);

  const filterArtboardSelected = (id: any) => {
    // Filter data saved localStorage
    const localData = getLocalStorage("artboards");

    const [artboardSelected] = localData.filter(
      (artboard: any, index: number) => index === Number(id)
    );
    setArtboard(artboardSelected);
  };

  return (
    <div>
      <HeaderArtboard title={artboardName} />

      <section className="artboard-visualizer">
        <Artboard image={artboard.files[0]?.url} />
      </section>
    </div>
  );
}
