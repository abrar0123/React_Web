import React from "react";

export default function card(props) {
  return (
    <div
      ref={props.ref}
      style={props.style}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}
