import React from 'react'
import LogoIcon from './../assets/img/snake.png'
import TelegramImg from "./../assets/img/telegram(2).png";
import TwitterImg from "./../assets/img/X.png";
import EmailIcon from "../assets/img/mail_icon.png"

const Fotter = () => {
    return (
        <footer>
            <div className='footerBody'>
                <div className="footer_logo">
                    <img src={LogoIcon} /> 
                </div>
                <div className="col">
                    <h3>Social & Community</h3>
                    <ul className='social-icons'>
                    <li>
                    
                    <a href='https://t.me/envycrpt'><img src={TelegramImg} className = 'One'/></a>
                    </li>
                    <li>
                    <a href='https://x.com/EnvyCoinCrpt?t=Z3Lhn3uWt0JN-6UBiIKJgQ&s=09'><img src={TwitterImg} className = 'Two'/></a>
                    </li>
                    <li>
                    <a href='mailto:envycommunicationgm@gmail.com'><img src={EmailIcon} className = 'Two'/></a>
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
