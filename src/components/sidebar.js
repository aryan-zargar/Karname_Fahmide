import React from 'react'
import './images/logo.png'
import { AiFillChrome, AiFillDelete, AiFillFileAdd, AiFillFileText, AiFillHome, AiFillPrinter, AiOutlineBorderlessTable, AiOutlineCluster, AiOutlineFileAdd, AiOutlinePrinter, AiOutlineUserAdd, AiOutlineUserDelete, AiOutlineUserSwitch, AiTwotoneDelete, AiTwotoneFileAdd, AiTwotoneHome, AiTwotonePrinter } from 'react-icons/ai'
import { FaChartPie } from "react-icons/fa"
import './styles/items.css'
export default function Sidebar() {
  return (
    <div className='col-md-3 border border-primary mt-2 p-1  m-2' style={{"borderRadius":"9px","fontSize":"small"}}>
        <div className='mt-2 d-flex justify-content-center'>
            <img width={"130px"} src={require("./images/logo.png")} />
        </div>
        <div className=' mt-2 mb-3 d-flex justify-content-center'>
            <p  className="text-primary" style={{"fontSize":"large"}}>سامانه ی کارنامه ی شهید فهمیده</p>
        </div>
        <hr/>
      
        <div id='item'  className='d-flex mt-2 text-primary'>
          <AiTwotoneHome size={40}  className='p-2 text-primary' onClick={()=>{window.location="../.."}} style={{ cursor: 'pointer' }} />
          <button className='btn btn-hover' onClick={(e)=>{window.location="../.."}}>
            <span className='text-primary' style={{ textDecoration: 'none' }}>خانه</span>
          </button>
          
        </div> 
        <div id='item'  className='d-flex mt-2 text-primary'>
          <AiOutlineUserAdd size={40}  className='p-2 text-primary' onClick={()=>{window.location="../../addstd"}} style={{ cursor: 'pointer' }} />
          <button className='btn btn-hover' onClick={(e)=>{window.location="../../addstd"}}>
            <span className='text-primary' style={{ textDecoration: 'none' }}>اضافه کردن دانش آموز</span>
          </button>
          
        </div> 
        <div id='item'  className='d-flex mt-2 text-primary'>
          <AiOutlineUserSwitch size={40}  className='p-2 text-primary' onClick={()=>{window.location="../../changestd"}} style={{ cursor: 'pointer' }} />
          <button className='btn btn-hover' onClick={(e)=>{window.location="../../changestd"}}>
            <span className='text-primary' style={{ textDecoration: 'none' }}>تغییر یا حذف دانش آموز</span>
          </button>
          
        </div> 
        <div id='item'  className='d-flex mt-2 text-primary'>
          <AiTwotoneFileAdd size={40}  className='p-2 text-primary' onClick={()=>{window.location="../../changeKarname"}} style={{ cursor: 'pointer' }} />
          <button className='btn btn-hover' onClick={(e)=>{window.location="../../changeKarname"}}>
            <span className='text-primary' style={{ textDecoration: 'none' }}>ثبت کارنامه (نمره پایانی)</span>
          </button>
          
        </div> 
        <div id='item'  className='d-flex mt-2 text-primary'>
          <AiTwotonePrinter size={40}  className='p-2 text-primary' onClick={()=>{window.location="../../getkarnameB"}} style={{ cursor: 'pointer' }} />
          <button className='btn btn-hover' onClick={(e)=>{window.location="../../getkarnameB"}}>
            <span className='text-primary' style={{ textDecoration: 'none' }}>چاپ کارنامه</span>
          </button>
          
        </div> 
        <div id='item'  className='d-flex mt-2 mb-5 text-primary'>
          <AiTwotoneDelete size={40}  className='p-2 text-primary' onClick={()=>{window.location="../"}} style={{ cursor: 'pointer' }} />
          <button className='btn btn-hover' onClick={(e)=>{window.location="../.."}}>
            <span className='text-primary' style={{ textDecoration: 'none' }}>حذف کلی</span>
          </button>
          
        </div> 
    </div>
  )
}
