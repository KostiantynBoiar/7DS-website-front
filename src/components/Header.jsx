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
                <a href="#" className="scroll-to-class" data-class="features">White paper</a>
                <a href="#" className="scroll-to-class" data-class="roadMap">RoadMap</a>
                <a href="#" className="scroll-to-class" data-class="footerBody">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
