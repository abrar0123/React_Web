import React from "react";

export default function card(props) {
  return <div className={props.className}>{props.children}</div>;
}
