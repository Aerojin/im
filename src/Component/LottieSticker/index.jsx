import { MessageContent } from "wukongimjssdk"
// import React from "react"
import { MessageContentTypeConst } from "../../Constant"

export class LottieSticker extends MessageContent {
    url = '';
    category = '';
    placeholder = '';
    format = '';
    decodeJSON(content) {
        this.url = content["url"] || ""
        this.category = content["category"] || ""
        this.placeholder = content["placeholder"] || ""
        this.format = content["format"] || ""
    }
    get conversationDigest() {
        return "[贴图]"
    }
    encodeJSON() {
        return {url:this.url||"",category:this.category||"",placeholder:this.placeholder||"",format:this.format||""}
    }
    get contentType() {
        return MessageContentTypeConst.lottieSticker
    }
    
}

