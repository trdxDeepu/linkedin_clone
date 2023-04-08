import { Button, Modal, Progress } from "antd";
import { AiOutlinePicture } from "react-icons/ai";
import "./postmodal.scss";
import { useState } from "react";
import ReactQuill from "react-quill";

const PostModal = ({
  modalopen,
  setModalOpen,
  setStatus,
  status,
  sendStatus,
  setCurrentPost,
  isEdit,
  updateStatus,
  setPostImage,
  uploadPostImage,
  currentPost,
  postImage,
}) => {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Modal
        title="Create a Post"
        centered
        open={modalopen}
        onOk={() => {
          setStatus("");
          setModalOpen(false);
          //
          setCurrentPost({});
        }}
        onCancel={() => {
          setStatus("");
          setModalOpen(false);
          setCurrentPost({});
        }}
        footer={[
          <Button
            key="submit"
            onClick={isEdit ? updateStatus : sendStatus}
            type="primary"
            disabled={status.length > 0 ? false : true}
          >
            {isEdit ? "Update" : "Post"}
          </Button>,
        ]}
      >
        <div className="posts-body">
          <ReactQuill
            className="modal-input"
            placeholder="Share something useful..."
            theme="snow"
            value={status}
            onChange={setStatus}
          />

          {progress === 0 || progress === 100 ? (
            <></>
          ) : (
            <div className="progress-bar">
              <Progress type="circle" percent={progress} />
            </div>
          )}
          {postImage?.length > 0 || currentPost?.postImage?.length ? (
            <img
              className="preview-image"
              src={postImage || currentPost?.postImage}
              alt="postImage"
            />
          ) : (
            <></>
          )}
        </div>
        <label for="pic-upload">
          <AiOutlinePicture size={35} className="picture-icon" />
        </label>
        <input
          id="pic-upload"
          type={"file"}
          hidden
          onChange={(event) =>
            uploadPostImage(event.target.files[0], setPostImage, setProgress)
          }
        />
      </Modal>
    </>
  );
};
export default PostModal;
