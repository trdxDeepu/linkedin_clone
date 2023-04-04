import React from 'react'
import './profilecard.scss'

const ProfileCard = ({currentUser}) => {
  return (
    <div className='profile-card' >
        <h1 className='name'>{currentUser.name}</h1>
    </div>
  )
}

export default ProfileCard