import React from "react";
// import { Button, Popover } from "antd";
import {
  SmileOutlined,
  ScissorOutlined,
  FileImageOutlined,
} from "@ant-design/icons";
import "./index.css";

const ToolBar = (props) => {
  // const { children } = props || {};

  return (
    <div className="wdk-im-header">
      <SmileOutlined style={{ fontSize: 23, marginRight:15, cursor: 'pointer' }} />
      <FileImageOutlined style={{ fontSize: 23, marginRight: 15, cursor: 'pointer' }} />
      <ScissorOutlined style={{ fontSize: 23, cursor: 'pointer' }} />
    </div>
  );
};

export default ToolBar;
