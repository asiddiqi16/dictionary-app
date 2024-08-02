import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  function lookUp(event) {
    event.preventDefault();
  }
  return (
    <div className="container-fluid">
      <div className="Dictionary">
        <form onSubmit={lookUp}>
          <input
            type="search"
            name="search"
            id="search"
            className="me-3"
            required
            autoFocus={true}
            onChange={updateKeyword}
          />
          <input type="submit" value="Look Up Word" />
        </form>
      </div>
    </div>
  );
}
