import React from 'react'
import './RealEstate.css'
import { RiCloseCircleFill } from 'react-icons/ri'

export default function RealEstate(props) {

    const { setRealEstateActive } = props

    return (
        <div className='realestate-modal'>
            <span className='modal-heading'>
                <p className='heading1'>Prodaja nekretnina</p>
                <p className='heading2'>Real Estate / Immobilien</p>
            </span>
            <span className='modal-content'>
                <div className='estate-wrapper'>
                    <span className='estate-section'>
                        <span>
                            <div className='object1'></div>
                            <p>kratak opis</p>
                        </span>
                        <p>cena</p>
                    </span>
                    <span className='estate-section'>
                        <div className='object2'></div>
                    </span>
                    <span className='estate-section'>
                        <div className='object3'></div>
                    </span>
                </div>
            </span>
            <span className='close-modal' onClick={() => setRealEstateActive(false)}>
                <RiCloseCircleFill size={45} color='gold' />
            </span>
        </div>
    )
}
