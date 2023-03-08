import React from 'react'
import './SideBar.css'
import { RiCloseCircleFill } from 'react-icons/ri'
import { useState } from 'react'

function SideBar(props) {

    const { setRealEstateActive, setSideBarActive, realEstateActive } = props

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
            {hoverAction && <p className='covering-text'>kliknite za više informacija</p>}
            <span className='close-btn' onClick={(e) => handleClose(e)}>
                <RiCloseCircleFill size={25} color='gold' />
            </span>
            <p>prodaja nekretnina</p>
            <img src="https://www.montaznekuce.com/wp-content/uploads/2020/10/valjevo-123-1-450x270.jpg" alt="" />
            <img src="https://www.montaznekucedomtera.rs/images/klasicne-montazne-kuce.jpg" alt="" />
            <p>15.000$</p>
        </div>
    )
}

export default SideBar