import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import mainImg from "../assets/apartmani/main.jpg";
import sideImg1 from "../assets/apartmani/slika1.jpg";
import sideImg2 from "../assets/apartmani/slika2.jpg";
import sideImg3 from "../assets/apartmani/slika3.jpg";

export default function Object13(props) {
  const {
    setObjectThirteenClicked,
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
    setObjectThirteenClicked(false);
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
          onClick={() => setObjectThirteenClicked(false)}
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
              ? "Zgrada sa sedam apartmana, svaki apartman se prodaje zasebno. Navedene cijene su za sirovo stanje, za kompletno unutarnje uređenje se plaća dodatno. "
              : "Building with seven apartments, each apartment is sold separately. The listed prices are for the raw state, the complete interior arrangement is paid extra."}
          </p>
          <p>
            {language
              ? "Predivan otvoren pogled na more, atraktivna lokacija kao i sam kvalitet objekta."
              : "A wonderful open view of the sea, an attractive location as well as the quality of the building itself."}
          </p>
          <p>
            {language
              ? "Cijene apartmana zasebno,možete vidjeti na slikama."
              : "You can see the prices of apartments on the pictures."}
          </p>
        </div>
      </div>
      <div className="object1-bottom">
        <p>450.000€</p>
        <button className="object1-contact" onClick={handleContactUs}>
          {language ? "kontaktirajte nas" : "contact us"}
        </button>
      </div>
    </div>
  );
}
