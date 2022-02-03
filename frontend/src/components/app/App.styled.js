import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left:200px;
`;

export const Container = styled.div`
  width: 734px;
  height: 574px;
  background: ${(props) => (props.themes ? "#FFFF" : "#2F3240")};
  box-shadow: 0 3px 10px #030207;
  border-radius: 20px;
  color: ${(props) => (props.themes ? "#1F1A26" : "#F2F2F2")};
`;
