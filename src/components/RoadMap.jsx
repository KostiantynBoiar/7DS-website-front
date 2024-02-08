import React, {useEffect} from 'react'
import RoadMapBG from '../assets/img/roadmap.png';
import RoadMapElem from './RoadMapElem';
import logo from '../assets/img/logo.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const RoadMap = () => {

    useEffect(() => {
        AOS.init({
            // Global settings:
            offset: 300, // offset (in px) from the original trigger point
            duration: 2000, // duration (in ms) of the animation
            easing: 'ease', // default easing for AOS animations
            once: true // whether animation should happen only once - while scrolling down
        });
    }, []);

    return (
        <div className='roadMap'data-aos="fade-right" >
            <h2>OUR MISSION</h2>
            <img src={RoadMapBG} className='roadMapBG' />
            <RoadMapElem title='text' left='175px' top='210px' imageSrc = {logo}/>
            <RoadMapElem title='text' left='775px' top='210px' imageSrc = ''/>
            <RoadMapElem title='text' left='1175px' top='310px' imageSrc = ''/>
            <RoadMapElem title='text' left='475px' top='410px' imageSrc = ''/>
            <RoadMapElem title='text' left='875px' top='570px' imageSrc = ''/>
        </div>
    )
}

export default RoadMap