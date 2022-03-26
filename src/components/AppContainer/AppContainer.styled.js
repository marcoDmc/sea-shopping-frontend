import styled from "styled-components";

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  height:100%;

  .left,
  .midle {
    height: 100%;
    max-height: 400px;
    h2 {
      color: ${(props) => (props.themes ? "#E52B64" : "#8F61F2")};
    }
  }

  .right {
    height: 100%;
    max-height: 400px;
    p {
      color: ${(props) => (props.themes ? "#E52B64" : "#8F61F2")};
      margin-bottom: 4px;
    }
  }

  @media (max-width: 675px) {
    height: 100%;
    min-height:50vh;
    display: flex;
    flex-direction: column;
  }
`;
