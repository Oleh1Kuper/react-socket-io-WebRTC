import React, { useEffect, useRef } from 'react';

function Video({ stream, muted }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    video.srcObject = stream;
    video.onloadedmatadata = () => {
      video.play();
    };
  }, [stream]);

  return (
    <div className="map_page_v_rooms_video_container">
      <video
        ref={videoRef}
        width="98%"
        height="98%"
        playsInline
        autoPlay
        muted={muted}
      >
        <track kind="captions" srcLang="en" label="English" />
      </video>
    </div>
  );
}

export default Video;
