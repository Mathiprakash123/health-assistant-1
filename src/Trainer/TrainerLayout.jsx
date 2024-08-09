import React from 'react'
import { Outlet } from 'react-router-dom'
import TrainerSidepanel from './TrainerSidepanel'

const TrainerLayout = () => {
  return (
    <div> <div>
    <TrainerSidepanel />
    
   <Outlet/>
</div></div>
  )
}

export default TrainerLayout