import React from "react";
import "./WordMeaning.css";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function WordMeaning(props) {
  if (props.results !== null) {
    return (
      <div className="word-meaning container-fluid">
        <h2>{props.results.word}</h2>
        <p className="phonetic">{props.results.phonetic}</p>
        <div className="definitions">
          {props.results.meanings.map((meaning, index) => {
            return (
              <div key={index}>
                <p className="part-of-speech">{meaning.partOfSpeech}</p>
                <p className="Definition">{meaning.definition}</p>
                <Example example={meaning.example} />
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
