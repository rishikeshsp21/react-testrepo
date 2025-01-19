import React, { useEffect, useState } from "react";
import axios from "axios";

function MemeGallery({ setSelectedMeme }) {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((response) => {
        if (response.data.success) {
          setMemes(response.data.data.memes);
        } else {
          console.error("Failed to fetch memes");
        }
      })
      .catch((error) => console.error("Error fetching memes:", error));
  }, []);

  return (
    <div className="meme-gallery">
      {memes.map((meme) => (
        <img
          key={meme.id}
          src={meme.url}
          alt={meme.name}
          onClick={() => setSelectedMeme(meme)}
          style={{ cursor: "pointer", width: "200px", margin: "10px" }}
        />
      ))}
    </div>
  );
}

export default MemeGallery;
