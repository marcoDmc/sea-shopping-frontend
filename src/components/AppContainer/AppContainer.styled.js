import styled from "styled-components";

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 24px;
  padding: 24px;
 

  .left,
  .midle {
    h2 {
      color: ${(props) => (props.themes ? "#E52B64" : "#8F61F2")};
    }
  }

  .right {
    p {
      color: ${(props) => (props.themes ? "#E52B64" : "#8F61F2")};
      margin-bottom: 4px;
    }
  }
`;
