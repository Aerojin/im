import React from "react";
import { Popover } from "antd";
import Layout from "../Layout/index.tsx";
import "./index.css";

const Message = (props) => {
  const { children } = props || {};


  return <div className="wdk-im-overlay"><Layout/></div>;

  return (
  <Popover content={<Layout/>} overlayClassName="wdk-im-overlay" trigger="click" placement="leftBottom">
    {children}
  </Popover>
  );
};

export default Message;
