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
            <h2>ABOUT PROJECT</h2>
            <div data-aos="fade-right">           <FeaturesBlock   direction='right' link='#' title='Invest Smart' text='Our creation is dedicated to one of the deadly sins. It is called envy. Our project is a meme built on the BSC network and depicted in the form of a coin with a snake. Our team is not going to stop developing' /></div>
            <div data-aos="fade-left">            <FeaturesBlock  direction='left' link='#' title='Detailed Statistics' text='We want to build a friendly community, develop in different directions, starting with airdrops, then staking, and ending with games with the possibility of earning money. ' />
</div>
            <div data-aos="fade-right">            <FeaturesBlock  direction='right' link='#' title='Grow your profit and track your investments' text='We will constantly update our goals, which you can find in the “our missions” section. We will also continue to recruit specialists in various fields, constantly expanding the team and accelerating our development You can follow all our activity on our social networks' />
</div>
        </div>
    )
}

export default Features