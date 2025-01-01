import React, { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import ThemeSelector from "./components/ThemeSelector";
import LengthSelector from "./components/LengthSelector";
import PoemOutput from "./components/PoemOutput";

const App = () => {
  const [mood, setMood] = useState("");
  const [theme, setTheme] = useState("");
  const [length, setLength] = useState("");
  const [poem, setPoem] = useState("");

  const generatePoem = async () => {
    const response = await fetch("http://127.0.0.1:5000/generate_poem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mood, theme, length }),
    });
    const data = await response.json();
    setPoem(data.poem);
  };

  return (
    <div>
      <h1>AI Poem Generator</h1>
      <MoodSelector mood={mood} setMood={setMood} />
      <ThemeSelector theme={theme} setTheme={setTheme} />
      <LengthSelector length={length} setLength={setLength} />
      <button onClick={generatePoem}>Generate Poem</button>
      <PoemOutput poem={poem} />
    </div>
  );
};

export default App;
