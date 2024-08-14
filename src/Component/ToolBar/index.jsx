import React from "react";
// import { Image } from "antd";
import EmojiToolbar from "../EmojiToolbar";
import "./index.css";

const ToolBar = () => {
  return (
    <ul className="wk-conversation-chattoolbars">
      <li className="wk-conversation-chattoolbars-item">
        <EmojiToolbar />
      </li>
      <li className="wk-conversation-chattoolbars-item">
        <img src="./assets/toolbars/func_screenshot.svg" width={20} height={20} />
      </li>
      <li className="wk-conversation-chattoolbars-item">
        <img src="./assets/toolbars/func_upload_image.svg" width={20} height={20} />
      </li>

      {/* <SmileOutlined style={{ fontSize: 23, marginRight:15, cursor: 'pointer' }} /> */}
    </ul>
  );
};

export default ToolBar;
