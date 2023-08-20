import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeToggle } from "../utils/toggleSlice";
import LiveChat from "./LiveChat";

const WatchVideo = () => {
  const [searchParam] = useSearchParams();
  const toggleValue = useSelector((store) => store.toggle.open);
  const param = searchParam.get("v");
  const comments = [
    {
      name: "Shreya",
      message: "It was a good and informative video",
      replies: {
        name: "Riya",
        message: "Thank You.",
      },
    },
    {
      name: "Shreya",
      message: "It was a good and informative video",
      replies: {
        name: "Riya",
        message: "Thank You.",
      },
    },
    {
      name: "Shreya",
      message: "It was a good and informative video",
      replies: {
        name: "Riya",
        message: "Thank You.",
      },
    },
  ];
  console.log(toggleValue);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeToggle());
  }, []);

  return (
    <div className="ml-20 my-10 ">
      <div className="flex">
        <iframe
          width={toggleValue ? "700" : "1000"}
          height="500"
          src={"https://www.youtube.com/embed/" + param}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="border border-black h-[450px] w-[35rem] mx-8">
          <LiveChat />
        </div>
      </div>
      <div className="font-bold mt-10 ">Comments</div>
      <div className="mt-5">
        {comments.map((comment, i) => (
          <div key={i} className="mb-5">
            <div className=" bg-gray-50">
              <div className="flex">
                <img
                  className="w-5 h-5 mr-5 items-center"
                  alt="photo"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/User_icon-cp.png"
                />
                <div>
                  <div className="font-bold">{comment.name}</div>
                  <div>{comment.message}</div>
                </div>
              </div>
            </div>
            <div className="ml-10 mt-4 flex">
              <img
                className="w-5 h-5 mr-5 items-center"
                alt="photo"
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/User_icon-cp.png"
              />
              <div>
                <div className="font-bold">{comment.replies.name}</div>
                <div>{comment.replies.message}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchVideo;
