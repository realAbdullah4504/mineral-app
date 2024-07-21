import React from "react";
import { Flex, Progress } from "antd";

function ProgressPercentage({ percent, step, total = 4 }) {
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
          <span className="progress-percentage-steps">
            Step {step} of {total}{" "}
          </span>
        </div>
        <Progress percent={percent} size="small" strokeColor="green" showInfo={false} />
      </div>
    </Flex>
  );
}

export default ProgressPercentage;
