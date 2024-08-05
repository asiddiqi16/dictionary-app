import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import WordMeaning from "./WordMeaning";

export default function Dictionary() {
  // Dictionary word lookup state
  let [keyword, setKeyword] = useState("Dictionary");
  let [results, setResults] = useState(null);
  let [refresh, setRefresh] = useState(false);
  // Dictionary api key
  const apiKey = "483ecb596o30da81tf76d2a4bf19d4a6";
  // Function to handle incorrect words
  function invalidWord() {
    let inputElement = document.querySelector("#search");
    inputElement.value = "Invalid word";
  }
  // Function to display the searched word details
  function DisplayMeaning(response) {
    console.log(response);
    if (Object.keys(response.data).includes("message")) {
      invalidWord();
    } else {
      setResults(response.data);
      let inputElement = document.querySelector("#search");
      inputElement.value = "";
    }
  }

  // Function to update teh state of the input keyword
  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  // Function to perform the API call
  function lookUp() {
    let apiURL = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios
      .get(apiURL)
      .then(DisplayMeaning)
      .catch(function (error) {
        console.log(error);
        invalidWord();
      });
  }

  // Function to handle the form submit
  function handleSubmit(event) {
    event.preventDefault();
    lookUp();
  }
  if (refresh) {
    return (
      <div className="container-fluid">
        <div className="Dictionary">
          <form onSubmit={handleSubmit}>
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
          <p className="Hint">Hint: suggested words - sunset, books, map</p>
          <div className="" id="word-meaning">
            <WordMeaning results={results} />
          </div>
        </div>
      </div>
    );
  } else {
    setRefresh(true);
    lookUp();
  }
}
