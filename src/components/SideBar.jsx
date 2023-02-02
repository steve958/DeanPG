import React from 'react'
import './SideBar.css'
import { RiCloseCircleFill } from 'react-icons/ri'
import { useState } from 'react'

function SideBar(props) {
    const [hoverAction, setHoverAction] = useState(false)
    const [moreInfoClicked, setMoreInfoClicked] = useState(false)

    function handleClick() {
        setHoverAction(false)
        setMoreInfoClicked(true)
    }

    return (
        <div className='side-bar-container'
            style={{
                width: moreInfoClicked ? '100vw' : null,
                height: moreInfoClicked ? '70vh' : null
            }}
            onMouseEnter={() => !moreInfoClicked && setHoverAction(true)}
            onMouseLeave={() => !moreInfoClicked && setHoverAction(false)}
            onClick={handleClick}>
            {hoverAction && <div className='covering-sidebar'>
            </div>}
            {hoverAction && <p className='covering-text'>kliknite za više informacija</p>}
            <span className='close-btn' onClick={() => props.setSideBarActive(false)}>
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