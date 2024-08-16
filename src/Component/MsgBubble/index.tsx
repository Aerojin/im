import React from "react"
import { IMsgBubble, IPureMsg } from "../../Interface"
import cns from "../../Utils/ToClass.ts"
import style from "./index.module.scss"
import { is } from '../../../node_modules/w3c-hr-time/lib/calculate-clock-offset';
import { blueDark } from '../../../node_modules/@ant-design/colors/es/presets';

export default function MsgBubble({ data, isMe }: IMsgBubble) {
  const renderContent = (message: IPureMsg) => {
    switch (message.type) {
      case "text":
        return message.content
      case "image":
        return (
          <img className={cns([style.img_content])} src={message.content} />
        )
      default:
        break
    }
  }

  return (
    <div
      className={cns([
        style.text_content,
        style.arrow,
        isMe ? style.arrow_blue: '',
        isMe ? style.text_blue: '',
        isMe ? style.arrow_right : style.arrow_left,
      ])}>
      {renderContent(data)}
    </div>
  )
}
