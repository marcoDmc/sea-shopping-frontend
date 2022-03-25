import * as C from "./navbar.styled";
import React from "react";

const NavBar = ({
  handleSubmitForm,
  setName,
  setPrice,
  price,
  name,
  setStatusRadio,
  themes,
}) => {
  return (
    <C.Header price={price} name={name} themes={themes}>
      <h1>create item</h1>

      <C.Nav>
        <label htmlFor="name"></label>

        <C.Input
          type="text"
          id="name"
          name="name"
          value={name}
          placeholder="name"
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="price"></label>

        <C.Input
          type="text"
          id="price"
          value={price}
          name="price"
          placeholder="price"
          onChange={(event) => setPrice(event.target.value)}
        />

        <C.Button onClick={handleSubmitForm}>send</C.Button>
      </C.Nav>
      <C.Wrapper>
        <label htmlFor="options">categories:</label>
        <C.Select
          name="options"
          onClick={(event) => setStatusRadio(event.target.value)}
        >
          <C.Options label="options">
            <option value="healthy">healthy</option>
            <option value="junk">junk</option>
            <option value="cleaning">cleaning</option>
            <option value="others">others</option>
          </C.Options>
        </C.Select>
      </C.Wrapper>
    </C.Header>
  );
};

export default NavBar;
