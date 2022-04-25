import React from "react";
import { Link } from "react-router-dom";
import "./Artboard.css";

export default function Artboard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <Link to="/artboard" className="artboard" data-testid="artboard">
      <div className="artboard-image-wrapper">
        <img
          className="artboard-image"
          data-testid="artboard-image"
          src={image}
          alt="Artboard"
        />
      </div>
      <p className="artboard-title">{title}</p>
    </Link>
  );
}
