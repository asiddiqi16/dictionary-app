import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import WordMeaning from "./WordMeaning";

export default function Dictionary() {
  // Dictionary word lookup state
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  // Dictionary api key
  const apiKey = "483ecb596o30da81tf76d2a4bf19d4a6";

  // Function to display the searched word details
  function DisplayMeaning(response) {
    setResults(response.data);
    let inputElement = document.querySelector("#search");
    inputElement.value = "";
  }

  // Function to update teh state of the input keyword
  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  // Function to perform the API call
  function lookUp(event) {
    event.preventDefault();
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiURL).then(DisplayMeaning);
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
            placeholder="Enter a word"
          />
        </form>
        <div className="" id="word-meaning">
          <WordMeaning results={results} />
        </div>
      </div>
    </div>
  );
}
