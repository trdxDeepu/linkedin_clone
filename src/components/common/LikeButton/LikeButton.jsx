import React, { useMemo, useState } from "react";
import "./likebutton.scss";
import {
  AiOutlineLike,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineComment,
} from "react-icons/ai";
import { BsFillHandThumbsUpFill, BsHandThumbsUp } from "react-icons/bs";
import { likePost, getLikesByUser } from "../../../api/FirestoreApi";

const LikeButton = ({ userId, postId }) => {
  const [likesCount, setLikesCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    likePost(userId, postId, liked);
  };

  console.log(liked);

  useMemo(() => {
    getLikesByUser(userId, postId, setLiked, setLikesCount);
  }, [userId, postId]);

  return (
    <div className="like-container" onClick={handleLike}>
      {liked ? <AiFillHeart size={30} /> : <AiOutlineHeart size={30} />}
      <p>{liked ? "Liked" : "Like"}</p>
    </div>
  );
};

export default LikeButton;
