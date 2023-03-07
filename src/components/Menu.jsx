import React from "react";
import { useState } from "react";
import './Menu.css'
import { TfiHummer } from 'react-icons/tfi'

const Menu = () => {

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

    return <div className="menu-container">
        <div className="menu-item" onMouseLeave={() => setHoverItem('')} onMouseEnter={() => setHoverItem('pocetna')} >Početna
            {hoverItem === 'pocetna' && <span className="hummer"><TfiHummer size={50} color='gold' /></span>}</div>
        <div className="menu-item" onMouseLeave={() => setHoverItem('')} onMouseEnter={() => setHoverItem('usluge')} onClick={handleProjectsClick}>Naše usluge
            {hoverItem === 'usluge' && <span className="hummer"><TfiHummer size={50} color='gold' /></span>}</div>
        <div className="menu-item" onMouseLeave={() => setHoverItem('')} onMouseEnter={() => setHoverItem('o nama')} onClick={handleAboutClick}>O nama
            {hoverItem === 'o nama' && <span className="hummer"><TfiHummer size={50} color='gold' /></span>}</div>
        <div className="menu-item" onMouseLeave={() => setHoverItem('')} onMouseEnter={() => setHoverItem('kontakt')} onClick={handleContactClick}>Kontakt
            {hoverItem === 'kontakt' && <span className="hummer"><TfiHummer size={50} color='gold' /></span>}</div>
        <div className="realestate menu-item">
            <p>
                Prodaja nekretnina
            </p>
            <p className="immobilien">Real Estate / Immobilien</p>
        </div>
    </div >
}

export default Menu