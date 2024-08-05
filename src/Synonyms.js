import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map((syn, index) => {
          return (
            <li key={index} className="pe-3">
              {syn}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
