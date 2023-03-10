import React, { useRef, useEffect, useState, Suspense } from "react";
import './Content.css'
import { MdOutlineHighQuality, MdOutlineAlternateEmail } from 'react-icons/md'
import { RiMoneyEuroBoxLine } from 'react-icons/ri'
import { IoMdTimer } from 'react-icons/io'
import { BsTelephone } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { TiSocialInstagram } from 'react-icons/ti'
import { CgArrowUpR } from 'react-icons/cg'
import { GiConfirmed } from 'react-icons/gi'
import { BiError } from 'react-icons/bi'
import emailjs from '@emailjs/browser';
import Gallery from "./Gallery";

const Content = (props) => {

    const { realEstateContact, language } = props

    const ref = useRef(null)
    const form = useRef(null)
    const [isVisible, setIsVisible] = useState(true)
    const [messageSent, setMessageSent] = useState(false)
    const [messageError, setMessageError] = useState(false)

    useEffect(() => {
        if (messageSent) {
            setTimeout(() => { setMessageSent(false) }, 3000)
        }
    }, [messageSent])

    useEffect(() => {
        if (realEstateContact) {
            handleContactClick()
        }
    }, [realEstateContact])

    useEffect(() => {
        if (messageError) {
            setTimeout(() => { setMessageError(false) }, 3000)
        }
    }, [messageError])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                } else { setIsVisible(false) }
            }))
        })
        observer.observe(ref.current)
        return () => observer.unobserve(ref.current)
    }, [ref])

    const [renovationHover, setRenovationHover] = useState(false)
    const [constructionHover, setConstructionHover] = useState(false)
    const [housesHover, setHousesHover] = useState(false)
    const [galleryCover, setGalleryCover] = useState(true)


    function handleContactClick() {
        const element = document.getElementsByClassName('about-icons')
        element[0].scrollIntoView({ behavior: 'smooth' });
    }

    function handleTopArrowClick() {
        const element = document.getElementsByClassName('header-container')
        element[0].scrollIntoView({ behavior: 'smooth' })
    }

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_5k3args', 'template_gtvfrs3', form.current, 'pDjSDgSb5GhFbV37I')
            .then((result) => {
                setMessageSent(true)
                console.log(result.text);
            }, (error) => {
                setMessageError(true)
                console.log(error.text);
            });
        e.target.reset()
    }


    return <div className="content-container">
        {!isVisible && <div className="home-icon">
            <span onClick={handleTopArrowClick}><CgArrowUpR color="white" size={100} className='arrow-top' /></span></div>}
        <div className="background-img" ref={ref}></div>
        <div className="motivation-msg">
            <p className="quote">{!language ? '???The bitterness of poor quality remains long after the sweetness of low price is forgotten.???'
                : '???Gor??ina lo??e kvalitete ostaje dugo nakon ??to se zaboravi slatko??a niske cijene.???'}</p>
            <p className="author">- Benjamin Franklin</p>
        </div>
        <div className="main-footer"><p>{language ? 'Tra??ite pouzdanog partnera za izgradnju ili renoviranje?'
            : 'Looking for a reliable partner for construction or renovation?'}</p>
            <button className="contact-btn" onClick={handleContactClick}>{language ? 'kontaktirajte nas' : 'contact us'}</button>
        </div>
        <div className="projects-section">
            <div className="projects-summary">
                <div className="left-section">
                </div>
                <div className="middle-section">
                    <span>
                        <p>{language ? 'Na??e' : 'Our'}</p><p className="yellow-text">{language ? 'usluge' : 'services'}</p>
                    </span>
                    <p className="description">{language ? 'Na??a tvrtka je specijalizirana za izgradnju stambenih objekata. Tvrtka zapo??ljava tim kvalificiranih radnika, kao ??to su zidari, stolari, kerami??ari, elektri??ari, vodoinstalateri i drugi djelatnici, za izgradnju gra??evinskih projekata.'
                        : 'Our company specializes in construction residential buildings. The company employs a team of qualified workers, such as masons, carpenters, ceramicists, electricians, plumbers and other workers, for building construction projects.'}</p>
                    <div className="images-section">
                        <div className="renovation-img"
                            onMouseEnter={() => setRenovationHover(true)}
                            onMouseLeave={() => setRenovationHover(false)}>
                            {renovationHover && <div className="renovation-display"><p>{language ? 'renoviranje i adaptacija' : 'renovation & adaptation'}</p></div>}</div>
                        <div className="construction-img"
                            onMouseEnter={() => setConstructionHover(true)}
                            onMouseLeave={() => setConstructionHover(false)}>
                            {constructionHover && <div className="construction-display"><p>{language ? 'izgradnja objekata' : 'residential construction'}</p></div>}
                        </div>
                        <div className="houses-img"
                            onMouseEnter={() => setHousesHover(true)}
                            onMouseLeave={() => setHousesHover(false)}>
                            {housesHover && <div className="houses-display"><p>{language ? 'izgradnja monta??nih ku??a po sistemu klju?? u ruke' : 'prefabricated houses construction'}</p></div>}
                        </div>
                    </div>
                </div>
                <div className="right-section"></div>
            </div>
            {galleryCover && <div className="covering-div" onClick={() => setGalleryCover(false)}><p>{language ? 'kliknite da vidite slike na??ih projekata' : 'click to see images of our projects'}</p></div>}
            <Gallery />
        </div>
        <div className="about-section">
            <div className="about-description">
                <div className="about-logo">
                    <div className="logo-img"></div>
                </div>
                <div className="about-text">
                    <span className="about-us">{language ? 'O' : 'ABOUT'} <p className="yellow-text">{language ? 'NAMA' : 'US'}</p></span>
                    <span>
                        <p className="description-text">{language ? 'Mi smo tvrtka sa 10 godina radnog iskustva u podru??ju gra??enja i izvo??enja svih gra??evinskih radova. Posljednjih 10 godina uspje??no izvodimo radove na objektima na sjeveru Njema??ke izgradiv??i veliki broj ??kola, bolnica, stambenih objekata... Najvi??a razina kvalitete gradnje po njema??kim i EU standardima. Od sada i u Hrvatskoj ??irom Dalmacije. Bez obzira na opseg projekta, predani smo isporuci visokokvalitetnog rada koji zadovoljava potrebe i o??ekivanja na??ih klijenata.'
                            : 'We are a company with 10 years of work experience in the field of construction and execution of all construction works. For the last 10 years, we have been successfully performing work on facilities in the north of Germany, having built a large number of schools, hospitals, housing facilities... The highest level of construction quality according to German and EU standards. From now on in Croatia and throughout Dalmatia. Regardless of the scope of the project, we are committed to delivering high quality work that meets the needs and expectations of our clients.'}
                        </p>
                        <p className="description-text">{language ? 'U na??oj tvrtki znamo da izgradnja mo??e biti slo??en i izazovan proces. Zato smo posvije??eni tome da ostanemo organizirani i u??inkoviti te da se prilago??avamo promjenjivim uvjetima kako se pojavljuju. Tako??er stavljamo sna??an naglasak na sigurnost, po??tuju??i sve potrebne propise kako bismo osigurali dobrobit na??eg tima i onih oko nas. Op??enito, na?? je cilj pridonijeti rastu i razvoju zajednica u kojima radimo te igrati klju??nu ulogu u gospodarstvu.'
                            : "At our company, we know that construction can be a complex and challenging process. That's why we're committed to staying organized and efficient and adapting to changing conditions as they arise. We also place a strong emphasis on safety, following all necessary regulations to ensure the well-being of our team and those around us. Overall, our goal is to contribute to the growth and development of the communities in which we work and to play a key role in the economy."}</p>
                    </span>
                </div>
            </div>
        </div>
        <div className="about-icons">
            <span> <MdOutlineHighQuality size={100} color='#454545' /> <p>{language ? 'VISOKA KVALITETA' : 'HIGH QUALITY'}</p></span>
            <span> <RiMoneyEuroBoxLine size={90} color='#454545' /> <p>{language ? 'UNUTAR PRORA??UNA' : 'WITHIN THE BUDGET'}</p></span>
            <span> <IoMdTimer size={90} color='#454545' /><p>{language ? 'UVIJEK NA VRIJEME' : 'WITHIN THE TIME LIMIT'}</p></span>
        </div>
        <div className="contact-background"></div>
        <div className="contact-section">
            <span className="contact-text"><p>{language ? 'KONTAKT' : 'CONTACT'}</p></span>
            <span className="contact-icons">
                <span><BsTelephone size={30} color='gold' />
                    +385 95 3466 323</span>
                <span><MdOutlineAlternateEmail size={30} color='gold' />
                    info@dean-ausbau.de</span>
            </span>
            <form className="contact-form-container" onSubmit={sendEmail} ref={form}>
                {messageSent && <div className="message-sent">
                    <p>{language ? 'Va??a poruka je uspe??no poslata.' : 'Message sent successfully.'}</p><GiConfirmed size={30} color='green' /></div>}
                {messageError && <div className="message-error">
                    <p>{language ? 'Desila se gre??ka pri slanju va??e poruke.' : 'There was an error sending your message.'}</p><BiError size={30} color='red' /></div>}
                <span className="contact-form">
                    <span className="info-box">
                        <input type="text" placeholder={language ? "ime" : "name"} name="user_name" required />
                        <input type="email" placeholder="mail" name="user_email" required />
                        <input type="number" placeholder={language ? "broj telefona" : "telephone number"} name="user_number" required />
                    </span>
                    <span className="msg-box">
                        <textarea name="message" id="" placeholder={language ? "va??a poruka" : "your message"} required></textarea>
                    </span>
                </span>
                <button className="send-msg" type="submit">{language ? 'PO??ALJITE PORUKU' : 'SEND MESSAGE'}</button>
            </form>
            <span className="social-icons">
                <a href="https://www.instagram.com/deanausbau/" target="_blank">
                    <TiSocialInstagram size={30} color='gold' />
                </a>
                <FaFacebookSquare size={30} color='gold' />
            </span>
        </div>
    </div >
}



export default Content