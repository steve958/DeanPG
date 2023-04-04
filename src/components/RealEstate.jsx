import React, { useEffect, useState } from 'react'
import './RealEstate.css'
import { RiCloseCircleFill } from 'react-icons/ri'
import { BsHouseDoor } from 'react-icons/bs'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import Object1 from './Object1'
import Object2 from './Object2'
import Object3 from './Object3'
import Object4 from './Object4'
import Object5 from './Object5'

export default function RealEstate(props) {

    const { setRealEstateActive, setRealEstateContact, setSideBarActive, language } = props

    const [objectOneClicked, setObjectOneClicked] = useState(false)
    const [objectTwoClicked, setObjectTwoClicked] = useState(false)
    const [objectThreeClicked, setObjectThreeClicked] = useState(false)
    const [objectFourClicked, setObjectFourClicked] = useState(false)
    const [objectFiveClicked, setObjectFiveClicked] = useState(false)


    useEffect(() => {
        setSideBarActive(false)
        return setSideBarActive(false)
    }, [])

    return (
        <div className='realestate-modal'>
            <span className='modal-heading'>
                <p className='heading1'>{language ? 'Prodaja nekretnina' : 'Real estate for sale'}</p>
            </span>
            {!objectOneClicked
                && !objectTwoClicked
                && !objectThreeClicked
                && !objectFourClicked
                && !objectFiveClicked
                && <span className='modal-content'>
                    <div className='estate-wrapper'>
                        <span className='estate-section'
                            onClick={() => {
                                setObjectOneClicked(true)
                                setObjectTwoClicked(false)
                                setObjectThreeClicked(false)
                                setObjectFourClicked(false)
                                setObjectFiveClicked(false)
                            }}>
                            <span className='house-icon'>
                                <BsHouseDoor color='gold' size={45} />
                            </span>
                            <div className='object1'></div>
                            <p>{language ? 'Novogradnja - Vis-Rukavac, Srebrna plaža' : 'New House - Vis-Rukavac, Srebrna plaža'}</p>
                            <p className='price'>380.000€</p>
                        </span>
                        <span className='estate-section'
                            onClick={() => {
                                setObjectOneClicked(false)
                                setObjectTwoClicked(true)
                                setObjectThreeClicked(false)
                                setObjectFourClicked(false)
                                setObjectFiveClicked(false)
                            }}>
                            <span className='building-icon'>
                                <HiOutlineBuildingOffice2 color='gold' size='45' />
                            </span>
                            <div className='object2'></div>
                            <p>{language ? '37m² - Otok Vis' : '37m² - Island of Vis'}</p>
                            <p className='price'>140.000€</p>
                        </span>
                        <span className='estate-section'
                            onClick={() => {
                                setObjectOneClicked(false)
                                setObjectTwoClicked(false)
                                setObjectThreeClicked(true)
                                setObjectFourClicked(false)
                                setObjectFiveClicked(false)
                            }}>
                            <span className='house-icon'>
                                <BsHouseDoor color='gold' size={45} />
                            </span>
                            <div className='object3'></div>
                            <p>{language ? 'Kuća Kut-Valica Neuseljavana' : 'Kut-Rukavac No previous owners'}</p>
                            <p className='price'>420.000€</p>
                        </span>
                        <span className='estate-section'
                            onClick={() => {
                                setObjectOneClicked(false)
                                setObjectTwoClicked(false)
                                setObjectThreeClicked(false)
                                setObjectFourClicked(true)
                                setObjectFiveClicked(false)
                            }}>
                            <span className='building-icon'>
                                <HiOutlineBuildingOffice2 color='gold' size='45' />
                            </span>
                            <div className='object4'></div>
                            <p>{language ? 'Stan-Hvar 37m² +7,5m² teraca' : 'Apartment-Hvar 37m² + 7,5m² terrace'}</p>
                            <p className='price'>113.000€</p>
                        </span>
                        <span className='estate-section'
                            onClick={() => {
                                setObjectOneClicked(false)
                                setObjectTwoClicked(false)
                                setObjectThreeClicked(false)
                                setObjectFourClicked(false)
                                setObjectFiveClicked(true)
                            }}>
                            <span className='building-icon'>
                                <HiOutlineBuildingOffice2 color='gold' size='45' />
                            </span>
                            <div className='object5'></div>
                            <p>{language ? 'Stan-Hvar 24m² + 7,5m² teraca' : 'Apartment-Hvar 24m² + 7,5m² terrace'}</p>
                            <p className='price'>93.000€</p>
                        </span>
                    </div>
                </span>}
            {objectOneClicked && <Object1
                setObjectOneClicked={setObjectOneClicked}
                setRealEstateActive={setRealEstateActive}
                setRealEstateContact={setRealEstateContact}
                language={language} />}
            {objectTwoClicked && <Object2
                setObjectTwoClicked={setObjectTwoClicked}
                setRealEstateActive={setRealEstateActive}
                setRealEstateContact={setRealEstateContact}
                language={language}
            />}
            {objectThreeClicked && <Object3
                setObjectThreeClicked={setObjectThreeClicked}
                setRealEstateActive={setRealEstateActive}
                setRealEstateContact={setRealEstateContact}
                language={language}
            />}
            {objectFourClicked && <Object4
                setObjectFourClicked={setObjectFourClicked}
                setRealEstateActive={setRealEstateActive}
                setRealEstateContact={setRealEstateContact}
                language={language}
            />}
            {objectFiveClicked && <Object5
                setObjectFiveClicked={setObjectFiveClicked}
                setRealEstateActive={setRealEstateActive}
                setRealEstateContact={setRealEstateContact}
                language={language}
            />}
            <span className='close-modal'
                onClick={() => setRealEstateActive(false)}>
                <RiCloseCircleFill size={45} color='gold' />
            </span>
        </div>
    )
}
