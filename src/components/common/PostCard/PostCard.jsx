import React from "react";
import "./postcard.scss";
import { useNavigate } from "react-router-dom";

const PostCard = ({ posts,id }) => {
  let navigate = useNavigate();

  return (
    <div className="post-card" key={id}>
      <p
        className="name"
        onClick={() =>
          navigate("/profile", {
            state: { id: posts?.userID, email: posts.userEmail },
          })
        }
      >
        {posts.userName}
      </p>
      <p className="timeStamp">{posts.timeStamp}</p>
      <p className="status">{posts.status}</p>
    </div>
  );
};

export default PostCard;
