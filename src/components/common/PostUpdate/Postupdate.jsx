import React, { useState } from 'react';
import './postupdate.scss';
import PostModal from '../Modal/PostModal';

const Postupdate = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='post-status-main'>
        <div className='post-status'>
          <button className='open-post-modal' onClick={() => setModalOpen(true)}>Start a post</button>
        </div>
        <PostModal modalopen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
  )
}

export default Postupdate