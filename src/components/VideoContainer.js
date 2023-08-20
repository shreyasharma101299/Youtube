import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS } from "../utils/constants";
import VideoCard from "./VideoCard";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS);
    const json = await data.json();
    setVideos(json.items);
  };
  
  return (
    <div className="p-2 ml-12 flex flex-wrap flex-row ">
      {videos.map((video) => (
        <VideoCard item={video} key={video.id} />
      ))}
    </div>
  );
};

export default VideoContainer;
