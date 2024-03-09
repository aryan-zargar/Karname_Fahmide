import React from 'react'
import Sidebar from './sidebar'

export default function GetKarname() {
    function handlechange (e){
        e.preventDefault();
        window.location = `../../getkarnameA/${e.target.value}`
    }
  return (
    <div className='container'>
        <div className='row' style={{"direction":"rtl"}}>
            <Sidebar/>
            <div className='col-md-8 border border-primary mt-2 p-1 m-2 ' style={{"borderRadius":"9px"}}>
                <div className='d-flex justify-content-center'>
                    <div className='d-flex justify-content-center'>
                        <h6>کلاس را انتحاب کنید</h6>
                    </div>
                <select className='form-control w-75 border border-primary mt-5' onChange={(e)=>handlechange(e)} >
                        <option>----</option>
                        <option value={701}>701</option>
                        <option value={702}>702</option>
                        <option value={703}>703</option>
                        <option value={704}>704</option>
                                <option value={705}>705</option>
                                <option value={801}>801</option>
                                <option value={802}>802</option>
                                <option value={803}>803</option>
                                <option value={804}>804</option>
                                <option value={805}>805</option>
                                <option value={901}>901</option>
                                <option value={902}>902</option>
                                <option value={903}>903</option>
                                <option value={904}>904</option>
                                <option value={905}>905</option>

                    </select>
                </div>
                    
            </div>
        </div>
    </div>
  )
}
