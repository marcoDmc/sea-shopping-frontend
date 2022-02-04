import React from "react";
import { Wrapper } from "./AppContainer.styled";

function AppContainer({ left, middle, right, themes }) {
  return (
    <Wrapper themes={themes}>
      <div className="left">{left}</div>
      <div className="midle">{middle}</div>
      <div className="right">{right}</div>
    </Wrapper>
  );
}

export default AppContainer;
