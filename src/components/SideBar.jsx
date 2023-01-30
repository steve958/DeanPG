import React from 'react'
import './SideBar.css'
import { RiCloseCircleFill } from 'react-icons/ri'

function SideBar(props) {
    return (
        <div className='side-bar-container'>
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