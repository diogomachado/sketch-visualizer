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
    <Link to="/artboard">
      <div className="artboard" data-testid="artboard">
        <img
          data-testid="artboard-image"
          src="https://via.placeholder.com/300x300"
          alt="Artboard"
        />
        <p>{title}</p>
      </div>
    </Link>
  );
}
