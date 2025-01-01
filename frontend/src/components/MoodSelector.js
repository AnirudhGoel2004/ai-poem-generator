import React from "react";

const MoodSelector = ({ mood, setMood }) => (
  <div>
    <label>Mood:</label>
    <select value={mood} onChange={(e) => setMood(e.target.value)}>
      <option value="happy">Happy</option>
      <option value="sad">Sad</option>
      <option value="romantic">Romantic</option>
      <option value="inspirational">Inspirational</option>
    </select>
  </div>
);

export default MoodSelector;
