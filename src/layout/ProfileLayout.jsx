import React,{useMemo, useState} from 'react'
import Profile from '../pages/Profile'
import Topbar from '../components/common/topbar/Topbar'
import { getCurrentUser } from '../api/FirestoreApi'


const ProfileLayout = () => {

  const [currentUser, setCurrentUser] = useState({});

  useMemo(()=>{
    getCurrentUser(setCurrentUser)
  },[])
  return (
    <div>
      <Topbar />
       <Profile currentUser={currentUser} />
    </div>
  
  ) 
}

export default ProfileLayout