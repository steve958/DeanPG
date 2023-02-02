import React, { useRef, useEffect, useState } from "react";
import './Content.css'
import Carousel from 'better-react-carousel'
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


const Content = () => {
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
            <p className="quote">“The bitterness of poor quality remains long after the sweetness of low price is forgotten.”</p>
            <p className="author">- Benjamin Franklin</p>
        </div>
        <div className="main-footer"><p>Tražite pouzdanog partnera za izgradnju ili renoviranje?</p>
            <button className="contact-btn" onClick={handleContactClick}>kontaktirajte nas</button>
        </div>
        <div className="projects-section">
            <div className="projects-summary">
                <div className="left-section">
                </div>
                <div className="middle-section">
                    <span>
                        <p>Naše</p><p className="yellow-text">usluge</p>
                    </span>
                    <p className="description">Naša tvrtka je specijalizirana za izgradnju zgrada,
                        infrastrukture i drugih objekata. Tvrtka zapošljava tim kvalificiranih
                        radnika, kao što su stolari, električari, vodoinstalateri i drugi radnici,
                        za dovršavanje građevinskih projekata.</p>
                    <div className="images-section">
                        <div className="renovation-img"
                            onMouseEnter={() => setRenovationHover(true)}
                            onMouseLeave={() => setRenovationHover(false)}>
                            {renovationHover && <div className="renovation-display"><p>renoviranje i adaptacija</p></div>}</div>
                        <div className="construction-img"
                            onMouseEnter={() => setConstructionHover(true)}
                            onMouseLeave={() => setConstructionHover(false)}>
                            {constructionHover && <div className="construction-display"><p>izgradnja objekata</p></div>}
                        </div>
                        <div className="houses-img"
                            onMouseEnter={() => setHousesHover(true)}
                            onMouseLeave={() => setHousesHover(false)}>
                            {housesHover && <div className="houses-display"><p>izgradnja montažnih kuća po sistemu ključ u ruke</p></div>}
                        </div>
                    </div>
                </div>
                <div className="right-section"></div>
            </div>
            {galleryCover && <div className="covering-div" onClick={() => setGalleryCover(false)}><p>kliknite da vidite slike naših projekata</p></div>}
            <div className="carousel-container">
                <Carousel cols={4} rows={1} gap={10} showDots={true} loop responsiveLayout={[
                    {
                        breakpoint: 1000,
                        cols: 4,
                        rows: 2,
                        gap: 10,
                    }, {
                        breakpoint: 750,
                        cols: 3,
                        rows: 2,
                        gap: 20,
                    }, {
                        breakpoint: 550,
                        cols: 2,
                        rows: 2,
                        gap: 10,
                    }
                ]} mobileBreakpoint={350}>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/400/300?random=1" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/400/300?random=2" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/400/300?random=3" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/400/300?random=3" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/400/300?random=3" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/400/300?random=3" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/400/300?random=3" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width="100%" src="https://picsum.photos/400/300?random=3" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
        <div className="about-section">
            <div className="about-description">
                <div className="about-logo">
                    <div className="logo-img"></div>
                </div>
                <div className="about-text">
                    <span className="about-us">O <p className="yellow-text">NAMA</p></span>
                    <span>
                        <p className="description-text">Mi smo tvrtka sa 10 godina radnog iskustva u području građenja i izvođenja
                            svih građevinskih radova. Posljednjih 10 godina uspješno izvodimo radove na
                            objektima na sjeveru Njemačke izgradivši veliki broj škola, bolnica, stambenih
                            objekata... Najviša razina kvalitete gradnje po njemačkim i EU standardima.
                            Od sada i u Hrvatskoj širom Dalmacije. Bez obzira na opseg projekta, predani smo isporuci visokokvalitetnog rada koji
                            zadovoljava potrebe i očekivanja naših klijenata.
                        </p>
                        <p className="description-text">U našoj tvrtki razumijemo da izgradnja može biti složen i izazovan proces. Zato smo posvećeni tome da ostanemo
                            organizirani i učinkoviti te da se prilagođavamo promjenjivim uvjetima kako se pojavljuju. Također stavljamo snažan
                            naglasak na sigurnost, poštujući sve potrebne propise kako bismo osigurali dobrobit našeg tima i onih oko nas.
                            Općenito, naš je cilj pridonijeti rastu i razvoju zajednica u kojima radimo te igrati ključnu ulogu u gospodarstvu.</p>
                    </span>
                </div>
            </div>
        </div>
        <div className="about-icons">
            <span> <MdOutlineHighQuality size={100} color='#454545' /> <p>VISOK KVALITET</p></span>
            <span> <RiMoneyEuroBoxLine size={90} color='#454545' /> <p>UNUTAR PRORAČUNA</p></span>
            <span> <IoMdTimer size={90} color='#454545' /><p>UVEK NA VRIJEME</p></span>
        </div>
        <div className="contact-background"></div>
        <div className="contact-section">
            <span className="contact-text"><p>KONTAKT</p></span>
            <span className="contact-icons">
                <span><BsTelephone size={30} color='gold' />
                    +395 3466323</span>
                <span><MdOutlineAlternateEmail size={30} color='gold' />
                    info@dean-ausbau.de</span>
            </span>
            <form className="contact-form-container" onSubmit={sendEmail} ref={form}>
                {messageSent && <div className="message-sent">
                    <p>Vaša poruka je uspešno poslata.</p><GiConfirmed size={30} color='green' /></div>}
                {messageError && <div className="message-error">
                    <p>Desila se greška pri slanju vaše poruke.</p><BiError size={30} color='red' /></div>}
                <span className="contact-form">
                    <span className="info-box">
                        <input type="text" placeholder="ime" name="user_name" required />
                        <input type="email" placeholder="mail" name="user_email" required />
                        <input type="number" placeholder="broj telefona" name="user_number" required />
                    </span>
                    <span className="msg-box">
                        <textarea name="message" id="" placeholder="vaša poruka" required></textarea>
                    </span>
                </span>
                <button className="send-msg" type="submit">POŠALJITE PORUKU</button>
            </form>
            <span className="social-icons">
                <FaFacebookSquare size={30} color='gold' />
                <TiSocialInstagram size={30} color='gold' />
            </span>
        </div>
    </div >
}

export default Content