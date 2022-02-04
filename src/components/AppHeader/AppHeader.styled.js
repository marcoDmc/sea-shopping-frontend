import styled from "styled-components";

export const Wrapper = styled.header`
  height: 70px;
  background: ${(props) =>
    props.themes
      ? "#F2F2F2"
      : "linear-gradient(to left,  rgb(111, 9, 144), rgb(200, 47, 142), rgb(229, 77, 80))"};
  color: ${(props) => (props.themes ? "#E52B64" : "#F2F2F2")};
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
      color: #e52b64;
      cursor: pointer;
      display: ${(props) => (props.themes ? "flex" : "none")};
      animation: 0.5s linear 0.5s both sliding;
      :hover {
        opacity: 0.8;
        transition: 0.4s ease;
      }
    }

    .moon {
      color:#0C0C0F;
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
