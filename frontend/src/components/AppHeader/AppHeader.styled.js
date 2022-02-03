import styled from "styled-components";

export const Wrapper = styled.header`
  height: 70px;
  background-color: #364159;
  color: ${(props) => (props.themes ? "#F2B441" : "#f2ebc9")};
  font-size: 24px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  text-transform: capitalize;
  padding: 0 32px;
  align-items: center;
  justify-content: space-around;
  gap: 10px;

  span {
    font-weight: 700;
    margin-left: 8px;
  }

  .themes {
    flex: 1;
    display: flex;
    justify-content: end;
    font-size: 2rem;
    position: relative;

    .sun {
      color: #f29f05;
      cursor: pointer;
      display: ${(props) => (props.themes ? "flex" : "none")};
      animation: 0.5s linear 0.5s both sliding;
      :hover {
        opacity: 0.8;
        transition: 0.4s ease;
      }
    }

    .moon {
      color: #6b57dc;
      display: ${(props) => (props.themes ? "none" : "flex")};

      cursor: pointer;
      animation: 0.5s linear 0.5s both sliding;
      :hover {
        opacity: 0.8;
        transition: 0.4s ease;
      }
    }

    @keyframes sliding {
      0% {
        transform: translateX(-20px);
      }
      100% {
        transform: translateX(20px);
      }
    }
  }
`;
