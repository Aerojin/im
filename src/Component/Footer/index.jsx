import React, { useRef } from "react";
import { Button } from "antd";
import ToolBar from "../ToolBar";
import MessageInput from "../MessageInput";
import "./index.css";

const Footer = () => {
  const messageContext =  useRef();

  console.log(111, messageContext);

  window.aaa = messageContext;

  return (
    <div className="wdk-im-footer">
      <ToolBar messageContext={messageContext} />
      <MessageInput onContext={(ctx) => { messageContext.current = ctx }} />
      <div className="wdk-im-footer-send">
        <Button type="primary">发送</Button>
      </div>
    </div>
  );
};

export default Footer;
