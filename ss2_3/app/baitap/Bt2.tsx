import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faClock } from "@fortawesome/free-solid-svg-icons";
export default function Bt2() {
  return (
    <div>Bt2
        <div className='border-2 w-60 p-0.5 bg-slate-200'>
            <p>Input Lable</p>
            <div className='flex'>
                <input className='border-2 border-blue-500 rounded ' type="text" placeholder='clock' />
                <FontAwesomeIcon   style={{fontSize:"1px"}} icon={faClock}></FontAwesomeIcon>
            </div>
            <div className='border-2 w-[215px] p-0.5  bg-white'>
                <ul>
                    <li>lable <input className='ml-36 bg-blue-400' type="checkbox" /></li>
                    <li>lable <input className='ml-36 bg-blue-400' type="checkbox" /></li>
                    <li>lable <input className='ml-36 bg-blue-400' type="checkbox" /></li>
                    <li>lable <input className='ml-36 bg-blue-400' type="checkbox" /></li>
                </ul>
                <div className='flex '>
                    <button className='border-2 rounded w-48  '>Clear</button>
                    <button className='border-2 rounded w-48 bg-blue-500 border-blue-500 '>Apply</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}
