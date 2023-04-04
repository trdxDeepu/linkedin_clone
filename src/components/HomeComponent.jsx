import React from 'react'

import Postupdate from '../components/common/PostUpdate/Postupdate'
import '../sass/homeComponent.scss'

const HomeComponent = ({currentUser}) => {
  return (
    <div className='home-component'>
   
    <Postupdate currentUser={currentUser}/>
    </div>
    
  )
}

export default HomeComponent