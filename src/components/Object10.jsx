import React, { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import mainImg from "../assets/plisko-polje/main.jpg";

export default function Object10(props) {
  const {
    setObjectTenClicked,
    setRealEstateContact,
    setRealEstateActive,
    language,
  } = props;

  const [mainImgUrl, setMainImgUrl] = useState(`url(${mainImg})`);

  function handleContactUs() {
    setRealEstateContact(true);
    setObjectTenClicked(false);
    setRealEstateActive(false);
  }

  useEffect(() => {
    setRealEstateContact(false);
  }, []);


  return (
    <div className="object1-container">
      <div className="object1-main">
        <span
          className="back-arrow"
          onClick={() => setObjectTenClicked(false)}
        >
          <IoMdArrowRoundBack color="gold" size={55} />
        </span>
        <div className="object1-left">
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
              ? "Na prodaju kamena kuća 65m² podne površine, zahtjeva ulaganje. Ima pripadajuću gustirnu, i mali vrt."
              : "Stone house for sale, 65 m² floor area, investment required. It has an adjoining well and a small garden."}
          </p>
          <p>
            {language
              ? "Skrivena od gužve i buke. Sa predivnim pogledom na vinograde i otočke vrtove."
              : "Hidden away from the crowd and noise. With a wonderful view of vineyards and island gardens."}
          </p>
          <p>
            {language
              ? "Plac 3000m²"
              : "3000m² of land"}
          </p>
        </div>
      </div>
      <div className="object1-bottom">
        <p>100.000€</p>
        <button className="object1-contact" onClick={handleContactUs}>
          {language ? "kontaktirajte nas" : "contact us"}
        </button>
      </div>
    </div>
  );
}
