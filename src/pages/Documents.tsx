import React, { useEffect, useState } from "react";
import Artboard from "../components/Artboard";
import Header from "../components/Header";
import { IDocument } from "../models/document.interface";
import "./Documents.css";

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
      });
  }, []);

  return (
    <div>
      <Header title={document.title} />

      <section className="grid-documents">
        <Artboard
          title="Artboard title"
          image="https://via.placeholder.com/300x300"
        />
        <Artboard
          title="Artboard title"
          image="https://via.placeholder.com/300x300"
        />
        <Artboard
          title="Artboard title"
          image="https://via.placeholder.com/300x300"
        />
        <Artboard
          title="Artboard title"
          image="https://via.placeholder.com/300x300"
        />
        <Artboard
          title="Artboard title"
          image="https://via.placeholder.com/300x300"
        />
        <Artboard
          title="Artboard title"
          image="https://via.placeholder.com/300x300"
        />
      </section>
    </div>
  );
}
