import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 10px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 574px;
  background: ${(props) => (props.themes ? "#FFFF" : "#0C0C0F")};
  box-shadow: 0 3px 10px #030207;
  border-radius: 20px;
  color: ${(props) => (props.themes ? "#1F1A26" : "#F2F2F2")};
`;
