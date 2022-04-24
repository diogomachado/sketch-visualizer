import React from "react";
import "./Header.css";

export default function Header({ title }: { title: string }) {
  return (
    <div className="header" data-testid="header">
      <img data-testid="icon" src="/assets/sketch-logo.svg" alt="Sketch" />
      <img
        className="separator"
        data-testid="separator"
        src="/assets/separator.svg"
        alt="Separator"
      />
      {title}
    </div>
  );
}
