import React,{useMemo, useState} from 'react'
import Connection  from '../pages/Connection'
import Topbar from '../components/common/topbar/Topbar'
import { getCurrentUser } from '../api/FirestoreApi'


const ConnectionLayout = () => {

  const [currentUser, setCurrentUser] = useState({});

  useMemo(()=>{
    getCurrentUser(setCurrentUser)
  },[])

  console.log(currentUser)

  return (
    <div>
      <Topbar currentUser={currentUser} />
       <Connection  currentUser={currentUser} />
    </div>
  
  ) 
}

export default  ConnectionLayout