import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return <p className="Example">"{props.example}"</p>;
  } else return null;
}
