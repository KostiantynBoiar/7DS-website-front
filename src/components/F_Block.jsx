import React from 'react'
import LogoImg from "./../assets/img/logo.svg";
const FeaturesBlock = ({ direction, title, text, link }) => {
    return (
        <div className={direction == 'left' ? 'featuresBlock' : 'featuresBlock featuresBlockRight'}>
            <img src={LogoImg} />
            <div className="content">
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={link}>Learn More</a>
            </div>
        </div>
    )
}

export default FeaturesBlock