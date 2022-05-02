import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Artboard from "../components/Artboard";
import Header from "../components/Header";
import { IDocument } from "../models/document.interface";
import "./Documents.css";
import { setLocalStorage } from "../utils/localStorage";

export default function DocumentsPage() {
  const [document, setDocument] = useState({} as IDocument);
  const [artboards, setArtboards] = useState([]);

  // TODO: Separate this into a custom hook
  useEffect(() => {
    const dataQuery = `
    {
      share(id: "e981971c-ff57-46dc-a932-a60dc1804992") {
        identifier
        version {
          document {
            name
            artboards {
              entries {
                name
                isArtboard
                files {
                  url
                  height
                  width
                  scale
                  thumbnails {
                    url
                    height
                    width
                  }
                }
              }
            }
          }
        }
      }
    }
    `;

    // Fetch graphql data
    fetch("https://graphql.sketch.cloud/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: dataQuery,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setDocument({
          id: response.data.share.identifier,
          title: response.data.share.version.document.name,
        });
        setArtboards(response.data.share.version.document.artboards.entries);
        setLocalStorage(
          "artboards",
          response.data.share.version.document.artboards.entries
        );
      });
  }, []);

  return (
    <div>
      <Header title={document.title} />

      <section className="grid-documents">
        {artboards.map((artboard: any, index: number) => (
          <Link
            to={`/artboard`}
            key={index}
            state={{ artboardId: index, artboardName: artboard.name }}
            className="link"
          >
            <Artboard
              title={artboard.name}
              maxHeight={true}
              image={artboard.files[0].thumbnails[1].url}
            />
          </Link>
        ))}
      </section>
    </div>
  );
}
