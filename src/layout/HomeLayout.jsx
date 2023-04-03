import React from 'react'
import Home from '../pages/Home'
import Topbar from '../components/common/topbar/Topbar'

const HomeLayout = () => {
  return (
    <div>
      <Topbar/>
       <Home/>
    </div>
  
  ) 
}

export default HomeLayout