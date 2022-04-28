import React from "react";
import { Link } from "react-router-dom";
import "./Artboard.css";

export default function Artboard({
  title,
  maxHeight,
  image,
}: {
  title?: string;
  maxHeight?: boolean;
  image: string;
}) {
  return (
    <div className="artboard" data-testid="artboard">
      <div className="artboard-image-wrapper">
        <img
          className={`artboard-image ${maxHeight ? "max" : ""}`}
          data-testid="artboard-image"
          src={image}
          alt="Artboard"
        />
      </div>
      <p className="artboard-title">{title}</p>
    </div>
  );
}
