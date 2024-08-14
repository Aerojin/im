import React, { Component } from "react";
import {  notification } from "antd";
import clazz from "classnames";
import hotkeys from "hotkeys-js";
import { MentionsInput, Mention } from "react-mentions";
import InputStyle from "./defaultStyle";
import "./index.css";

export class MentionModel {
  all = false;
  uids = [];
}

class MemberSuggestionDataItem {
  id = "";
  display = "";
  icon = "";
}

// const MessageInput = (props) => {
//   // const { children } = props || {};
//   return (
//     <div className="wdk-im-footer-textarea-box">
//       <TextArea
//         className="wdk-im-textarea"
//         placeholder="按 Ctrl + Enter 换行，按 Enter 发送"
//       />
//     </div>
//   );
// };

class MessageInput extends Component {
  constructor(props = {}) {
    super(props);
    this.toolbars = [];
    this.state = {
      value: "",
      mentionCache: {},
      quickReplySelectIndex: 0,
    };
    if (props.onAddMention) {
      props.onAddMention(this.addMention.bind(this));
    }
  }
  componentDidMount() {
    const self = this;
    const scope = "messageInput";
    hotkeys.filter = function (event) {
      return true;
    };
    hotkeys("ctrl+enter", scope, function (event, handler) {
      const { value } = self.state;
      self.setState({
        value: value + "\n",
        mentionCache: {},
      });
    });
    hotkeys.setScope(scope);

    const { onInsertText, onContext } = this.props;
    if (onInsertText) {
      onInsertText(this.insertText.bind(this));
    }

    if (onContext) {
      onContext(this);
    }
  }

  componentWillUnmount() {
    const scope = "messageInput";
    hotkeys.unbind("ctrl+enter", scope);

    if (this.eventListener) {
      document.removeEventListener("keydown", this.eventListener);
    }
  }

  handleKeyPressed(e) {
    if (e.charCode !== 13) {
      //非回车
      return;
    }
    if (e.charCode === 13 && e.ctrlKey) {
      // ctrl+Enter不处理
      return;
    }
    e.preventDefault();

    this.send();
  }

  send() {
    console.log("--send--", this.state.value);

    const { value } = this.state;
    if (value && value.length > 1000) {
      notification.error({
        description: "输入内容长度不能大于1000字符！",
      });
      return;
    }
    if (this.props.onSend && value && value.trim() !== "") {
      let formatValue = this.formatMentionText(value);
      let mention = this.parseMention(formatValue);
      this.props.onSend(formatValue, mention);
    }
    this.setState({
      value: "",
      quickReplySelectIndex: 0,
      mentionCache: {},
    });
  }

  formatMentionText(text) {
    let newText = text;
    let mentionMatchResult = newText.match(/@([^ ]+) /g);
    if (mentionMatchResult && mentionMatchResult.length > 0) {
      for (let i = 0; i < mentionMatchResult.length; i++) {
        let mentionStr = mentionMatchResult[i];
        let name = mentionStr.replace("@[", "@").replace("]", "");
        newText = newText.replace(mentionStr, name);
      }
    }
    return newText;
  }

  parseMention(text) {
    const { mentionCache } = this.state;
    let mention = new MentionModel();
    if (mentionCache) {
      let mentions = Object.values(mentionCache);
      let all = false;
      if (mentions.length > 0) {
        let mentionUIDS = [];
        let mentionMatchResult = text.match(/@([^ ]+) /g);
        if (mentionMatchResult && mentionMatchResult.length > 0) {
          for (let i = 0; i < mentionMatchResult.length; i++) {
            let mentionStr = mentionMatchResult[i];
            let name = mentionStr.trim().replace("@", "");
            let member = mentionCache[name];
            if (member) {
              if (member.uid === -1) {
                // -1表示@所有人
                all = true;
              } else {
                mentionUIDS.push(member.uid);
              }
            }
          }
        }
        if (all) {
          mention.all = true;
        } else {
          mention.uids = mentionUIDS;
        }
      }
      return mention;
    }
    return undefined;
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      value: value,
    });
  }

  insertText(text) {
    let newText = this.state.value + text;
    this.setState({
      value: newText,
    });
    this.inputRef.focus();
  }

  addMention(uid, name) {
    const { mentionCache } = this.state;
    if (name) {
      mentionCache[`${name}`] = { uid: uid, name: name };
      this.insertText(`@[${name}] `);
      this.setState({
        mentionCache: mentionCache,
      });
    }
  }

  render() {
    const {
      members = [{ uid: 1, name: "aerojin" }],
      onInputRef,
    } = this.props;
    const { value, mentionCache } = this.state;
    let selectedItems = [];

    if (members && members.length > 0) {
      selectedItems = members.map((member) => {
        const item = new MemberSuggestionDataItem();
        item.id = member.uid;
        item.icon = "";
        item.display = member.name;
        return item;
      });
      selectedItems.splice(0, 0, {
        icon: 'https://i.ibb.co/rHNw9Xf/mention.png',
        id: -1,
        display: "所有人",
      });
    }

    return (
      <div className="wk-messageinput-inputbox">
        <MentionsInput
          style={InputStyle.getStyle()}
          value={value}
          onKeyPress={(e) => this.handleKeyPressed.bind(this)(e)}
          onChange={this.handleChange.bind(this)}
          className="wk-messageinput-input"
          placeholder={`按 Ctrl + Enter 换行，按 Enter 发送`}
          allowSuggestionsAboveCursor={true}
          inputRef={(ref) => {
            this.inputRef = ref;
            if (onInputRef) {
              onInputRef(ref);
            }
          }}
        >
          <Mention
            className="mentions__mention"
            trigger={new RegExp(`(@([^'\\s'@]*))$`)}
            data={selectedItems}
            markup="@[__display__]"
            displayTransform={(id, display) => `@${display}`}
            appendSpaceOnAdd={true}
            onAdd={(id, display) => {
              mentionCache[display] = { uid: id, name: display };
            }}
            renderSuggestion={(
              suggestion,
              search,
              highlightedDisplay,
              index,
              focused
            ) => {
              return (
                <div
                  className={clazz(
                    "wk-messageinput-member",
                    focused ? "wk-messageinput-selected" : null
                  )}
                >
                  <div className="wk-messageinput-iconbox">
                    <img
                      alt=""
                      className="wk-messageinput-icon"
                      style={{
                        width: `24px`,
                        height: `24px`,
                        borderRadius: `24px`,
                      }}
                      src={suggestion.icon}
                    />
                  </div>
                  <div>
                    <strong>{highlightedDisplay}</strong>
                  </div>
                </div>
              );
            }}
          />
        </MentionsInput>
      </div>
    );
  }
}

export default MessageInput;
