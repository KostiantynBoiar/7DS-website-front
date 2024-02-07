import React from 'react';
import LogoImg from "./../assets/img/logo.svg";
import ArrowRight from "./../assets/img/arrow_right.svg";
import TelegramImg from "./../assets/img/telegram.svg";
import TwitterImg from "./../assets/img/twitter.svg";
const TopBaner = () => {
    return (
        <div className='topBaner'>
            <div className="left">
                <h1>Best cryptocurrency 2024</h1>
                <span>The text of your company's slogan to attract customers</span>
                <div className="btns">
                    <div className="btn">
                        Buy it now
                        <img src={ArrowRight} />
                    </div>
                    <a href="#"><img src={TelegramImg} /></a>
                    <a href="#"><img src={TwitterImg} /></a>
                </div>
            </div>
            <img className='topBanerImg' src={LogoImg} />
        </div>
    )
}

export default TopBaner