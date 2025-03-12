const VideoCard = ({info}) => {
  const snippet = info?.snippet || {};
  const statistics = info?.statistics || {};
  const {channelTitle, title, thumbnails} = snippet;

  return (
    <div className="p-2 m-2 w-64 shadow-lg h-80">
      <img src={thumbnails?.medium?.url} alt="Thumbnail" />
      <div>
        <h3 className="font-bold">{title}</h3>
        <h6>{channelTitle}</h6>
        <p>{statistics?.viewCount} views</p>
      </div>
    </div>
  )
}
export default VideoCard