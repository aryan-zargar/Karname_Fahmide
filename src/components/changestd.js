import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import axios from 'axios'
import { AiOutlineUserDelete } from 'react-icons/ai';

export default function ChangeStd() {
    var [data,setdata] = useState([])
    async function fetchData(cls) {
        var response = await axios.get(`http://localhost:8184/student?class=${cls}`);
        var a = response.data;
        var b = []
        for (let index = 0; index < a.length; index++) {
            const element = a[index];
            b.push(element.lastname)
        }
        b.sort();

        console.log(b)
        var c = []
        for (let index = 0; index < b.length; index++) {
            const element = b[index];
            a.forEach(element1 => {
                if(element == element1.lastname & !c.includes(element1)){
                    c.push(element1)
                }
            });
        }
        setdata(c)
    }
    useEffect(() => {
        fetchData("701");
    }, []);
    console.log(data)
    async function deletestd(id){
        await axios.delete(`http://localhost:8184/student/${id}`)
    }
  return (
    <div className='container'>
        <div className='row' style={{"direction":"rtl"}}>
            <Sidebar/>
            <div className='col-md-8 border border-primary mt-2 p-1 m-2' style={{"borderRadius":"9px","direction":"rtl"}}>
                <div className='d-flex justify-content-center pb-2 mt-5'>
                    <h4 className='text-primary'>حذف دانش آموز</h4>
                </div>
                <div className='mt-1 d-flex justify-content-center'>
                    <select className='form-control w-75 border border-primary' onChange={(e)=>fetchData(e.target.value)} >
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
                <div className='d-flex justify-content-center mt-2'>
                <table className='table table-info table-hover table-striped table-bordered w-75' style={{"fontSize":"medium"}}>
                    <thead>
                        <tr>
                            <th>نام</th>
                            <th>نام خانوادگی</th>
                            <th>کدملی</th>
                            <th>نام پدر</th>
                            <th>کلاس</th>
                            <th>حذف</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((e)=>(
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.lastname}</td>
                                <td>{e.ncode}</td>
                                <td>{e.fatherName}</td>
                                <td>{e.class}</td>
                                <td ><button className='btn btn-primary w-100' onClick={()=>deletestd(e.id)}><AiOutlineUserDelete width={"90px"}   onClick={()=>{deletestd(e.id)}}/></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
  )
}
