import React from "react";
import "./KeyWordImage.css";

export default function KeyWordImage(props) {
  console.log(props);
  if (props.photos) {
    return (
      <div className="KeyWordImage">
        {props.photos.map((photo, index) => {
          return (
            <img
              className="img-fluid col"
              src={photo.src.landscape}
              alt={photo.alt}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}
