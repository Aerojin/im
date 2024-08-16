import React from "react";
// import { Button, Popover } from "antd";
import Conversation from "../Conversation/index.tsx";
import ScrollWrapper from "../ScrollWrapper/index.tsx";

import { messageList, my } from "./data.ts";
import "./index.css";

// const WrappedChatRecordList = ScrollWrapper(Conversation)

const Content = (props) => {
  // const { children } = props || {};
  const p = {
    data: messageList,
    me: my,
    style: { height: 360, width: 500 },
  };
  return (
    <div className="wdk-im-content">
      <ScrollWrapper {...p}>
        <Conversation {...p} />
      </ScrollWrapper>
    </div>
  );
};

export default Content;
