import React, { useEffect } from 'react'
import FeaturesBlock from './F_Block'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Features = () => {

    useEffect(() => {
        AOS.init({
            // Global settings:
            offset: 300, // offset (in px) from the original trigger point
            duration: 1000, // duration (in ms) of the animation
            easing: 'ease', // default easing for AOS animations
            once: true // whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <div className='features'>
            <div className='circleBG circle1'></div>
            <div className='circleBG circle2'></div>
            <div className='circleBG circle3'></div>
            <h2>ABOUT TOKEN</h2>
            <div data-aos="fade-right">           <FeaturesBlock   direction='right' link='#' title='Introduction' text= 'Our creation is dedicated to one of the deadly sins. It was created on the BSC network. Has a total supply of 100 million tokens and is presented in the form of a coin with a snake design' /></div>
            <div data-aos="fade-left">            <FeaturesBlock  direction='left' link='#' title='Idea & implementation' text='pohui vse ravno nikto ne 4itaet' />
</div>
            <div data-aos="fade-right">            <FeaturesBlock  direction='right' link='#' title='This might interested you' text='The developers are gonna create a “Play to Earn” game and make a staking system for motivation to stay with us' />
</div>
        </div>
    )
}

export default Features