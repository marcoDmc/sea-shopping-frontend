import styled from "styled-components";

export const Wrapper = styled.div``;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  text-transform: lowercase;
  height: 32px;

  color: ${(props) => (props.themes ? "#ffff" : "#E52B64")};
`;

export const Array = styled.div`
  height: 424px;
  overflow-y: auto;
`;
