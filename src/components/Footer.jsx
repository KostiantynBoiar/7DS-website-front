import React from 'react'
import LogoIcon from './../assets/img/logo.svg'
import TelegramImg from "./../assets/img/telegram.svg";
import TwitterImg from "./../assets/img/twitter.svg";

const Fotter = () => {
    return (
        <footer>
            <div className='footerBody'>
                <div className="footer_logo">
                    <img src={LogoIcon} /> 
                </div>
                <div className="col">
                    <h3>Our social & media</h3>
                    <ul className='social-icons'>
                    <li>
                    <img src={TelegramImg} className = 'One'/>
                    </li>
                    <li>
                    <img src={TwitterImg} className = 'Two'/>
                    </li>
                    </ul>
                </div>
                <div className="col">
                    <h3></h3>
                    <ul>


                    </ul>
                </div>

            </div>
            <span>©2024 7DS. All rights reserved</span>
        </footer>

    )
}

export default Fotter