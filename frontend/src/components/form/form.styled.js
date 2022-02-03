import styled from "styled-components";

const Wrapper = styled.form`
  background: #030207;
  width: 250px;
  height: 400px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  position: fixed;
  left: 100px;
  top: 50px;
  /* background: #2F3240; */
  box-shadow: 0 3px 10px #030207;

  h1 {
    color: #fff;
    font-size: 1.4rem;
  }

  input[type="text"] {
    padding: 5px;
    width: 90%;
    font-size: 1rem;
    outline: none;
    border: none;
    border-bottom: 2px solid #8f61f2;
    /* background: #2F3240; */
    color: #fff;
    background: #030207;
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
        color: #ffff;
      }
    }
  }

  button {
    width: 90%;
    padding: 5px;
    text-transform: uppercase;
    background: #4a35bb;
    border: 1px solid #271b5b;
    outline: none;
    border-radius: 10px;

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
