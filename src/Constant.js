export class MessageContentTypeConst {
    static historySplit = - 3; // 历史风格线
    static typing = - 2; // 输入中
    static time = - 1; // 时间消息
    static image = 2 // 图片消息
    static gif = 3 // gif消息
    static voice = 4 // 语音消息
    static smallVideo = 5 // 小视频
    static location = 6 // 位置信息
    static card = 7 // 名片
    static file = 8 // 文件
    static mergeForward = 11 // 合并转发
    static lottieSticker = 12 // lottie贴图
    static lottieEmojiSticker = 13 // lottie emoji 贴图
    static addMembers = 1002 // 添加群成员
    static removeMembers = 1003 // 删除群成员
    static channelUpdate = 1005 // 频道更新
    static newGroupOwner = 1008 // 成为新群主
    static screenshot = 1014 // 截屏消息
  
    // 音频通话消息号段 9900 - 9999
    static rtcResult = 9989 // 音视频通话结果
    static rtcSwitchToVideo = 9990 // 切换到视频通话
    static rtcSwitchToVideoReply = 9991 // 切换到视频回复
    static rtcCancel = 9992 // 取消通话
    static rtcSwitchToAudio = 9993 // 音视频切换（未接通时）
    static rtcData = 9994 // rtc信令数据类型
    static rtcMissed =9995 //  未接听
    static rtcReceived = 9996 //  收到通话
    static rtcRefue = 9997; // 拒绝通话
    static rtcAccept = 9998; // 接受通话
    static rtcHangup = 9999; // 挂断通话
  
  }

  export  class  EndpointID {
    static  loginWidget = "loginWidget"; // login widget
    static  homeWidget = "homeWidget"; // 主页
    static  routePrefix = "route:"; // 路由sid前缀
    static  menusPrefix = "menus:"; // 菜单前缀
    static conversationListItem = "conversationList.item" // 最近会话列表的item
    static showConversation = "showConversation" // 显示会话页面
    static clearChannelMessages = "clearChannelMessages" // 清空某个频道消息
    static emojiService = "emojiService" // emoji服务
  }