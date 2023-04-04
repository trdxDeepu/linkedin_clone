import React from 'react'
import './postcard.scss'

const PostCard = ({post}) => {
  return (

    <div className='post-card'>
    <p className='status'>{post.status}</p>
    </div>
  )
}


export default PostCard