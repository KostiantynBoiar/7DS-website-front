import React from 'react'
import RoadMapBG from '../assets/img/roadmap.png';
import RoadMapElem from './RoadMapElem';
import logo from '../assets/img/logo.svg'
const RoadMap = () => {
    return (
        <div className='roadMap' >
            <h2>Our roadmap</h2>
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