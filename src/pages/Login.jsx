import React,{useEffect} from 'react'
import LoginComponent from '../components/LoginComponent'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '../Firebase'
import { useNavigate } from 'react-router-dom'
const Login = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth,(res)=>{
    if(res?.accessToken){
      navigate('/')
    }
    })
  })
  return (
    <div>
        <LoginComponent/>
    </div>
  )
}

export default Login