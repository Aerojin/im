import React from "react";
// import { Image } from "antd";
import EmojiToolbar from "../EmojiToolbar";
import ImageToolbar from "../ImageToolbar";
import "./index.css";

const ToolBar = (props = {}) => {
  const { messageContext } = props || {};

  console.log(77, props);

  const insertText = (val) => {
    console.log(222, val,  messageContext);
    messageContext.current.insertText(val);
  };

  return (
    <ul className="wk-conversation-chattoolbars">
      <li className="wk-conversation-chattoolbars-item">
        <EmojiToolbar insertText={insertText} />
      </li>
      <li className="wk-conversation-chattoolbars-item">
        <img
          src="./assets/toolbars/func_screenshot.svg"
          width={20}
          height={20}
        />
      </li>
      <li className="wk-conversation-chattoolbars-item">
        <ImageToolbar icon="./assets/toolbars/func_upload_image.svg" />
      </li>

      {/* <SmileOutlined style={{ fontSize: 23, marginRight:15, cursor: 'pointer' }} /> */}
    </ul>
  );
};

export default ToolBar;
