import React, { useEffect, useState } from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io'
import mainImg from '../assets/kuca/IMG-20230305-WA0038.jpg'
import sideImg1 from '../assets/kuca/IMG-20230305-WA0039.jpg'
import sideImg2 from '../assets/kuca/IMG-20230305-WA0040.jpg'
import sideImg3 from '../assets/kuca/projekat1.jpg'
import sideImg4 from '../assets/kuca/projekat2.jpg'
import sideImg5 from '../assets/kuca/projekat3.jpg'
import sideImg6 from '../assets/kuca/projekat4.jpg'


export default function Object1(props) {

    const { setObjectOneClicked, setRealEstateContact, setRealEstateActive, language } = props

    const [mainImgUrl, setMainImgUrl] = useState(`url(${mainImg})`)
    const [sideImg1Url, setSideImg1Url] = useState(`url(${sideImg1})`)
    const [sideImg2Url, setSideImg2Url] = useState(`url(${sideImg2})`)
    const [sideImg3Url, setSideImg3Url] = useState(`url(${sideImg3})`)
    const [sideImg4Url, setSideImg4Url] = useState(`url(${sideImg4})`)
    const [sideImg5Url, setSideImg5Url] = useState(`url(${sideImg5})`)
    const [sideImg6Url, setSideImg6Url] = useState(`url(${sideImg6})`)
    const [project, setProject] = useState(false)

    function handleContactUs() {
        setRealEstateContact(true)
        setObjectOneClicked(false)
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
                setProject(false)
                break;
            case 'side2':
                setSideImg2Url(mainImgUrl)
                setMainImgUrl(sideImg2Url)
                setProject(false)
                break;
            case 'side3':
                setSideImg3Url(mainImgUrl)
                setMainImgUrl(sideImg3Url)
                setProject(false)
                break;
            case 'side4':
                setSideImg4Url(mainImgUrl)
                setMainImgUrl(sideImg4Url)
                setProject(true)
                break;
            case 'side5':
                setSideImg5Url(mainImgUrl)
                setMainImgUrl(sideImg5Url)
                setProject(true)
                break;
            case 'side6':
                setSideImg6Url(mainImgUrl)
                setMainImgUrl(sideImg6Url)
                setProject(true)
                break;
            default:
                return
        }
    }

    return (
        <div className='object1-container'>
            <div className='object1-main'>
                <span className='back-arrow' onClick={() => setObjectOneClicked(false)}>
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
                    <div className={project ? 'object1-main-img project-size' : 'object1-main-img'}
                        style={{
                            backgroundImage: mainImgUrl
                        }}></div>
                </div>
                <div className='object1-right'>
                    <p>{language ? 'Novogradnja 3-sobna kuca sa rokom useljenja Ljeto 2023,sa mogućim jos jednim apartmanom od 36m² u prizemlju' : 'Newly built 3-room house with move-in deadline Summer 2023, with possible one more apartment of 36m² on the ground floor'}</p>
                    <p>{language ? 'Bazen / Đakuzi' : 'Pool / Jacuzzi'}</p>
                    <p>{language ? 'Pogled na more i prirodu' : 'View of the sea and nature'}</p>
                    <p>{language ? 'Miran kraj prepun zelenila' : 'A quiet neighborhood full of greenery'}</p>
                    <p>{language ? 'Cijena je fleksibilna' : 'The price is flexible'}</p>
                </div>
            </div>
            <div className='text-slider'>{language ? <p>Kad može Hollywood, možete i Vi! Ostvarite svoj san o sopstvenoj nekretnini na moru, po još uvijek dobrim cijenama odaberite za sebe stan ili kuću na Otoku Visu, u oazi netaknute prirode sa nekim od najljepših plaža na svijetu. Plaža Srebrna je 2006. godine izabrana za najljepšu plažu u Evropi. Kada je filmska industrija prepoznala potencijal, zašto ne biste i Vi. Na Otoku su se snimali razni filmovi među kojima je i 'Mamma mia'</p> : <p>When Hollywood can do it, so can you! Realize your dream of your own property by the sea, choose an apartment or house on the island of Vis, in an oasis of untouched nature with some of the most beautiful beaches in the world, at still good prices. In 2006, Srebrna beach was chosen as the most beautiful beach in Europe. When the film industry recognized the potential, why not you? Various films were shot on the island, including 'Mamma Mia'</p>}</div>
            <div className='object1-bottom'>
                <p>360.000€</p>
                <button className='object1-contact' onClick={handleContactUs}
                >{language ? 'kontaktirajte nas' : 'contact us'}</button>
            </div>
        </div>
    )
}
