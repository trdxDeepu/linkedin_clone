import React from 'react'
import './profilepop.scss'
import { OnLogOut } from '../../../api/AuthApi'

const ProfilePop = () => {
  return (
    <div className="popup-card">
        <div className="popup-option">
            <li className="popuo-option"
            onClick={OnLogOut}>Log Out</li>
        </div>
    </div>
  )
}

export default ProfilePop