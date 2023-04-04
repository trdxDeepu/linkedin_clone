import React, { useState, useMemo } from "react";
import "./postupdate.scss";
import { PostStatus, getStatus } from "../../../api/FirestoreApi";
import PostModal from "../Modal/PostModal";
import PostCard from "../PostCard/PostCard";
import { getCurrentTimeStamp } from "../../../helper/useMoment";

const Postupdate = () => {
  const userEmail = localStorage.getItem("userEmail")
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatus, setAllStatus] = useState([]);

  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp("LLL"),
      userEmail:userEmail
    };
    await PostStatus(object); 
    await setModalOpen(false);
    await setStatus("");
  };

  useMemo(() => {
    getStatus(setAllStatus);
  }, []);

  console.log(allStatus);

  return (
    <div className="post-status-main">
      <div className="post-status">
        <button className="open-post-modal" onClick={() => setModalOpen(true)}>
          Start a post
        </button>
      </div>
      <PostModal
        status={status}
        setStatus={setStatus}
        modalopen={modalOpen}
        setModalOpen={setModalOpen}
        sendStatus={sendStatus}
      />
      <div>
        {allStatus.map((post) => {
          return <PostCard  post={post} />;
        })}
      </div>
    </div>
  );
};

export default Postupdate;
