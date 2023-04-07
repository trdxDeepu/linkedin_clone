import React, { useState, useMemo } from "react";
import "./postupdate.scss";
import { PostStatus, getStatus } from "../../../api/FirestoreApi";
import PostModal from "../Modal/PostModal";
import PostCard from "../PostCard/PostCard";
import { getCurrentTimeStamp } from "../../../helper/useMoment";
import { getUniqueId } from "../../../helper/getUniqueId";

const Postupdate = ({ currentUser }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatus, setAllStatus] = useState([]);
  const [isEdit, setItEdit] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp("LLL"),
      userEmail: currentUser.email,
      userName: currentUser.name,
      postID: getUniqueId(),
      userID: currentUser.id,
    };
    await PostStatus(object);
    await setModalOpen(false);
    await setStatus("");
    setItEdit(false)
  };

  const getEditData = (posts) => {
    setModalOpen(true);
    setStatus(posts?.status);
    // setCurrentPost(posts);
    setItEdit(true);
  };

  const updateStatus = () => {
    updatePost(currentPost.id, status, postImage);
    setModalOpen(false);
    console.log(status)
  };

  useMemo(() => {
    getStatus(setAllStatus);
  }, []);

  // console.log(allStatus);

  return (
    <div className="post-status-main">
      <div className="post-status">
        <button
          className="open-post-modal"
          onClick={() => {
            setModalOpen(true);
            setItEdit(false);
          }}
        >
          Start a post
        </button>
      </div>
      <PostModal
        status={status}
        setStatus={setStatus}
        modalopen={modalOpen}
        setModalOpen={setModalOpen}
        sendStatus={sendStatus}
        isEdit={isEdit}
        updateStatus={updateStatus}
        currentPost={currentPost}
      />
      <div>
        {allStatus.map((post) => {
          return (
            <div key={post.id}>
              <PostCard posts={post} getEditData={getEditData} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Postupdate;
