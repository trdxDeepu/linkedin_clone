import React, { useMemo, useState } from "react";
import "./postcard.scss";
import { useNavigate } from "react-router-dom";
import LikeButton from "../LikeButton/LikeButton";
import { getAllUsers, getCurrentUser ,deletePost} from "../../../api/FirestoreApi";
import { BsPencil, BsTrash } from "react-icons/bs";

const PostCard = ({ posts, id,getEditData }) => {
  let navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [allUser, setAllUser] = useState([]);

  useMemo(() => {
    getCurrentUser(setCurrentUser);
    getAllUsers(setAllUser);
  }, []);


  console.log(allUser.filter((user)=>user.id === posts.userID)[0].name )


  return (
    <div className="posts-card" key={id}>
      <div className="post-image-wrapper">
      {currentUser.id === posts.userID ? (
          <div className="action-container">
            <BsPencil
              size={20}
              className="action-icon"
              onClick={() => getEditData(posts)}
            />
            <BsTrash
              size={20}
              className="action-icon"
              onClick={() => deletePost(posts.id)}
            />
          </div>
        ) : (
          <></>
        )}
      <img
      alt='profile-image'
      className="profile-image"
        src={
          allUser
            .filter((i) => i.id === posts.userID)
            .map((i) => i.imageLink)[0]
        }
        
      />
      </div>
     
      <p
        className="name"
        onClick={() =>
          navigate("/profile", {
            state: { id: posts?.userID, email: posts.userEmail },
          })
        }
      >
        {allUser.filter((user)=>user.id === posts.userID)[0].name}
      </p>
      <p className="headline">{allUser.filter((user)=>user.id === posts.userID)[0].headline}</p>
      <p className="headline">{allUser.filter((user)=>user.id === posts.userID)[0].timeStamp}</p>
      <p className="status">{posts.status}</p>
      <LikeButton
        userId={currentUser?.id}
        postId={posts.id}
        currentUser={currentUser}
      />
    </div>
  );
};

export default PostCard;
