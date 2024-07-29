import React from "react";
import { Flex, Spin  } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

export const Loader = () => {
  return (
    <Flex align="center" gap="middle">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    </Flex>
  );
};
