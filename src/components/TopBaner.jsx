import React, { useEffect } from 'react';
import LogoImg from "./../assets/img/snake.png";
import ArrowRight from "./../assets/img/arrow_right.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TopBaner = () => {

    const handleButtonClick = () => {
        window.location.href = 'https://example.com'; // Замените 'https://example.com' на URL вашей внешней ссылки
    };
    
    useEffect(() => {
        AOS.init({
            // Global settings:
            offset: 300, // offset (in px) from the original trigger point
            duration: 1500, // duration (in ms) of the animation
            easing: 'ease', // default easing for AOS animations
            once: true // whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <div className='topBaner'>
            <div className="left" data-aos="fade-right">
                <h1>BUY & HOLD</h1>
                <span>Seven deadly sins - seven chances</span>
                <button onClick={handleButtonClick}>
                    <div className="btns">
                        <div className="btn">
                            Buy it now
                            <img src={ArrowRight} />
                        </div>
                    </div>
                </button>
            </div>
            <img data-aos="fade-left" className='topBanerImg' src={LogoImg} />
        </div>
    )
}


export default TopBaner;