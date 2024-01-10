import React from "react";
import { Link } from "react-router-dom";
import "./Video.css";

const Video = ({ id, thumbnail, title, views, publishDate, channelIcon }) => {
  return (
    <Link to={`/video/${id}`} className="youtube-video-card">
      <div className="thumbnail-container">
        <img src={thumbnail} alt={title} className="thumbnail" />
      </div>

      <div className="video-info">
        <img src={channelIcon} alt="Channel Icon" className="channel-icon" />

        <div className="meta-data">
          <h3 className="title">{title}</h3>
          <span className="views">{views} views</span>
          <span className="publish-date">{publishDate}</span>
        </div>
      </div>
    </Link>
  );
};

export default Video;
