import React from "react";
import { Flex, Progress } from "antd";

function ProgressPercentage({ percent, step }) {
  console.log(percent, "percent");
  return (
    <Flex
      vertical
      gap="small"
      style={{
        width: 180,
        position: "relative",
      }}
    >
      <div className="progress-container">
        <div className="progress-percentage">
          <span className="progress-percentage-value">{percent}%</span>
          <span className="progress-percentage-steps">Step {step} of 4 </span>
        </div>
        <Progress percent={percent} size="small" strokeColor="green" showInfo={false} />
      </div>
    </Flex>
  );
}

export default ProgressPercentage;
