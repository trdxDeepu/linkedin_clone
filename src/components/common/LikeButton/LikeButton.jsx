import React from 'react'
import './likebutton.scss'
import {AiOutlineLike, AiOutlineHeart, AiFillHeart, AiOutlineComment } from "react-icons/ai";
import { BsFillHandThumbsUpFill, BsHandThumbsUp } from "react-icons/bs";
import { likePost } from '../../../api/FirestoreApi';


const LikeButton = ({userId , postId}) => {

    const handleLike = () => {
        likePost(userId,postId)
    }

    
  return (
    <div className='like-container' onClick={handleLike}>
      <AiOutlineLike size={30} />
      <p>Like</p>
    </div>
  )
}

export default LikeButton;