import React, { useEffect } from 'react'
import '../sass/connectioncomponent.scss'
import { getAllUsers } from '../api/FirestoreApi'
import { useState } from 'react'

const ConnectionComponent = () => {

  const [users,setUsers] = useState([])

  useEffect(()=>{
     getAllUsers(setUsers)
  },[])

  return (
    <div>{users.map((user)=>{
      return<></>
    })}</div>
  )
}

export default ConnectionComponent