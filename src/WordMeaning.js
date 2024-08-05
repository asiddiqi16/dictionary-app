import React from "react";
import "./WordMeaning.css";
import Synonyms from "./Synonyms";

export default function WordMeaning(props) {
  if (props.results !== null) {
    console.log(props.results.word);
    return (
      <div className="word-meaning">
        <h2>{props.results.word}</h2>
        <p>{props.results.phonetic}</p>
        <div className="definitions">
          {props.results.meanings.map((meaning, index) => {
            return (
              <div key={index}>
                <p>{meaning.partOfSpeech}</p>
                <p>{meaning.definition}</p>
                <p className="example">{meaning.example}</p>
                <Synonyms synonyms={meaning.synonyms} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
