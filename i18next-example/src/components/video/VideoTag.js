import React from "react";

function VideoTag() {
  return (
    <div>
      <video 
      width="480" 
      height="360" 
      controls 
      autoPlay={true}
      loop={true}
      muted={true}
      disablePictureInPicture={true}
      controlsList="nodownload nofullscreen"
      >
        <source
          src="http://petros-backend.n4.iworklab.com:3011/file-1616851310712.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default VideoTag;
