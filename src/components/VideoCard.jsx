import React from "react";
import "./VideoCard.css";

function VideoCard() {
  return (
    <>
      <div className="video-container">
        <img src="https://i.ytimg.com/vi/VOLKJJvfAbg/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBsrYpX6ORSzEsXMHsDxlItsJ-mvA" />
        <div className="text-container">
          <div className="icon">
            <img src="https://robohash.org/777" alt="" srcset="" />
          </div>
          <div className="text-content">
            <div className="title">This is the title of the video</div>
            <div className="channel-name">Channel Name</div>
            <div className="channel-name">20m 2 month ago</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCard;
