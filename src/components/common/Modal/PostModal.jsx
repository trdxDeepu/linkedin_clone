
import { Button, Modal } from 'antd';
import './postmodal.scss'

const PostModal= ({modalopen,setModalOpen}) => {


  return (
    <>
     
      {/* <Button type="primary" onClick={() => setModalOpen(true)}>
        Vertically centered modal dialog
      </Button> */}
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modalopen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};

export default PostModal;