import React from "react";

function Filter({ handleShowGreased }) {

  return (
    <div>
      <label>
        <input
          type="checkbox"
          style={{ marginBottom: "2rem", marginRight: "8px" }}
          onChange={handleShowGreased}
        />
        Only show greased pigs
      </label>
    </div>
  );
}

export default Filter;
