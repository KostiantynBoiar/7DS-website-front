import React, {useEffect} from 'react'
import RoadMapBG from '../assets/img/roadmap.png';
import RoadMapElem from './RoadMapElem';
import logo from '../assets/img/snake_logo.svg'
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
        <div className='roadMap'>
            <h2>OUR MISSION</h2>
            <div className="group-4">
            <div className="overlap-5">
              <p data-aos="fade-left" className="text-wrapper-22" id = 'snakeText'>
                Вот текст которій показівает нашу
                <br />
                миссию
              </p>
              <p data-aos="fade-right" className="text-wrapper-23" id = 'snakeText'>
                Вот текст которій показівает нашу
                <br />
                миссию
              </p>
              <p data-aos="fade-left" className="text-wrapper-24" id = 'snakeText'>
                Вот текст которій показівает нашу
                <br />
                миссию
              </p>
              <p data-aos="fade-right"  className="text-wrapper-25" id = 'snakeText'>
                Вот текст которій показівает нашу
                <br />
                миссию
              </p>
              <p data-aos="fade-left" className="text-wrapper-26" id = 'snakeText'>
                Вот текст которій показівает нашу
                <br />
                миссию
              </p>
              <p  data-aos="fade-right"  className="text-wrapper-27" id = 'snakeText'>
                Вот текст которій показівает нашу
                <br />
                миссию
              </p>
              <img
              data-aos="fade-right" 
                className="photo"
                alt="Photo"
                src={logo}
              />
            </div>
            <div data-aos="fade-right" className="text-wrapper-28" id = 'snakeText'>New mission</div>
          </div>
        </div>
    )
}

export default RoadMap