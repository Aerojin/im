import React from "react";
import { Button } from "antd";
import ToolBar from "../ToolBar";
import MessageInput from "../MessageInput";
import "./index.css";

const Footer = () => {
  return (
    <div className="wdk-im-footer">
      <ToolBar />
      <MessageInput />
      <div className="wdk-im-footer-send">
        <Button type="primary">发送</Button>
      </div>
    </div>
  );
};

export default Footer;
