//chatName
//isGroupChat
//users
//latestMessage
// groupAdmin

// const mongooose = require("mongoose");
import mongoose from "mongoose";

const ChatModel = mongooose.Schema(
  {
    chatName: {
      type: String,

      trim: true,
    },
    isGroupChat: { type: Boolean, default: false },
    users: [
      {
        type: mongooose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongooose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongooose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamp: true }
);

const Chat = mongooose.model("Chat", ChatModel);

export default Chat;
