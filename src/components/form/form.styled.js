import styled from "styled-components";

const Wrapper = styled.form`
  background: ${(props) => (props.themes ? "#fff" : "#0C0C0F")};
  width: 250px;
  height: 400px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  position: fixed;
  top: 50px;
  left: 100px;
  box-shadow: 0 3px 10px #030207;

  h1 {
    color: ${(props) => (props.themes ? "#030207" : "#F2F2F2")};
    font-size: 1.4rem;
  }

  input[type="text"] {
    padding: 5px;
    width: 90%;
    font-size: 1rem;
    outline: none;
    border: 2px solid #f2f2f2;
    border-style: solid;
    border-width: 2px;
    border-image: linear-gradient(
        45deg,
        rgb(111, 9, 144),
        rgb(200, 47, 142),
        rgb(229, 77, 80)
      )
      1;
    color: ${(props) => (props.themes ? "#030207" : "#fff")};
    background: ${(props) => (props.themes ? "#fff" : "#030207")};
  }
  .radios {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 5px;
    gap: 4px;

    span {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;

      label {
        font-size: 0.9rem;
        color: ${(props) => (props.themes ? "#030207" : "#ffff")};
      }
    }
  }

  button {
    width: 90%;
    padding: 5px;
    text-transform: uppercase;
    background: linear-gradient(
      to right,
      rgb(111, 9, 144),
      rgb(200, 47, 142),
      rgb(229, 77, 80)
    );
    border: 1px solid #271b5b;
    outline: none;
    border-radius: 5px;
    color: #f2f2f2;
    font: bold 1rem sans-serif;

    :hover {
      opacity: 0.7;
      transition: 0.4s ease;
    }
  }
`;
const Label = styled.label``;
const Span = styled.span``;
const Button = styled.button``;
const Title = styled.h1``;
const Input = styled.input``;

export { Wrapper, Label, Span, Button, Title, Input };
