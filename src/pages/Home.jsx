import React, { useEffect } from 'react'
import HomeComponent from '../components/HomeComponent'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '../Firebase'

const Home = () => {

  useEffect(()=>{
    onAuthStateChanged(auth,(res)=>{
      if(!res?.accessToken){
        navigate('/login')
      }
    })
  })

  return <HomeComponent/>
}

export default Home