import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ item }) => {
  console.log(item?.snippet);
  return (
    <Link to={"/watch?v=" + item.id}>
      <div className="p-4 m-2 bg-slate-100 w-96 rounded-lg">
        <img src={item?.snippet?.thumbnails?.high?.url} alt="video_img" />
        <div className="font-bold">{item?.snippet?.channelTitle}</div>
        <div>{item?.snippet?.title}</div>
      </div>
    </Link>
  );
};

export default VideoCard;
