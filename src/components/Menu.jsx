import React from "react";
import { useState } from "react";
import './Menu.css'
import { TfiHummer } from 'react-icons/tfi'

const Menu = (props) => {

    const { setRealEstateActive, language, setLanguage } = props

    const [hoverItem, setHoverItem] = useState('pocetna')

    function handleContactClick() {
        const element = document.getElementsByClassName('about-icons')
        element[0].scrollIntoView({ behavior: 'smooth' });
    }

    function handleAboutClick() {
        const element = document.getElementsByClassName('about-section')
        element[0].scrollIntoView({ behavior: 'smooth' });
    }

    function handleProjectsClick() {
        const element = document.getElementsByClassName('main-footer')
        element[0].scrollIntoView({ behavior: 'smooth' })
    }

    function handleRealEstateClick() {
        setRealEstateActive(true)
    }

    return <div className="menu-container">
        <div className="menu-item" onMouseLeave={() => setHoverItem('')} onMouseEnter={() => setHoverItem('pocetna')} >{language ? 'Početna' : 'Home'}
            {hoverItem === 'pocetna' && <span className="hummer"><TfiHummer size={50} color='gold' /></span>}</div>
        <div className="menu-item" onMouseLeave={() => setHoverItem('')} onMouseEnter={() => setHoverItem('usluge')} onClick={handleProjectsClick}>{language ? 'Naše usluge' : 'Our services'}
            {hoverItem === 'usluge' && <span className="hummer"><TfiHummer size={50} color='gold' /></span>}</div>
        <div className="menu-item" onMouseLeave={() => setHoverItem('')} onMouseEnter={() => setHoverItem('o nama')} onClick={handleAboutClick}>{language ? 'O nama' : 'About us'}
            {hoverItem === 'o nama' && <span className="hummer"><TfiHummer size={50} color='gold' /></span>}</div>
        <div className="menu-item" onMouseLeave={() => setHoverItem('')} onMouseEnter={() => setHoverItem('kontakt')} onClick={handleContactClick}>{language ? 'Kontakt' : 'Contact'}
            {hoverItem === 'kontakt' && <span className="hummer"><TfiHummer size={50} color='gold' /></span>}</div>
        <div className="realestate menu-item"
            onClick={handleRealEstateClick}>
            <p>
                {language ? 'Prodaja nekretnina' : 'Real Estate for Sale'}
            </p>
            {/* <p className="immobilien">Real Estate / Immobilien</p> */}
        </div>
        <div className="language-wrapper">
            <p>{language ? 'Jezik:' : 'Language:'}</p>
            <span>
                <div className={language ? "croatia active" : 'croatia'}
                    onClick={() => setLanguage('croatian')}></div>
                <div className={language ? "english" : 'english  active'}
                    onClick={() => setLanguage('')}></div>
            </span>
        </div>
    </div >
}

export default Menu