import React from "react";

const ThemeSelector = ({ theme, setTheme }) => (
  <div>
    <label>Theme:</label>
    <input
      type="text"
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      placeholder="Enter a theme"
    />
  </div>
);

export default ThemeSelector;
