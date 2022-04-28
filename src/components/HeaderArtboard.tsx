import React, { KeyboardEventHandler } from "react";
import "./HeaderArtboard.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function HeaderArtboard({ title }: { title: string }) {
  return (
    <div className="header" data-testid="header">
      <Link to="/" className="close-button" data-testid="close-button">
        <img data-testid="close-image" src="/assets/close.svg" alt="Close" />
      </Link>
      <img
        className="separator"
        data-testid="separator"
        src="/assets/separator.svg"
        alt="Separator"
      />
      <div className="artboard-navigation" data-testid="artboard-navigation">
        <button>
          <img
            data-testid="artboard-navigation-left"
            src="/assets/arrow-left.svg"
          />
        </button>
        <button>
          <img
            data-testid="artboard-navigation-right"
            src="/assets/arrow-right.svg"
          />
        </button>
      </div>
      {title}
    </div>
  );
}
