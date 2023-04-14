import React, { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5000";
const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    const data = await axios.get("api/chat");
    setChats(data.data);
  };

  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      {chats.map((chat) => {
        return <div key={chat._id}>{chat.chatName}</div>;
      })}
    </div>
  );
};

export default ChatPage;
