import React from 'react'
import Sidebar from './sidebar'

export default function Mainpage() {
  return (
    <div className='container'>
        <div className='row' style={{"direction":"rtl"}}>
            <Sidebar/>
            <div className='col-md-8 border border-primary mt-2 p-1 m-2' style={{"borderRadius":"9px"}}>

            </div>
        </div>
    </div>
  )
}
