interface VideoCompProps{
  source:string
}
const VideoComp = ({source}:VideoCompProps) => {
  return (
    <video width="500" height="500" autoPlay playsInline loop muted>
      <source src={source} type="video/mp4" />
    </video>
  )
}

export default VideoComp