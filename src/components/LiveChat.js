import React, { useEffect, useState } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/chatSlice";
import makeid from "../helper/randomMessage";
import generate from "../helper/randomName";

const LiveChat = () => {
  const [chatMessage, setChatMessage] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.chats);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addChat([
          {
            name: generate(),
            message: makeid(20),
          },
        ])
      );
    }, 2000);
    return () => {
      clearTimeout(interval);
    };
  }, []);
  const handleSubmitChat = () => {
    dispatch(
      addChat([
        {
          name: "Shreya Sharma",
          message: chatMessage,
        },
      ])
    );
  };
  return (
    <div>
      <div className=" p-4 h-[450px] flex flex-col-reverse overflow-y-scroll">
        {messages.map((chat, i) => (
          <LiveMessage key={i} text={chat} />
        ))}
      </div>
      <div className="mt-2 w-35">
        <input
          className="border border-b-slate-950 mr-2 w-5/6 px-2 py-2"
          type="text"
          placeholder="Add comment"
          value={chatMessage}
          onChange={(e) => setChatMessage(e.target.value)}
        />
        <button
          className="border border-black w-20 bg-slate-200 p-1"
          onClick={() => handleSubmitChat()}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
