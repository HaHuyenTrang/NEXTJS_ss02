import React from 'react'
import './bt3.css'
export default function Bt3() {
  return (
    <div>Bt3
        <div className='form'>
            <b className='h1'>Form Sign up</b>
            <br />
            <b>Name</b>
            <br />
            <input className='ip' type="text" placeholder='Your name' />
            <br />
            <b>Email</b>
            <br />
            <input className='ip' type="text" placeholder='you@company.com' />
            <br />
            <b>Phone number</b>
            <br />
            <input className='ip' type="text" placeholder='US\/ +84 (123) 456-789' />
            <br />
            <b>Address</b>
            <br />
            <input className='address' type="text" placeholder='Tell us a little about the project...' />
            <br />
            <b>Skills</b>
            <div className='sks'>
                <ul>
                    <li><input type="checkbox" name="" id="" />HTML</li>
                    <li><input type="checkbox" name="" id="" />UX design</li>
                    <li><input type="checkbox" name="" id="" />CSS</li>
                </ul>
                <ul>
                    <li><input type="checkbox" name="" id="" />JavaScript</li>
                    <li><input type="checkbox" name="" id="" />ReactJS</li>
                    <li><input type="checkbox" name="" id="" />Java</li>
                </ul>
            </div>
            <button className='btn'>Sign up</button>
        </div>
    </div>
  )
}
