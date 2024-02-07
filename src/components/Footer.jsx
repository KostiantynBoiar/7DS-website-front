import React from 'react'
import LogoIcon from './../assets/img/logo.svg'
const Fotter = () => {
    return (
        <footer>
            <div className='footerBody'>
                <div className="footer_logo">
                    <img src={LogoIcon} /> Seven deadly sinc
                </div>
                <div className="col">
                    <h3>Quick Link</h3>
                    <ul>
                        <a href="#">Home</a>
                        <a href="#">RoadMap</a>
                        <a href="#">About</a>
                        <a href="#">Data</a>
                        <a href="#">Contact</a>
                    </ul>
                </div>
                <div className="col">
                    <h3>Resources</h3>
                    <ul>
                        <a href="#">Download Whitepapper</a>
                        <a href="#">Snart Token</a>
                        <a href="#">Blockchain Explorer</a>
                        <a href="#">Crypto API</a>
                        <a href="#">Interest</a>
                    </ul>
                </div>
                <div className="col">
                    <h3>Contact us</h3>
                    <ul>
                        <a href="#">Telegram</a>
                        <a href="#">X</a>
                        <a href="#">Something else</a>
                    </ul>
                </div>

            </div>
            <span>©2024 7DS. All rights reserved</span>
        </footer>

    )
}

export default Fotter