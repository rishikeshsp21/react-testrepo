import React, { useState } from "react";
import { toPng } from "html-to-image";

function MemePreview({ meme }) {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  const downloadMeme = () => {
    const node = document.getElementById("meme-preview");
    toPng(node)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "meme.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => console.error("Error downloading meme:", error));
  };

  return (
    <div>
      <h2>Customize Your Meme</h2>
      <input
        type="text"
        placeholder="Top text"
        value={topText}
        onChange={(e) => setTopText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bottom text"
        value={bottomText}
        onChange={(e) => setBottomText(e.target.value)}
      />
      <div
        id="meme-preview"
        style={{
          position: "relative",
          width: "400px",
          margin: "20px auto",
          textAlign: "center",
        }}
      >
        <img src={meme.url} alt={meme.name} width="100%" />
        <h2
          style={{
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          {topText}
        </h2>
        <h2
          style={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "white",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
          }}
        >
          {bottomText}
        </h2>
      </div>
      <button onClick={downloadMeme}>Download Meme</button>
    </div>
  );
}

export default MemePreview;
