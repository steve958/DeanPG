import React from 'react'
import './SideBar.css'
import { RiCloseCircleFill } from 'react-icons/ri'
import { useState } from 'react'

function SideBar(props) {

    const { setRealEstateActive, setSideBarActive, realEstateActive, language } = props

    const [hoverAction, setHoverAction] = useState(false)


    function handleClick() {
        setHoverAction(false)
        setRealEstateActive(true)
    }

    function handleClose(e) {
        e.stopPropagation()
        setSideBarActive(false)
    }


    return (
        <div className='side-bar-container'
            onMouseEnter={() => !realEstateActive && setHoverAction(true)}
            onMouseLeave={() => !realEstateActive && setHoverAction(false)}
            onClick={handleClick}>
            {hoverAction && <div className='covering-sidebar'>
            </div>}
            {hoverAction && <p className='covering-text'>{language ? 'kliknite za više informacija' : 'click for more informations'}</p>}
            <span className='close-btn' onClick={(e) => handleClose(e)}>
                <RiCloseCircleFill size={25} color='gold' />
            </span>
            <p>{language ? 'prodaja nekretnina' : 'real estate for sale'}</p>
            <p className='commpany-name-1'>dean projekt gradnja</p>
            <p className='commpany-name-2'>dean projekt gradnja</p>
            <div className='object1-sidebar'>360.000€</div>
            <div className='object2-sidebar'>130.000€</div>
        </div>
    )
}

export default SideBar