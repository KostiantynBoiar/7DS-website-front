import React from 'react'
import FeaturesBlock from './F_Block'

const Features = () => {
    return (
        <div className='features' >
            <div className='circleBG circle1'></div>
            <div className='circleBG circle2'></div>
            <div className='circleBG circle3'></div>
            <h2>White paper about your currency</h2>
            <FeaturesBlock direction='right' link='#' title='Invest Smart' text='Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. ' />
            <FeaturesBlock direction='left' link='#' title='Detailed Statistics' text='View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.' />
            <FeaturesBlock direction='right' link='#' title='Grow your profit and track your investments' text='Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.' />
        </div>
    )
}

export default Features