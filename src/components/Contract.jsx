import React, { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CheckMark from '../assets/img/check(1).png'
const Contract = () => {
    const [copied, setCopied] = useState(false);


    useEffect(() => {
        AOS.init({
            // Global settings:
            offset: 300, // offset (in px) from the original trigger point
            duration: 2000, // duration (in ms) of the animation
            easing: 'ease', // default easing for AOS animations
            once: true // whether animation should happen only once - while scrolling down
        });
    }, []);

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
    };

    return (
        <div className="contact-wrapper" data-aos="fade">
            <div className="contact">
                <div className="text-wrapper-29">Smart-contract</div>
                <img
                            className="checkmark"
                            alt="Copy"
                            src={CheckMark}
                        />
                <div className="overlap-group-6">
                    <img
                        className="rectangle-7"
                        alt="Rectangle"
                        src="https://cdn.animaapp.com/projects/65c0edfdfdd29f06c4910f07/releases/65c3f82b4897f7491f18622a/img/rectangle-7@2x.png"
                    />
                    <div className="text-wrapper-30">0x217406D51bB8bd006E8d55c0cFC2a1F56E061844</div>
                    <CopyToClipboard text="0x217406D51bB8bd006E8d55c0cFC2a1F56E061844" onCopy={handleCopy}>
                        <img
                            className="copy"
                            alt="Copy"
                            src="https://cdn.animaapp.com/projects/65c0edfdfdd29f06c4910f07/releases/65c3f82b4897f7491f18622a/img/copy-1.png"
                        />
                    </CopyToClipboard>
                </div>
                {copied && <div style={{ color: 'green' }}>Copied!</div>}
            </div>
        </div>
    );
};


export default Contract;