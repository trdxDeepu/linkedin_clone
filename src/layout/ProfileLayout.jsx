import React, { useMemo, useState } from 'react'
import Topbar from '../components/common/topbar/Topbar'
import { getCurrentUser } from '../api/FirestoreApi';
import ProfileUser from '../pages/ProfileUser';

const ProfileLayout = () => {

    const [currentUser,setCurrentUser] = useState({});

    useMemo(()=>{

       getCurrentUser(setCurrentUser) 

    },[])

   

  return (
    <div>
        <Topbar currentUser={currentUser}/>
        <ProfileUser currentUser={currentUser}/>
    </div>
  )
}

export default ProfileLayout