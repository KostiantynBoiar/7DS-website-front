import React from 'react'
import LogoIcon from './../assets/img/logo.svg'
import TelegramImg from "./../assets/img/telegram(1).png";
import TwitterImg from "./../assets/img/X.png";

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
                    
                    <a href='https://google.com'><img src={TelegramImg} className = 'One'/></a>
                    </li>
                    <li>
                    <a href='X.com'><img src={TwitterImg} className = 'Two'/></a>
                    </li>
                    </ul>
                </div>
                <div className="col">
                    <h3></h3>
                    <ul>


                    </ul>
                </div>
                <span>©2024 Envy. All rights reserved</span>

            </div>
        </footer>

    )
}

export default Fotter
