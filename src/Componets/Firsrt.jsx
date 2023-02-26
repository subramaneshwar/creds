import React from 'react'
import './first.css'
function Firsrt() {
    return (
        <div className='first'>
            <nav>
                <img src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" alt="" />
                <div className="menu">
                    <a href="#score">credit score check</a>
                    <a href="#pay">CRED pay</a>
                </div>
            </nav>
            <div className="cont">
                <h1>rewards for paying </h1>
                <h1> credit card bills.</h1>
                <p>join 9M+ members who win rewards and cashbacks everyday</p> 
                <button>Download CRED</button>   
            </div>
        </div>
    )
}

export default Firsrt