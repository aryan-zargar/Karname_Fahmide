import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import axios from 'axios'
import { AiOutlineUserDelete } from 'react-icons/ai';

export default function Karname() {
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
    async function handledit(dars,e,id){
        e.preventDefault();
        if(dars == "riazi"){
            var a = {
                riazi:Math.round(Number(e.target.value))
            }
        }
        else if (dars == "olom"){
            var a = {
                olom:Math.round(Number(e.target.value))
            }
        }
        else if (dars == "farsi"){
            var a = {
                farsi:Math.round(Number(e.target.value))
            }
        }
        else if (dars == "payam"){
            var a = {
                payam:Math.round(Number(e.target.value))
            }
        }
        else if (dars == "ghoran"){
            var a = {
                ghoran:Math.round(Number(e.target.value))
            }
        }
        else if (dars == "taf_defa"){
            var a = {
                taf_defa:Math.round(Number(e.target.value))
            }
        }
        else if (dars == "kar_fanavari"){
            var a = {
                kar_fanavari:Math.round(Number(e.target.value))
            }
        }
        else if (dars == "arabic"){
            var a = {
                arabic:Math.round(Number(e.target.value))
            }
        }
        else if (dars == "english"){
            var a = {
                english:Math.round(Number(e.target.value))
            }
        }
        else if (dars == "ejte"){
            var a = {
                ejte:Math.round(Number(e.target.value))
            }
        }
        else if (dars == "honar"){
            var a = {
                honar:Math.round(Number(e.target.value))
            }
        }
        else if (dars == "varzesh"){
            var a = {
                varzesh:Math.round(Number(e.target.value))
            }
        }

        axios.patch(`http://localhost:8184/student/${id}` ,a).catch(e=>alert(e))
        
    }
  return (
    <div className='container'>
        <div className='row' style={{"direction":"rtl"}}>
            <Sidebar/>
            <div className='col-md-8 border border-primary mt-2 p-1 m-2' style={{"borderRadius":"9px","direction":"rtl"}}>
                <div className='d-flex justify-content-center pb-2 mt-5'>
                    <h4 className='text-primary'>ثبت کارنامه دانش آموز</h4>
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
                <table className='table table-info  table-bordered w-75' style={{"fontSize":"x-small"}}>
                    <thead>
                        <tr>
                            <th className='bg-primary text-light'>نام کامل</th>
                            <th className='bg-primary text-light'>کدملی</th>
                            <th className='bg-primary text-light'>نام پدر</th>
                            <th>ریاضی</th>
                            <th>علوم</th>
                            <th>فارسی</th>
                            <th>پیام</th>
                            <th>قرآن</th>
                            <th>تفکر/آمادگی دفاعی</th>
                            <th>کار و فناوری</th>
                            <th>عربی</th>
                            <th>زبان خارجی</th>
                            <th>اجتماعی</th>
                            <th>هنر</th>
                            <th>ورزش</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((e)=>(
                            <tr>
                                <td className='bg-primary text-light'>{e.name} {e.lastname}</td>
                                <td className='bg-primary text-light'>{e.ncode}</td>
                                <td className='bg-primary text-light'> {e.fatherName}</td>
                                <td><input defaultValue={e.riazi} onChange={(b)=>handledit("riazi",b,e.id)}  className='border border-primary' style={{"width":"25px","fontSize":"x-small"}} /></td>
                                <td><input defaultValue={e.olom} onChange={(b)=>handledit("olom",b,e.id)}  className='border border-primary' style={{"width":"25px","fontSize":"x-small"}} /></td>
                                <td><input defaultValue={e.farsi} onChange={(b)=>handledit("farsi",b,e.id)}  className='border border-primary' style={{"width":"25px","fontSize":"x-small"}} /></td>
                                <td><input defaultValue={e.payam} onChange={(b)=>handledit("payam",b,e.id)}  className='border border-primary' style={{"width":"25px","fontSize":"x-small"}} /></td>
                                <td><input defaultValue={e.ghoran} onChange={(b)=>handledit("ghoran",b,e.id)}  className='border border-primary' style={{"width":"25px","fontSize":"x-small"}} /></td>
                                <td><input defaultValue={e.taf_defa} onChange={(b)=>handledit("taf_defa",b,e.id)}  className='border border-primary' style={{"width":"25px","fontSize":"x-small"}} /></td>
                                <td><input defaultValue={e.kar_fanavari} onChange={(b)=>handledit("kar_fanavari",b,e.id)}  className='border border-primary' style={{"width":"25px","fontSize":"x-small"}} /></td>
                                <td><input defaultValue={e.arabic} onChange={(b)=>handledit("arabic",b,e.id)}  className='border border-primary' style={{"width":"25px","fontSize":"x-small"}} /></td>
                                <td><input defaultValue={e.english} onChange={(b)=>handledit("english",b,e.id)}  className='border border-primary' style={{"width":"25px","fontSize":"x-small"}} /></td>
                                <td><input defaultValue={e.ejte} onChange={(b)=>handledit("ejte",b,e.id)}  className='border border-primary' style={{"width":"25px","fontSize":"x-small"}} /></td>
                                <td><input defaultValue={e.honar} onChange={(b)=>handledit("honar",b,e.id)}  className='border border-primary' style={{"width":"25px","fontSize":"x-small"}} /></td>
                                <td><input defaultValue={e.varzesh} onChange={(b)=>handledit("varzesh",b,e.id)}  className='border border-primary' style={{"width":"25px","fontSize":"x-small"}} /></td>

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
