import React from 'react';
import LogoImg from "./../assets/img/snake.png";
import ArrowRight from "./../assets/img/arrow_right.svg";
import TelegramImg from "./../assets/img/telegram.svg";
import TwitterImg from "./../assets/img/twitter.svg";

const TopBaner = () => {
    return (
        <div className='topBaner'>
            <div className="left">
                <h1>BUY&HOLD AND GET RICH</h1>
                <span>Seven deadly sins - seven chances</span>
                <div className="btns">
                    <div className="btn">
                        Buy it now
                        <img src={ArrowRight} />
                    </div>
                </div>
            </div>
            <img className='topBanerImg' src={LogoImg} />
        </div>
    )
}

export default TopBaner