import React from 'react'
import './profilecard.scss'

const ProfileCard = ({currentUser}) => {
  return (
    <div className="profile-card">{currentUser.name}</div>
  )
}

export default ProfileCard