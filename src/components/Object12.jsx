import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import mainImg from "../assets/vis-plac/slika1.jpg";
import sideImg1 from "../assets/vis-plac/slika2.jpg";
import sideImg2 from "../assets/vis-plac/slika3.jpg";
import sideImg3 from "../assets/vis-plac/slika4.jpg";
import sideImg4 from "../assets/vis-plac/slika5.jpg";
import sideImg5 from "../assets/vis-plac/slika6.jpg";
import sideImg6 from "../assets/vis-plac/slika7.jpg";

export default function Object12(props) {
  const {
    setObjectTwelveClicked,
    setRealEstateContact,
    setRealEstateActive,
    language,
  } = props;

  const [mainImgUrl, setMainImgUrl] = useState(`url(${mainImg})`);
  const [sideImg1Url, setSideImg1Url] = useState(`url(${sideImg1})`);
  const [sideImg2Url, setSideImg2Url] = useState(`url(${sideImg2})`);
  const [sideImg3Url, setSideImg3Url] = useState(`url(${sideImg3})`);
  const [sideImg4Url, setSideImg4Url] = useState(`url(${sideImg4})`);
  const [sideImg5Url, setSideImg5Url] = useState(`url(${sideImg5})`);
  const [sideImg6Url, setSideImg6Url] = useState(`url(${sideImg6})`);

  function handleContactUs() {
    setRealEstateContact(true);
    setObjectTwelveClicked(false);
    setRealEstateActive(false);
  }

  useEffect(() => {
    setRealEstateContact(false);
  }, []);

  function handleMainImgChange(string) {
    switch (string) {
      case "side1":
        setSideImg1Url(mainImgUrl);
        setMainImgUrl(sideImg1Url);
        break;
      case "side2":
        setSideImg2Url(mainImgUrl);
        setMainImgUrl(sideImg2Url);
        break;
      case "side3":
        setSideImg3Url(mainImgUrl);
        setMainImgUrl(sideImg3Url);
        break;
      case "side4":
        setSideImg4Url(mainImgUrl);
        setMainImgUrl(sideImg4Url);
        break;
      case "side5":
        setSideImg5Url(mainImgUrl);
        setMainImgUrl(sideImg5Url);
        break;
      case "side6":
        setSideImg6Url(mainImgUrl);
        setMainImgUrl(sideImg6Url);
        break;
      default:
        return;
    }
  }

  return (
    <div className="object1-container">
      <div className="object1-main">
        <span
          className="back-arrow"
          onClick={() => setObjectTwelveClicked(false)}
        >
          <IoMdArrowRoundBack color="gold" size={55} />
        </span>
        <div className="object1-left">
          <div className="object1-slider">
            <span>
              <div
                className="side-image"
                style={{
                  backgroundImage: sideImg1Url,
                }}
                onClick={() => handleMainImgChange("side1")}
              ></div>
              <div
                className="side-image"
                style={{
                  backgroundImage: sideImg2Url,
                }}
                onClick={() => handleMainImgChange("side2")}
              ></div>
              <div
                className="side-image"
                style={{
                  backgroundImage: sideImg3Url,
                }}
                onClick={() => handleMainImgChange("side3")}
              ></div>
            </span>
            <span>
              <div
                className="side-image"
                style={{
                  backgroundImage: sideImg4Url,
                }}
                onClick={() => handleMainImgChange("side4")}
              ></div>
              <div
                className="side-image"
                style={{
                  backgroundImage: sideImg5Url,
                }}
                onClick={() => handleMainImgChange("side5")}
              ></div>
              <div
                className="side-image"
                style={{
                  backgroundImage: sideImg6Url,
                }}
                onClick={() => handleMainImgChange("side6")}
              ></div>
            </span>
          </div>
          <div
            className="object1-main-img"
            style={{
              backgroundImage: mainImgUrl,
            }}
          ></div>
        </div>
        <div className="object1-right">
          <p>
            {language
              ? "Na prodaju poljoprivredni plac sa ucrtanom kućom od 100m², prije 1968."
              : "Agricultural plot for sale with a house of 100m², before 1968."}
          </p>
          <p>
            {language
              ? "Nalazi se poviše i izmedju Konobe Dol i Đanijevog skladista na Visu, na sami plac vode 2 puta , POGLED NA CIJELU DOLINU!"
              : "It is located higher up and between Konoba Dol and Đani's warehouse on Vis, two roads lead to the plot, VIEW OF THE ENTIRE VALLEY!"}
          </p>
          <p>
            {language
              ? "Sastoji se iz tri parcele koje su uredne sa papirima 1/1. Cijena nije strogo fiksna."
              : "It consists of three parcels that are neat with papers 1/1. The price is not strictly fixed."}
          </p>
        </div>
      </div>
      <div className="object1-bottom">
        <p>64.000€</p>
        <button className="object1-contact" onClick={handleContactUs}>
          {language ? "kontaktirajte nas" : "contact us"}
        </button>
      </div>
    </div>
  );
}
