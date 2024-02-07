import React from 'react'
import DataArrow from './../assets/img/data_arrow.png';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const DataElem = ({ color, title, amount, progressLength }) => {
    return (
        <div className='dataElem'>
            <div className="circle">
                <CircularProgressbarWithChildren
                    value={progressLength}
                    styles={buildStyles({

                        rotation: 1,
                        strokeLinecap: 'butt',
                        textSize: '16px',
                        pathTransitionDuration: 0.5,
                        pathColor: color == 'light' ? `rgb(8, 177, 186)` : `rgb(58, 87, 232)`,
                        trailColor: 'rgb(92, 108, 165)',
                        backgroundColor: '#3e98c7',
                    })}
                > <img src={DataArrow} />
                </CircularProgressbarWithChildren>
            </div>
            <div className="right">
                <span>{title}</span>
                <p>{amount}</p>
            </div>
        </div>
    )
}

export default DataElem