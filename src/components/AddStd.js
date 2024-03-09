import React from 'react'
import Sidebar from './sidebar'
import axios from 'axios';

export default function AddStd() {
    async function handleSubmit(e){
        e.preventDefault();
        var doc = {
            name:e.target.name.value,
            lastname:e.target.lname.value,
            ncode:e.target.ncode.value,
            fatherName:e.target.fname.value,
            class:e.target.class.value,
            riazi:20,
            olom:20,
            farsi:20,
            payam:20,
            ghoran:20,
            taf_defa:20,
            kar_fanavari:20,
            arabic:20,
            english:20,
            ejte:20,
            honar:20,
            varzesh:20
        }
        await axios.post("http://localhost:8184/student",doc)
        .catch(e=>alert(e))       
         window.location="../addstd"
    }
  return (
    <div className='container'>
        <div className='row' style={{"direction":"rtl"}}>
            <Sidebar/>
            <div className='col-md-8 border border-primary mt-2 m-2 p-1 d-flex d-flex justify-content-center' style={{"borderRadius":"9px"}}>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className='d-flex justify-content-center pb-2 mt-5'>
                        <h4 className='text-primary'>اضافه کردن دانش آموز</h4>
                    </div>
                    <div className='d-flex w-100'>
                        <div className='w-50 p-1 mt-2 float-start'>
                            <label className='m-1 p-1'>نام</label>
                            <input className='form-control w-100 border border-primary' name='name' id='name' placeholder='نام' />
                        </div>
                        <div className='w-50 p-1 mt-2 float-start'>
                            <label className='m-1 p-1'> نام خانوادگی</label>
                            <input className='form-control w-100 border border-primary' name='lname' id='lname' placeholder='نام خانوادگی' />
                        </div>
                    </div>
                    <div className='d-flex w-100'>
                        <div className='w-50 p-1 mt-2 float-start'>
                            <label className='m-1 p-1'>کدملی</label>
                            <input className='form-control w-100 border border-primary' name='ncode' id='ncode' placeholder='کد ملی' />
                        </div>
                        <div className='w-50 p-1 mt-2 float-start'>
                            <label className='m-1 p-1'> نام پدر</label>
                            <input className='form-control w-100 border border-primary' name='fname' id='fname' placeholder="نام پدر" />
                        </div>
                    </div>
                    <div className='d-flex w-100'>
                        <div className='w-100 p-1 mt-2 float-start'>
                            <label className='m-1 p-1'>کلاس</label>
                            <select className='form-control w-100 border border-primary' name='class' id='class' placeholder='نام خانوادگی' >
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
                    <div className='d-flex w-100'>
                        <div className='w-100 p-1 mt-4 mb-5 float-start'>
                            <button className='btn btn-primary w-100' type='submit'>ثبت</button>
                        </div>
                    </div>
                    
                </form>

            </div>
        </div>
    </div>
  )
}
