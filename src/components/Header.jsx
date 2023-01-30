import React from "react";
import './Header.css'
import { BsTelephone, BsHouseDoor } from 'react-icons/bs'
import { FaRegClock, FaFacebookSquare } from 'react-icons/fa'
import { TiSocialInstagram } from 'react-icons/ti'


const Header = () => {

    return <div className="header-container">
        <div className="logo-container">
            <div className="logo"></div>
        </div>
        <div className="informations-container">
            <span className="info-field">
                <span className="info-icon"><BsTelephone size={45} /></span>
                <span className="info-text">
                    <p>+395 3466323</p>
                    <p className="gray-text">info@dean-ausbau.de</p>
                </span>
            </span>
            <span className="info-field middle">
                <span className="info-icon">
                    <BsHouseDoor size={45} />
                </span>
                <span className="info-text">
                    <p>Ul. Donja Pastuša 23</p>
                    <p className="gray-text">Donja Pastuša, HR</p>
                </span>
            </span>
            <span className="info-field">
                <span className="info-icon">
                    <FaRegClock size={45} />
                </span>
                <span className="info-text">
                    <p>PON-SUB</p>
                    <p className="gray-text">08:00-16:00</p>
                </span>
            </span>
        </div>
        <div className="social-icons-container">
            <FaFacebookSquare size={30} color='gold' />
            <TiSocialInstagram size={30} color='gold' />
        </div>
    </div>
}

export default Header