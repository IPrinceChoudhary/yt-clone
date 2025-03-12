import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const res = await data.json();
    console.log(res?.items);
    setVideos(res?.items);
  };
  return (
    <section className="flex flex-wrap">
      {videos.map((video) => {
        return (
          <Link to={`/watch?v=${video.id}`} key={video?.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </section>
  );
};
export default VideoContainer;
