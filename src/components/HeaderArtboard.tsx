import "./HeaderArtboard.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import { useEffect, useState } from "react";

export default function HeaderArtboard({ title, callback }: { title: string, callback?: any }) {
  const artboards = getLocalStorage("artboards");

  const forwardArtboard = () => {
    let artboardId = parseInt(getLocalStorage("artboardId"));
    const newCounter = artboardId - 1;

    if (artboards.length === newCounter || newCounter < 0) {
      return;
    }

    setLocalStorage("artboardId", newCounter.toString());
    callback(newCounter);
    updateNavigation();
  };

  const previousArtboard = () => {
    let artboardId = parseInt(getLocalStorage("artboardId"));
    const newCounter = artboardId + 1;

    if (artboards.length === newCounter) {
      return;
    }

    setLocalStorage("artboardId", newCounter.toString());
    callback(newCounter);
    updateNavigation();
  };

  const [navigationArtboard, setNavigationArtboard] = useState({
    left: 0,
    right: 0,
  });

  // Initialize the navigation buttons
  useEffect(() => {
    updateNavigation();
  }, []);

  const updateNavigation = () => {
    const artboardId = parseInt(getLocalStorage("artboardId"));

    // Initialize the navigation
    setNavigationArtboard((prevState) => {
      const left = artboardId + 1;
      const right = artboards?.length;
      return { ...prevState, left, right };
    });
  };

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
          <button onClick={forwardArtboard}>
            <img
              data-testid="artboard-navigation-left"
              src="/assets/arrow-left.svg"
            />
          </button>
          <span>{navigationArtboard.left}</span>
          <img src="/assets/breadcrumb.svg" alt="Breadcrumb" />
          <span>{navigationArtboard.right}</span>
          <button onClick={previousArtboard}>
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
