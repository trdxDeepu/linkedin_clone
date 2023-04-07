import { Button, Modal } from "antd";
import "./postmodal.scss";

const PostModal = ({
  modalopen,
  setModalOpen,
  setStatus,
  status,
  sendStatus,
  setCurrentPost,
  isEdit,
  updateStatus,

}) => {
  return (
    <>
      {/* <Button type="primary" onClick={() => setModalOpen(true)}>
        Vertically centered modal dialog
      </Button> */}
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
        <input
          type="text"
          className="modal-input"
          placeholder="What do u want to talk about?"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        />
      </Modal>
    </>
  );
};

export default PostModal;
