import React, { useState } from 'react'
import './RealEstate.css'
import { RiCloseCircleFill } from 'react-icons/ri'
import { BsHouseDoor } from 'react-icons/bs'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import Object1 from './Object1'

export default function RealEstate(props) {

    const { setRealEstateActive, setRealEstateContact } = props

    const [object1Clicked, setObjectOneClicked] = useState(false)

    return (
        <div className='realestate-modal'>
            <span className='modal-heading'>
                <p className='heading1'>Prodaja nekretnina</p>
                <p className='heading2'>Real Estate / Immobilien</p>
            </span>
            {!object1Clicked && <span className='modal-content'>
                <div className='estate-wrapper'>
                    <span className='estate-section' onClick={() => setObjectOneClicked(true)}>
                        <span className='house-icon'>
                            <BsHouseDoor color='gold' size={45} />
                        </span>
                        <div className='object1'></div>
                        <p>novogradnja - pripizdina</p>
                        <p className='price'>360.000€</p>
                    </span>
                    <span className='estate-section'>
                        <span className='building-icon'>
                            <HiOutlineBuildingOffice2 color='gold' size='45' />
                        </span>
                        <div className='object2'></div>
                        <p>58m2 - pripizdina</p>
                        <p className='price'>130.000€</p>
                    </span>
                </div>
            </span>}
            {object1Clicked && <Object1
                setObjectOneClicked={setObjectOneClicked}
                setRealEstateActive={setRealEstateActive}
                setRealEstateContact={setRealEstateContact} />}
            <span className='close-modal' onClick={() => setRealEstateActive(false)}>
                <RiCloseCircleFill size={45} color='gold' />
            </span>
        </div>
    )
}
