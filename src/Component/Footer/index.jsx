import React from "react";
import { Button, Input } from "antd";
import ToolBar from "../ToolBar";
import "./index.css";

const { TextArea } = Input;

const Footer = (props) => {
  // const { children } = props || {};

  return (
    <div className="wdk-im-footer">
      <ToolBar />
      <div className="wdk-im-footer-textarea-box">
        <TextArea className="wdk-im-textarea" placeholder="按 Ctrl + Enter 换行，按 Enter 发送"/>
      </div>
      <div className="wdk-im-footer-send">
        <Button type="primary">发送</Button>
      </div>
    </div>
  );
};

export default Footer;
