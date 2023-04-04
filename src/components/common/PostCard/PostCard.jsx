import React from "react";
import "./postcard.scss";

const PostCard = ({ posts }) => {
  return (
    <div className="post-card">
      <p className="name">{posts.userName}</p>
      <p className='timeStamp'>{posts.timeStamp}</p>
      <p className="status">{posts.status}</p>
    </div>
  );
};

export default PostCard;
