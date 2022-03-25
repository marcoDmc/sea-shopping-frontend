import styled from "styled-components";

export const Header = styled.header`
  background: ${(props) => (props.themes ? "#f2f2f2" : "#0C0C0F")};
  width: 100%;
  max-width: 1000px;
  padding: 1.5rem 1.5rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 3px 10px #030207;
  position: relative;
  margin-top: 10px;

  h1 {
    font-size: 1.5rem;
    font-weight: normal;
    color: ${(props) => (props.themes ? "#030207" : "#F2F2F2")};
  }

  @media (max-width: 856px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
export const Nav = styled.nav`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0 2em;
  gap: 1.5rem;

  @media (max-width: 688px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 400px;

    input {
      width: 100%;
    }
  }
`;
export const Options = styled.optgroup`
  background: #fff;

  option {
    color: #000;
  }
`;
export const Select = styled.select`
  color: rgb(229, 77, 80);
  font-size: 1rem;
  font-weight: bold;
  background: transparent;

  border: none;
  background: transparent;
  outline: none;
`;
export const Input = styled.input`
  padding: 5px;
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
  background: transparent;

  ::placeholder {
    color: grey;
  }
`;
export const Button = styled.button`
  width: 100%;
  max-width: 120px;
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
`;
export const Wrapper = styled.div`
  label {
    color: #ff05c0;
  }
`;
