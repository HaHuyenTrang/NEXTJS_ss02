import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faUser } from "@fortawesome/free-solid-svg-icons";
import './bt6.css'
export default function Bt6() {
  return (
    <div>Bt6
        <div style={{color:'white'}} className='logo'>
            <div >
                <h3>logoipsum</h3>
            </div>
            <div style={{color:'white'}} className='home-update'>
                <p>Home</p>
                <p>Updates</p>
                <p>Services</p>
                <p>Features</p>
                <p>About Us</p>
            </div>
            <div>
            <FontAwesomeIcon style={{color:'white'}} className='icon-user'   icon={faUser}></FontAwesomeIcon>
            </div>
        </div>
    </div>
  )
}
