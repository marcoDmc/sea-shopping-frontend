import React from "react";
import { RiSunFoggyFill } from "react-icons/ri";
import { RiMoonFoggyFill } from "react-icons/ri";
import { Wrapper } from "./AppHeader.styled";

function AppHeader({ handleTheme, themes }) {
  return (
    <Wrapper themes={themes}>
      sea 
      <span>Shopping</span>
      <div className="themes">
        <RiSunFoggyFill className="sun" onClick={handleTheme} />
        <RiMoonFoggyFill className="moon" onClick={handleTheme} />
      </div>
    </Wrapper>
  );
}

export default AppHeader;
