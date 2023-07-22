import React, { useEffect, useState } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import mainImg from '../assets/vis-srebrna-plaza/main.jpg'
import sideImg1 from '../assets/vis-srebrna-plaza/slika1.jpg'
import sideImg2 from '../assets/vis-srebrna-plaza/slika2.jpg'
import sideImg3 from '../assets/vis-srebrna-plaza/slika3.jpg'
import sideImg4 from '../assets/vis-srebrna-plaza/slika4.jpg'
import sideImg5 from '../assets/vis-srebrna-plaza/slika5.jpg'
import sideImg6 from '../assets/vis-srebrna-plaza/slika6.jpg'
import sideImg7 from '../assets/vis-srebrna-plaza/slika7.jpg'
import sideImg8 from '../assets/vis-srebrna-plaza/slika8.jpg'
import sideImg9 from '../assets/vis-srebrna-plaza/slika9.jpg'
import sideImg10 from '../assets/vis-srebrna-plaza/slika10.jpg'
import sideImg11 from '../assets/vis-srebrna-plaza/slika11.jpg'
import sideImg12 from '../assets/vis-srebrna-plaza/slika12.jpg'

export default function Object7(props) {

    const { setRealEstateContact, setRealEstateActive, setObjectSevenClicked, language } = props

    const [mainImgUrl, setMainImgUrl] = useState(`url(${mainImg})`)
    const [sideImg1Url, setSideImg1Url] = useState(`url(${sideImg1})`)
    const [sideImg2Url, setSideImg2Url] = useState(`url(${sideImg2})`)
    const [sideImg3Url, setSideImg3Url] = useState(`url(${sideImg3})`)
    const [sideImg4Url, setSideImg4Url] = useState(`url(${sideImg4})`)
    const [sideImg5Url, setSideImg5Url] = useState(`url(${sideImg5})`)
    const [sideImg6Url, setSideImg6Url] = useState(`url(${sideImg6})`)
    const [sideImg7Url, setSideImg7Url] = useState(`url(${sideImg7})`)
    const [sideImg8Url, setSideImg8Url] = useState(`url(${sideImg8})`)
    const [sideImg9Url, setSideImg9Url] = useState(`url(${sideImg9})`)
    const [sideImg10Url, setSideImg10Url] = useState(`url(${sideImg10})`)
    const [sideImg11Url, setSideImg11Url] = useState(`url(${sideImg11})`)
    const [sideImg12Url, setSideImg12Url] = useState(`url(${sideImg12})`)

    function handleContactUs() {
        setRealEstateContact(true)
        setObjectSevenClicked(false)
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
            case 'side7':
                setSideImg7Url(mainImgUrl)
                setMainImgUrl(sideImg7Url)
                break;
            case 'side8':
                setSideImg8Url(mainImgUrl)
                setMainImgUrl(sideImg8Url)
                break;
            case 'side9':
                setSideImg9Url(mainImgUrl)
                setMainImgUrl(sideImg9Url)
                break;
            case 'side10':
                setSideImg10Url(mainImgUrl)
                setMainImgUrl(sideImg10Url)
                break;
            case 'side11':
                setSideImg11Url(mainImgUrl)
                setMainImgUrl(sideImg11Url)
                break;
            case 'side12':
                setSideImg12Url(mainImgUrl)
                setMainImgUrl(sideImg12Url)

            default:
                return
        }

    }

    return (
        <div className='object1-container'>
            <div className='object1-main'>
                <span className='back-arrow' onClick={() => setObjectSevenClicked(false)}>
                    <IoMdArrowRoundBack color='gold' size={55} />
                </span>
                <div className='object2-left'>
                    <div className='object2-slider'>
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
                        <span><div className='side-image'
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
                                onClick={() => handleMainImgChange('side6')}></div></span>
                        <span><div className='side-image'
                            style={{
                                backgroundImage: sideImg7Url
                            }}
                            onClick={() => handleMainImgChange('side7')}></div>
                            <div className='side-image'
                                style={{
                                    backgroundImage: sideImg8Url
                                }}
                                onClick={() => handleMainImgChange('side8')}></div>
                            <div className='side-image'
                                style={{
                                    backgroundImage: sideImg9Url
                                }}
                                onClick={() => handleMainImgChange('side9')}></div></span>
                        <span><div className='side-image'
                            style={{
                                backgroundImage: sideImg10Url
                            }}
                            onClick={() => handleMainImgChange('side10')}></div>
                            <div className='side-image'
                                style={{
                                    backgroundImage: sideImg11Url
                                }}
                                onClick={() => handleMainImgChange('side11')}></div>
                            <div className='side-image'
                                style={{
                                    backgroundImage: sideImg12Url
                                }}
                                onClick={() => handleMainImgChange('side12')}></div></span>
                    </div>
                    <div className='object2-main-img'
                        style={{
                            backgroundImage: mainImgUrl
                        }}></div>
                </div>
                <div className='object1-right'>
                    <p>{language ? 'Kuća sa pogledom na more koja u sebi ima 7 apartmana, svaki sa zasebnim ulazom.' : 'A house with a sea view that has 7 apartments, each with a separate entrance.'}</p>
                    <p>{language ? 'Odmah useljiva, vrlo blizu Srebrne plaže o kojoj nije potrebno previše pričati.' : 'Immediately ready to move in, very close to the Srebrna Plaža.'}</p>
                    <p>{language ? 'Odlična investicija koja isplaćuje samu sebe nakon 5-6 godina!' : 'An excellent investment that pays itself after 5-6 years!'}</p>
                </div>
            </div>
            <div className='object1-bottom'>
                <p>399.000€</p>
                <button className='object1-contact' onClick={handleContactUs}
                >{language ? 'kontaktirajte nas' : 'contact us'}</button>
            </div>
        </div>
    )
}
