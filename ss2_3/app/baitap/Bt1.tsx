import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faEye } from "@fortawesome/free-solid-svg-icons";
export default function Bt1() {
  return (
    <div>Bt1
        <div className='border-2 w-60 bg-slate-100'>
            <p className='text-blue-500'>Label</p>
            <input className='border-2 border-blue-500 rounded' type="text" placeholder='placeholder' />
            <p className='w-[20px] mx-44 absolute mb-10'><FontAwesomeIcon  style={{fontSize:"1px"}} icon={faEye}></FontAwesomeIcon></p>
            <p className='text-slate-400'>Helper Text</p>
        </div>
    </div>
  )
}
