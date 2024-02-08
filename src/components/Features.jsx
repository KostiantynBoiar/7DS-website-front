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
            <h2>White paper about your currency</h2>
            <div data-aos="fade-right">           <FeaturesBlock   direction='right' link='#' title='Invest Smart' text='Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. ' /></div>
            <div data-aos="fade-left">            <FeaturesBlock  direction='left' link='#' title='Detailed Statistics' text='View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.' />
</div>
            <div data-aos="fade-right">            <FeaturesBlock  direction='right' link='#' title='Grow your profit and track your investments' text='Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.' />
</div>
        </div>
    )
}

export default Features