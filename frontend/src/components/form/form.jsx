import * as C from "./form.styled";
import React from "react";
import Radio from "@mui/material/Radio";
import { purple } from "@mui/material/colors";

const Form = ({
  handleSubmitForm,
  setName,
  setPrice,
  price,
  name,
  setStatusRadio,
  themes,
}) => {
  const [selectedValue, setSelectedValue] = React.useState("healthy");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setStatusRadio(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
  });
  return (
    <C.Wrapper
      onSubmit={handleSubmitForm}
      price={price}
      name={name}
      themes={themes}
    >
      <C.Title>create item</C.Title>
      <C.Label htmlFor="name"></C.Label>

      <C.Input
        type="text"
        id="name"
        name="name"
        value={name}
        placeholder="name"
        onChange={(event) => setName(event.target.value)}
      />

      <C.Label htmlFor="price"></C.Label>

      <C.Input
        type="text"
        id="price"
        value={price}
        name="price"
        placeholder="price"
        onChange={(event) => setPrice(event.target.value)}
      />

      <C.Label htmlFor="radios" className="radios">
        <span>
          <label>healthy</label>
          <Radio
            {...controlProps("healthy")}
            sx={{
              color: purple[800],
              "&.Mui-checked": {
                color: purple[600],
              },
            }}
          />
        </span>
        <span>
          <label>junk</label>
          <Radio
            {...controlProps("junk")}
            sx={{
              color: purple[800],
              "&.Mui-checked": {
                color: purple[600],
              },
            }}
          />
        </span>

        <span>
          <label>cleanning</label>
          <Radio
            {...controlProps("cleanning")}
            sx={{
              color: purple[800],
              "&.Mui-checked": {
                color: purple[600],
              },
            }}
          />
        </span>
        <span>
          <label>others</label>
          <Radio
            {...controlProps("others")}
            sx={{
              color: purple[800],
              "&.Mui-checked": {
                color: purple[600],
              },
            }}
          />
        </span>
      </C.Label>

      <C.Button>send</C.Button>
    </C.Wrapper>
  );
};

export default Form;
