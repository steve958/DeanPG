import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import mainImg from "../assets/komiza/main.jpg";
import sideImg1 from "../assets/komiza/slika1.jpg";
import sideImg2 from "../assets/komiza/slika2.jpg";
import sideImg3 from "../assets/komiza/slika3.jpg";
import sideImg4 from "../assets/komiza/slika4.jpg";
import sideImg5 from "../assets/komiza/slika5.jpg";
import sideImg6 from "../assets/komiza/slika6.jpg";

export default function Object8(props) {
  const {
    setObjectEightClicked,
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
  const [project, setProject] = useState(false);

  function handleContactUs() {
    setRealEstateContact(true);
    setObjectOneClicked(false);
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
        <span className="back-arrow" onClick={() => setObjectEightClicked(false)}>
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
              ? "KOMIŽA - Najstarija kuća na Otoku Visu, stara 800 godina."
              : "KOMIŽA - The oldest house on the island of Vis, 800 years old."}
          </p>
          <p>
            {language
              ? "Kuća koja nam govori o samoj povijesti grada Komiže. U 9. mjesecu počinje kompletna restauracija koja bi ttebala biti gotova u 3. mjesecu 2024."
              : "A house that tells us about the very history of the city of Komiža. In the 9th month, the complete restoration will begin, which should be finished in the 3rd month of 2024."}
          </p>
          <p>
            {language
              ? "Kuća će biti uradjena u starom dalmatinskom stilu ali i svakako sa par modernih detalja."
              : "The house will be done in the old Dalmatian style, but certainly with a few modern details."}
          </p>
          <p>
            {language
              ? "Kao budući kupac imate mogućnost izmjene projekta,detalja kao i stila renovacije."
              : "As a future buyer, you have the option of changing the project, details and style of the renovation."}
          </p>
        </div>
      </div>
      <div className="object1-bottom">
        <p>440.000€</p>
        <button className="object1-contact" onClick={handleContactUs}>
          {language ? "kontaktirajte nas" : "contact us"}
        </button>
      </div>
    </div>
  );
}
