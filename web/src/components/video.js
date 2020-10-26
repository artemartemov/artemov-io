import React from 'react';

const Video = ({ src, style }) => (
  <video muted autoPlay loop preload={`/videos/${src}`} style={style}>
    <source src={`/videos/${src}`} />
  </video>
);

export default Video;
