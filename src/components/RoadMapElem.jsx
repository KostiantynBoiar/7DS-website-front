import React from 'react'

const RoadMapElem = ({ title, left, top }) => {
    return (
        <div className='roadMapElem' style={{ left: left, top: top }}>
            <span className='roadMapElemTitle'>{title}</span>
            <span className='line'></span>
            <div className='roadMapElemBody'></div>
        </div>
    )
}

export default RoadMapElem