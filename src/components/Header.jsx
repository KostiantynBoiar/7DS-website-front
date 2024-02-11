import React, { useEffect } from 'react';
import LogoImg from './../assets/img/snake.png';

const Header = () => {
    
    useEffect(() => {
        const handleClick = (event) => {
            event.preventDefault();
            const targetClass = event.target.getAttribute('data-class');
            const targetElement = document.querySelector('.' + targetClass);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        };

        const links = document.querySelectorAll('.scroll-to-class');
        links.forEach(link => link.addEventListener('click', handleClick));

        return () => {
            links.forEach(link => link.removeEventListener('click', handleClick));
        };
    }, []);

    return (
        <header>
            <div className="logo">
                <img src={LogoImg} alt="logo" />
                ENVY
            </div>
            <nav>
                <a href="#" className="scroll-to-class" data-class="features">About us</a>
                <a href="#" className="scroll-to-class" data-class="roadMap">Our mission</a>
                <a href="#" className="scroll-to-class" data-class="data">Tokenomics</a>
                <a href="#" className="scroll-to-class" data-class="footerBody">Join community</a>
            </nav>
        </header>
    );
};

export default Header;
