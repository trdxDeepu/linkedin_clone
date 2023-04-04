import React, { useState } from "react";
import "./postupdate.scss";
import { PostStatus } from "../../../api/FirestoreApi";
import PostModal from "../Modal/PostModal";

const Postupdate = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const sendStatus = async () => {
          await PostStatus(status)
          await setModalOpen(false)
          await setStatus("")
  }

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
    </div>
  );
};

export default Postupdate;
