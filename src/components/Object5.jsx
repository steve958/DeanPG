import React, { useEffect, useState } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import mainImg from '../assets/stan-hvar/slika3.jpg'
import sideImg1 from '../assets/stan-hvar/slika1.jpg'
import sideImg2 from '../assets/stan-hvar/slika2.jpg'
import sideImg3 from '../assets/stan-hvar/slika4.jpg'
import sideImg4 from '../assets/stan-hvar/slika5.jpg'
import sideImg5 from '../assets/stan-hvar/slika6.jpg'
import sideImg6 from '../assets/stan-hvar/slika7.jpg'


export default function Object5(props) {
    const { setObjectFiveClicked, setRealEstateContact, setRealEstateActive, language } = props

    const [mainImgUrl, setMainImgUrl] = useState(`url(${mainImg})`)
    const [sideImg1Url, setSideImg1Url] = useState(`url(${sideImg1})`)
    const [sideImg2Url, setSideImg2Url] = useState(`url(${sideImg2})`)
    const [sideImg3Url, setSideImg3Url] = useState(`url(${sideImg3})`)
    const [sideImg4Url, setSideImg4Url] = useState(`url(${sideImg4})`)
    const [sideImg5Url, setSideImg5Url] = useState(`url(${sideImg5})`)
    const [sideImg6Url, setSideImg6Url] = useState(`url(${sideImg6})`)

    function handleContactUs() {
        setRealEstateContact(true)
        setObjectFiveClicked(false)
        setRealEstateActive(false)
    }

    useEffect(() => {
        setRealEstateContact(false)
    }, [])

    function handleMainImgChange(string) {

        switch (string) {
            case 'side1':
                setSideImg1Url(mainImgUrl)
                setMainImgUrl(sideImg1Url)
                break;
            case 'side2':
                setSideImg2Url(mainImgUrl)
                setMainImgUrl(sideImg2Url)
                break;
            case 'side3':
                setSideImg3Url(mainImgUrl)
                setMainImgUrl(sideImg3Url)
                break;
            case 'side4':
                setSideImg4Url(mainImgUrl)
                setMainImgUrl(sideImg4Url)
                break;
            case 'side5':
                setSideImg5Url(mainImgUrl)
                setMainImgUrl(sideImg5Url)
                break;
            case 'side6':
                setSideImg6Url(mainImgUrl)
                setMainImgUrl(sideImg6Url)
                break;
            default:
                return
        }
    }

    return (<div className='object1-container'>
        <div className='object1-main'>
            <span className='back-arrow' onClick={() => setObjectFiveClicked(false)}>
                <IoMdArrowRoundBack color='gold' size={55} />
            </span>
            <div className='object1-left'>
                <div className='object1-slider'>
                    <span>
                        <div className='side-image'
                            style={{
                                backgroundImage: sideImg1Url
                            }}
                            onClick={() => handleMainImgChange('side1')}></div>
                        <div className='side-image'
                            style={{
                                backgroundImage: sideImg2Url
                            }}
                            onClick={() => handleMainImgChange('side2')}></div>
                        <div className='side-image'
                            style={{
                                backgroundImage: sideImg3Url
                            }}
                            onClick={() => handleMainImgChange('side3')}></div>
                    </span>
                    <span>
                        <div className='side-image'
                            style={{
                                backgroundImage: sideImg4Url
                            }}
                            onClick={() => handleMainImgChange('side4')}></div>
                        <div className='side-image'
                            style={{
                                backgroundImage: sideImg5Url
                            }}
                            onClick={() => handleMainImgChange('side5')}></div>
                        <div className='side-image'
                            style={{
                                backgroundImage: sideImg6Url
                            }}
                            onClick={() => handleMainImgChange('side6')}></div>
                    </span>
                </div>
                <div className='object1-main-img'
                    style={{
                        backgroundImage: mainImgUrl
                    }}></div>
            </div>
            <div className='object1-right'>
                <p>{language ? 'Jednosoban stan na Hvaru, ul Marina Blagajića 11. Površina 24m² + 7,5m² teraca. Renoviran.' : 'One-room apartment on Hvar in the street Marina Blagajića 11. Square footage 24m² + 7,5m² terrace. Renovated.'}</p>
                <p>{language ? 'Oko stana veliki vrt.' : 'The apartment is surrounded by a large garden'}</p>
            </div>
        </div>
        <div className='object1-bottom'>
            <p>77.000€</p>
            <button className='object1-contact' onClick={handleContactUs}
            >{language ? 'kontaktirajte nas' : 'contact us'}</button>
        </div>
    </div>
    )
}
