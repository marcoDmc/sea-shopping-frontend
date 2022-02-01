import React from "react";
import { Wrapper, ProgressBar } from "./LineChart.styled";

function LineChart({ title, percentage, color, themes }) {
  return (
    <Wrapper themes={themes}>
      <span>{title}:</span>
      <ProgressBar color={color} percentage={percentage} />
    </Wrapper>
  );
}

export default LineChart;
