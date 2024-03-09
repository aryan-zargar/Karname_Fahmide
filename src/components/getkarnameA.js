import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import {BarChart, PieChart, pieArcClasses, pieArcLabelClasses} from '@mui/x-charts'
import { LineChart } from '@mui/x-charts/LineChart';
import { Hidden } from '@mui/material';
export default function GetKarnameA() {
    let { cls } = useParams();
    var sizing = {
      legend: { hidden: true }
    }
    var [data,setdata] = useState([]);
    var [clavg,setavg] = useState(0)
    async function fetchdata(){
        var a = await ((await axios.get(`http://localhost:8184/student?class=${cls}`)).data)
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
        var aaa = 0;
        for (let index = 0; index < c.length; index++) {
          const e = c[index];
          aaa += ((e.riazi+e.olom+e.farsi+e.payam+e.ghoran+e.taf_defa+e.kar_fanavari+e.arabic+e.english+e.ejte+e.honar+e.varzesh)/12)
        }
        setavg(aaa/c.length);
    }
    useEffect(()=>{
      fetchdata()
    },[])
    console.log(data)
  return (
    <div className=''>
        {data.map((e)=>{
          
          function gettype(num){
            if(num >= 19){
              return "عالی"
            }
            else if(num >= 17){
              return "خیلی خوب"
            }
            else if(num >= 10){
              return 'متوسط'
            }
            else{
              return "ضعیف"
            }
          }
          var avgg = ((e.riazi+e.olom+e.farsi+e.payam+e.ghoran+e.taf_defa+e.kar_fanavari+e.arabic+e.english+e.ejte+e.honar+e.varzesh)/12)
          var rotbe = 0;
          var listmodel = [];
          for (let index = 0; index < data.length; index++) {
            const e = data[index];
            var vv = ((e.riazi+e.olom+e.farsi+e.payam+e.ghoran+e.taf_defa+e.kar_fanavari+e.arabic+e.english+e.ejte+e.honar+e.varzesh)/12)
            if (!listmodel.includes(vv)){
              listmodel.push(vv)
            }
          }
          listmodel.reverse();
          for (let index = 0; index < listmodel.length; index++) {
            const element = listmodel[index];
            if(element == avgg){
              rotbe = index+1
            }
          }
          const getArcLabel = (params) => {
            return params.label
          };
          return(
          <div>
            <div className='w-75 float-end p-1' style={{"direction":"rtl"}}>
              <div className=''>
                  <img style={{"width":"100px"}} src={require("./images/logo.png")} />
              
              <table className='table table-info table-bordered float-start w-75'>
                <thead>
                  <tr>
                    <th>نام کامل</th>
                    <th>کد ملی</th>
                    <th> نام پدر</th>
                    <th>کلاس</th>
                    <th>رتبه در کلاس</th>
                  </tr>
              </thead>

                  <tbody>
                    <tr>
                      <td>{e.name} {e.lastname}</td>
                      <td>{e.ncode}</td>
                      <td>{e.fatherName}</td>
                      <td>{e.class}</td>
                      <td>{rotbe}</td>
                    </tr>
                  </tbody>
              </table>
              <div className='d-flex'>
              <div className='float-end'>
                
              <BarChart
                xAxis={[
                  {
                    id: 'barCategories',
                    data: ['معدل',"میانگین کلاس"],
                    scaleType: 'band',
                    
                  },
                ]}
                series={[
                  {
                    data: [avgg,clavg],
                    color:"#00ab41"
                  },
                ]}
                width={250}
                height={400}
              />
                           
              </div>
              <div className='float-end' style={{"fontSize":"xx-small"}}>
              <LineChart
                xAxis={[{ data: [1,2,3,4,5,6,7,8,9,10,11,12] }]}
                series={[
                  {
                    data: [e.riazi,e.olom,e.farsi,e.payam,e.ghoran,e.taf_defa,e.kar_fanavari,e.arabic,e.english,e.ejte,e.honar,e.varzesh],
                    showMark: false,
                    color:"#0AFF"
                  },
                ]}
                width={500}
                height={400}
              />
              
              {/* <PieChart
              
              series={[
                {
                  data: [
                    { id: 0, value: e.riazi, label: 'ریاضی' },
                    { id: 1, value: e.olom, label: 'علوم' },
                    { id: 2, value: e.farsi, label: 'فارسی' },
                    { id: 3, value: e.payam, label: 'پیام ها' },
                    { id: 4, value: e.ghoran, label: 'قرآن' },
                    { id: 5, value: e.taf_defa, label: 'تفکر' },
                    { id: 6, value: e.kar_fanavari, label: 'کار فناوری' },
                    { id: 7, value: e.arabic, label: 'عربی' },
                    { id: 8, value: e.english, label: 'زبان خارجی' },
                    { id: 9, value: e.ejte, label: 'اجتماعی' },
                    { id: 10, value: e.honar, label: 'هنر' },
                    { id: 11, value: e.varzesh, label: 'ورزش' },

                  ],
                  
                  arcLabel: (item) => item.value,
                },
              ]}
              
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: 'white',
                  fontSize: 14,
                },
              }}
              width={400}
              height={400}
              {...sizing}
            />  */}
            </div>
              </div>
              </div>
            </div>
            <table className='table table-primary table-bordered w-25 '>
              <thead>
                <tr>
                  <th>توصیفی</th>
                  <th>نمره</th>
                  <th>نام درس</th>
                  <th>ردیف</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>{gettype(e.riazi)}</td>
                <td>{e.riazi}</td>
                <td>ریاضی</td>
                <td>1</td>
              </tr>
              <tr>
                <td>{gettype(e.olom)}</td>

                <td>{e.olom}</td>
                <td>علوم</td>
                <td>2</td>

              </tr>
              <tr>
              <td>{gettype(e.farsi)}</td>

                <td>{e.farsi}</td>
                <td>فارسی</td>
                <td>3</td>

              </tr>
              <tr>
              <td>{gettype(e.payam)}</td>

                <td>{e.payam}</td>
                <td>پیام ها</td>
                <td>4</td>

              </tr>
              <tr>
              <td>{gettype(e.ghoran)}</td>

                <td>{e.ghoran}</td>
                <td>قرآن</td>
                <td>5</td>

              </tr>
              <tr>
              <td>{gettype(e.taf_defa)}</td>

                <td>{e.taf_defa}</td>
                <td>تفکر/آمادگی دفاعی</td>
                <td>6</td>

              </tr>
              <tr>
              <td>{gettype(e.kar_fanavari)}</td>

                <td>{e.kar_fanavari}</td>
                <td>کار و فناوری</td>
                <td>7</td>

              </tr>
              <tr>
              <td>{gettype(e.arabic)}</td>

                <td>{e.arabic}</td>
                <td>عربی</td>
                <td>8</td>

              </tr>
              <tr>
              <td>{gettype(e.english)}</td>

                <td>{e.english}</td>
                <td>زبان خارجی</td>
                <td>9</td>

              </tr>
              <tr>
              <td>{gettype(e.ejte)}</td>

                <td>{e.ejte}</td>
                <td>اجتماعی</td>
                <td>10</td>

              </tr>
              <tr>
              <td>{gettype(e.honar)}</td>

                <td>{e.honar}</td>
                <td>هنر</td>
                <td>11</td>

              </tr>
              <tr>
              <td>{gettype(e.varzesh)}</td>

                <td>{e.varzesh}</td>
                <td>ورزش</td>
                <td>12</td>

              </tr>
              <tr>
              <td>{gettype(avgg)}</td>

                <td>{avgg.toFixed(2)}</td>
                <td>معدل</td>
                <td>-</td>

              </tr>
              </tbody>
              
            </table>
          </div>
        )})}
    </div>
  )
}
