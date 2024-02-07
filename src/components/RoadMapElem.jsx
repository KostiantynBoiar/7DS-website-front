import React from 'react'

const RoadMapElem = ({ title, left, top, imageSrc}) => {
    return (
        <div className='roadMapElem' style={{ left: left, top: top }}>
            <span className='roadMapElemTitle'>{title}</span>
            <span className='line'></span>
            <div className='roadMapElemBody'><img className = 'roadmap-image' src={imageSrc}/></div>
        </div>
    )
}

export default RoadMapElem