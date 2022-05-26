import React from "react";

function Sort({ setSortValue }) {
  return (
    <div>
      <label>
        <h5>Sort Pigs by:</h5>
        <select
          style={{ marginLeft: "10px", marginBottom: "2rem" }}
          onChange={(e) => setSortValue(e.target.value)}
        >
          <option>None</option>
          <option>Name</option>
          <option>Weight</option>
        </select>
      </label>
    </div>
  );
}

export default Sort;
