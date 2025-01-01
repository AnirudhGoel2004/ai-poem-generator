import React from "react";

const LengthSelector = ({ length, setLength }) => (
  <div>
    <label>Length:</label>
    <select value={length} onChange={(e) => setLength(e.target.value)}>
      <option value="short">Short</option>
      <option value="medium">Medium</option>
      <option value="long">Long</option>
    </select>
  </div>
);

export default LengthSelector;
