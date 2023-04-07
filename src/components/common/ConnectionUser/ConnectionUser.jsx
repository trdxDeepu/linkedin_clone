import React from 'react'

const ConnectionUser = ({user,getCurrentUser}) => {
  return (
    <div className='grid-child' onClick={()=>getCurrentUser(user.id)}>
        <p className="name">{user.name}</p>
        <p className="headline">{user.headline}</p>

    </div>
  )
}

export default ConnectionUser