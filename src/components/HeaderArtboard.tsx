import React, { KeyboardEventHandler } from "react";
import "./HeaderArtboard.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function HeaderArtboard({ title }: { title: string }) {
  return (
    <div className="header-artboard" data-testid="header">
      <div className="left">
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
          <span>4</span>
          <img src="/assets/breadcrumb.svg" alt="Breadcrumb" />
          <span>8</span>
          <button>
            <img
              data-testid="artboard-navigation-right"
              src="/assets/arrow-right.svg"
            />
          </button>
        </div>
      </div>
      <div className="center">{title}</div>
      <div className="right"></div>
    </div>
  );
}
