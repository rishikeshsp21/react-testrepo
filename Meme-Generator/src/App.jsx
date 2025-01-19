import React, { useState } from "react";
import MemeGallery from "./components/MemeGallery";
import MemePreview from "./components/MemePreview";
import "./styles.css";

function App() {
  const [selectedMeme, setSelectedMeme] = useState(null);

  return (
    <div>
      <h1>Meme Generator</h1>
      <MemeGallery setSelectedMeme={setSelectedMeme} />
      {selectedMeme && <MemePreview meme={selectedMeme} />}
    </div>
  );
}

export default App;
