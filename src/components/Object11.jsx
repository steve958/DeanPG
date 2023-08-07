import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import mainImg from "../assets/vis-dobra-luka/slika1.jpg";
import sideImg1 from "../assets/vis-dobra-luka/slika2.jpg";
import sideImg2 from "../assets/vis-dobra-luka/slika3.jpg";
import sideImg3 from "../assets/vis-dobra-luka/slika4.jpg";

export default function Object11(props) {
  const {
    setObjectElevenClicked,
    setRealEstateContact,
    setRealEstateActive,
    language,
  } = props;

  const [mainImgUrl, setMainImgUrl] = useState(`url(${mainImg})`);
  const [sideImg1Url, setSideImg1Url] = useState(`url(${sideImg1})`);
  const [sideImg2Url, setSideImg2Url] = useState(`url(${sideImg2})`);
  const [sideImg3Url, setSideImg3Url] = useState(`url(${sideImg3})`);

  function handleContactUs() {
    setRealEstateContact(true);
    setObjectElevenClicked(false);
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
      default:
        return;
    }
  }

  return (
    <div className="object1-container">
      <div className="object1-main">
        <span
          className="back-arrow"
          onClick={() => setObjectElevenClicked(false)}
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
              ? "Prodaje se 26.767m²  poljoprivrednog zemljišta sa urednim papirima. Sastoji se iz više parcela."
              : "26,767m² of agricultural land for sale with proper papers. It consists of several plots."}
          </p>
          <p>
            {language
              ? "Savrsena dugorocna investicija!"
              : "Perfect long-term investment!"}
          </p>
          <p>
            {language
              ? "Javni putevi su ucrtani ali nisu probijeni."
              : "Public roads are marked but not constructed."}
          </p>
        </div>
      </div>
      <div className="object1-bottom">
        <p>93.000€</p>
        <button className="object1-contact" onClick={handleContactUs}>
          {language ? "kontaktirajte nas" : "contact us"}
        </button>
      </div>
    </div>
  );
}
