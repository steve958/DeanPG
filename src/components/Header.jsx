import React from "react";
import './Header.css'
import { BsTelephone, BsHouseDoor } from 'react-icons/bs'
import { FaRegClock, FaFacebookSquare } from 'react-icons/fa'
import { TiSocialInstagram } from 'react-icons/ti'


const Header = (props) => {

    const { language } = props

    return <div className="header-container">
        <div className="logo-container">
            <div className="logo"></div>
        </div>
        <div className="informations-container">
            <span className="info-field">
                <span className="info-icon"><BsTelephone size={45} /></span>
                <span className="info-text">
                    <p>+385 95 3466 323</p>
                    <p className="gray-text">info@dean-ausbau.de</p>
                </span>
            </span>
            <span className="info-field middle">
                <span className="info-icon">
                    <BsHouseDoor size={45} />
                </span>
                <span className="info-text">
                    <p>{language ? 'Ul.Donja Pastuša 23' : 'St.Donja Pastuša 23'}</p>
                    <p className="gray-text">Petrinja, HR</p>
                </span>
            </span>
            <span className="info-field">
                <span className="info-icon">
                    <FaRegClock size={45} />
                </span>
                <span className="info-text">
                    <p>{language ? 'PON-SUB' : 'MON-SAT'}</p>
                    <p className="gray-text">08:00-16:00</p>
                </span>
            </span>
        </div>
        <div className="social-icons-container">
            <a href="https://www.instagram.com/deanausbau/" target="_blank">
                <TiSocialInstagram size={40} color='gold' />
            </a>
            <a href="https://www.instagram.com/deanausbau/" target="_blank">
                <FaFacebookSquare size={35} color='gold' />
            </a>
        </div>
    </div>
}

export default Header