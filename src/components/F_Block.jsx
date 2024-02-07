import React, {useState} from 'react'
import LogoImg from "./../assets/img/logo.svg";
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
                <button onClick={openModal} className='content-button' data-modal-target="static-modal" data-modal-toggle="static-modal" class="block text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                     Learn More 
                </button>
                <Modal isOpen={isModalOpen} onClose={closeModal} />
            </div>
        </div>
    )
}

export default FeaturesBlock;