// YouTubeVideoPlayer.js
import React from 'react';
import './VideoPlayer.css'; 
import { useParams } from 'react-router-dom';

const VideoPlayer = ({ Title }) => {
  const { videoId } = useParams();

  return (
    <div className="youtube-video-player">
      <div className="video-container">
        <iframe
          title="YouTube Video"
          width="800"
          height="450"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-details">
        <h1>{Title}</h1>
        {/* <p>Views = published Date</p> */}
        {/* Comment section content goes here */}
      </div>
      <div className="comments-section">
        {/* <h2>Comments</h2> */}
      </div>
      <div className="recommendation-section">
        {/* <h2>Recommendation</h2> */}
        {/* Recommendation section content goes here */}
      </div>
    </div>
  );
};

export default VideoPlayer;
