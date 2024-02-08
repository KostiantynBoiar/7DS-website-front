import React, {useState} from 'react'
import LogoImg from "./../assets/img/snake_xui.png";
import Modal from './Modal';


const FeaturesBlock = ({ direction, title, text, link }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className={direction == 'left' ? 'featuresBlock' : 'featuresBlock featuresBlockRight'}>
            <img src={LogoImg} />
            <div className="content">
                <h3>{title}</h3>
                <p>{text}</p>

                <Modal isOpen={isModalOpen} onClose={closeModal} />
            </div>
        </div>
    )
}

export default FeaturesBlock;