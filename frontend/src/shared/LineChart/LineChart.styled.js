import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;

  span {
    font-size: 1rem;
    color: ${(props) => (props.themes ? "#0FBFBF" : "#1DA1F2")};
    margin-bottom: 4px;
  }
`;

export const ProgressBar = styled.div`
  height: 14px;
  border-radius: 3px;
  background-color: ${(props) => (props.color ? props.color : "")};
  width: ${(props) => (props.percentage ? props.percentage : 0)}%;
  transition: 0.5s ease;
`;
