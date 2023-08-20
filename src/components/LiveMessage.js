import React from "react";

const LiveMessage = ({ text }) => {
  console.log(text);
  return (
    <div>
      <div className="flex p-4 ">
        <img
          className="w-5 mr-4"
          alt="user"
          src="https://upload.wikimedia.org/wikipedia/commons/9/96/User_icon-cp.png"
        />
        <div className="font-bold pr-2">{text[0].name}</div>
        <div>{text[0].message}</div>
      </div>
    </div>
  );
};

export default LiveMessage;
