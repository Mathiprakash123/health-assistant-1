import React from 'react'
import DoctorNavBar from './DoctorNavBar'
import { Outlet } from 'react-router-dom'
import DoctorSidePanel from './mainpages/DoctorSidePanel'

const DoctorPageLayout = ( ) => {
  return (
    <div>
        <DoctorSidePanel />
       <Outlet/>
    </div>
  )
}

export default DoctorPageLayout