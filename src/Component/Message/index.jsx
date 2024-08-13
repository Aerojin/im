import React from "react";
import { Button, Popover } from "antd";
import Layout from "../Layout";
import "./index.css";

const Message = (props) => {
  const { children } = props || {};

  console.log(111);

  return (
  <Popover content={<Layout/>} trigger="click">
    {children}
  </Popover>
  );
};

export default Message;
