import React, { useEffect, useState } from "react";
import "./RealEstate.css";
import { RiCloseCircleFill } from "react-icons/ri";
import { BsHouseDoor } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import {MdOutlinePlace} from 'react-icons/md'
import Object1 from "./Object1";
import Object2 from "./Object2";
import Object3 from "./Object3";
import Object4 from "./Object4";
import Object5 from "./Object5";
import Object6 from "./Object6";
import Object7 from "./Object7";
import Object8 from "./Object8";
import Object9 from "./Object9";
import Object10 from "./Object10";
import Object11 from "./Object11";
import Object12 from "./Object12";
import Object13 from "./Object13";
import Object14 from "./Object14";

export default function RealEstate(props) {
  const {
    language,
    setRealEstateActive,
    setRealEstateContact,
    setSideBarActive,
  } = props;

  const [objectOneClicked, setObjectOneClicked] = useState(false);
  const [objectTwoClicked, setObjectTwoClicked] = useState(false);
  const [objectThreeClicked, setObjectThreeClicked] = useState(false);
  const [objectFourClicked, setObjectFourClicked] = useState(false);
  const [objectFiveClicked, setObjectFiveClicked] = useState(false);
  const [objectSixClicked, setObjectSixClicked] = useState(false);
  const [objectSevenClicked, setObjectSevenClicked] = useState(false);
  const [objectEightClicked, setObjectEightClicked] = useState(false);
  const [objectNineClicked, setObjectNineClicked] = useState(false)
  const [objectTenClicked, setObjectTenClicked] = useState(false)
  const [objectElevenClicked, setObjectElevenClicked] = useState(false)
  const [objectTwelveClicked, setObjectTwelveClicked] = useState(false)
  const [objectThirteenClicked, setObjectThirteenClicked] = useState(false)
  const [objectFourteenClicked, setObjectFourteenClicked] = useState(false)

  useEffect(() => {
    setSideBarActive(false);
    return setSideBarActive(false);
  }, []);

  return (
    <div className="realestate-modal">
      <span className="modal-heading">
        <p className="heading1">
          {language ? "Prodaja nekretnina" : "Real estate for sale"}
        </p>
      </span>
      {!objectOneClicked &&
        !objectTwoClicked &&
        !objectThreeClicked &&
        !objectFourClicked &&
        !objectFiveClicked &&
        !objectSixClicked &&
        !objectSevenClicked &&
        !objectEightClicked &&
        !objectNineClicked &&
        !objectTenClicked &&
        !objectElevenClicked &&
        !objectTwelveClicked &&
        !objectThirteenClicked &&
        !objectFourteenClicked && (
          <span className="modal-content">
            <div className="estate-wrapper">
              <span
                className="estate-section"
                onClick={() => {
                  setObjectOneClicked(true);
                  setObjectTwoClicked(false);
                  setObjectThreeClicked(false);
                  setObjectFourClicked(false);
                  setObjectFiveClicked(false);
                  setObjectSixClicked(false);
                  setObjectSevenClicked(false);
                  setObjectEightClicked(false);
                  setObjectNineClicked(false);
                  setObjectTenClicked(false)
                  setObjectElevenClicked(false)
                  setObjectTwelveClicked(false)
                  setObjectThirteenClicked(false)
                  setObjectFourteenClicked(false)
                }}
              >
                <span className="house-icon">
                  <BsHouseDoor color="gold" size={45} />
                </span>
                <div className="object1"></div>
                <p>
                  {language
                    ? "Novogradnja - Vis-Rukavac, Srebrna plaža"
                    : "New House - Vis-Rukavac, Srebrna plaža"}
                </p>
                <p className="price">360.000€</p>
              </span>
              <span
                className="estate-section"
                onClick={() => {
                  setObjectOneClicked(false);
                  // setObjectTwoClicked(true)
                  setObjectThreeClicked(false);
                  setObjectFourClicked(false);
                  setObjectFiveClicked(false);
                  setObjectSixClicked(false);
                  setObjectSevenClicked(false);
                  setObjectEightClicked(false);
                  setObjectNineClicked(false)
                  setObjectTenClicked(false)
                  setObjectElevenClicked(false)
                  setObjectTwelveClicked(false)
                  setObjectThirteenClicked(false)
                  setObjectFourteenClicked(false)
                }}
              >
                <span className="building-icon">
                  <HiOutlineBuildingOffice2 color="gold" size="45" />
                </span>
                <div className="object2"></div>
                <span className="sold-cover">
                    <p>{language ? "PRODANO" : "SOLD"}</p>
                  </span>
                <p>{language ? "37m² - Otok Vis" : "37m² - Island of Vis"}</p>
                <p className="price">140.000€</p>
              </span>
              <span
                className="estate-section"
                onClick={() => {
                  setObjectOneClicked(false);
                  setObjectTwoClicked(false);
                  setObjectThreeClicked(true);
                  setObjectFourClicked(false);
                  setObjectFiveClicked(false);
                  setObjectSixClicked(false);
                  setObjectSevenClicked(false);
                  setObjectEightClicked(false);
                  setObjectNineClicked(false)
                  setObjectTenClicked(false)
                  setObjectElevenClicked(false)
                  setObjectTwelveClicked(false)
                  setObjectThirteenClicked(false)
                  setObjectFourteenClicked(false)
                }}
              >
                <span className="house-icon">
                  <BsHouseDoor color="gold" size={45} />
                </span>
                <div className="object3"></div>
                <p>
                  {language
                    ? "Kuća Kut-Valica Neuseljavana"
                    : "Kut-Rukavac No previous owners"}
                </p>
                <p className="price">380.000€</p>
              </span>
              <span
                className="estate-section"
                onClick={() => {
                  setObjectOneClicked(false);
                  setObjectTwoClicked(false);
                  setObjectThreeClicked(false);
                  setObjectFourClicked(true);
                  setObjectFiveClicked(false);
                  setObjectSixClicked(false);
                  setObjectSevenClicked(false);
                  setObjectEightClicked(false);
                  setObjectNineClicked(false)
                  setObjectTenClicked(false)
                  setObjectElevenClicked(false)
                  setObjectTwelveClicked(false)
                  setObjectThirteenClicked(false)
                  setObjectFourteenClicked(false)
                }}
              >
                <span className="building-icon">
                  <HiOutlineBuildingOffice2 color="gold" size="45" />
                </span>
                <div className="object4"></div>
                <p>
                  {language
                    ? "Stan-Hvar 37m² +7,5m² teraca"
                    : "Apartment-Hvar 37m² + 7,5m² terrace"}
                </p>
                <p className="price">113.000€</p>
              </span>
              <span
                className="estate-section"
                onClick={() => {
                  setObjectOneClicked(false);
                  setObjectTwoClicked(false);
                  setObjectThreeClicked(false);
                  setObjectFourClicked(false);
                  // setObjectFiveClicked(true)
                  setObjectSixClicked(false);
                  setObjectSevenClicked(false);
                  setObjectEightClicked(false);
                  setObjectNineClicked(false)
                  setObjectTenClicked(false)
                  setObjectElevenClicked(false)
                  setObjectTwelveClicked(false)
                  setObjectThirteenClicked(false)
                  setObjectFourteenClicked(false)
                }}
              >
                <span className="building-icon">
                  <HiOutlineBuildingOffice2 color="gold" size="45" />
                </span>
                <div className="object5">
                  <span className="sold-cover">
                    <p>{language ? "PRODANO" : "SOLD"}</p>
                  </span>
                </div>
                <p>
                  {language
                    ? "Stan-Hvar 24m² + 7,5m² teraca"
                    : "Apartment-Hvar 24m² + 7,5m² terrace"}
                </p>
                <p className="price">77.000€</p>
              </span>
              <span
                className="estate-section"
                onClick={() => {
                  setObjectOneClicked(false);
                  setObjectTwoClicked(false);
                  setObjectThreeClicked(false);
                  setObjectFourClicked(false);
                  // setObjectFiveClicked(true)
                  setObjectSixClicked(true);
                  setObjectSevenClicked(false);
                  setObjectEightClicked(false);
                  setObjectNineClicked(false)
                  setObjectTenClicked(false)
                  setObjectElevenClicked(false)
                  setObjectTwelveClicked(false)
                  setObjectThirteenClicked(false)
                  setObjectFourteenClicked(false)
                }}
              >
                <span className="building-icon">
                  <HiOutlineBuildingOffice2 color="gold" size="45" />
                </span>
                <div className="object6"></div>
                <p>
                  {language ? "Split-Riva-Varoš 50m²" : "Split-Riva-Varoš 50m²"}
                </p>
                <p className="price">310.000€</p>
              </span>
              <span
                className="estate-section"
                onClick={() => {
                  setObjectOneClicked(false);
                  setObjectTwoClicked(false);
                  setObjectThreeClicked(false);
                  setObjectFourClicked(false);
                  // setObjectFiveClicked(true)
                  setObjectSixClicked(false);
                  // setObjectSevenClicked(true);
                  setObjectEightClicked(false);
                  setObjectNineClicked(false)
                  setObjectTenClicked(false)
                  setObjectElevenClicked(false)
                  setObjectTwelveClicked(false)
                  setObjectThirteenClicked(false)
                  setObjectFourteenClicked(false)
                }}
              >
                <span className="building-icon">
                  <BsHouseDoor color="gold" size="45" />
                </span>
                <div className="object7">
                  <span className="sold-cover">
                    <p>{language ? "PRODANO" : "SOLD"}</p>
                  </span>
                </div>
                <p>
                  {language
                    ? "Vis-Srebrna plaža kuća sa 7 apartmana"
                    : "Vis-Srebrna plaža house with 7 apartments"}
                </p>
                <p className="price">399.000€</p>
              </span>
              <span
                className="estate-section"
                onClick={() => {
                  setObjectOneClicked(false);
                  setObjectTwoClicked(false);
                  setObjectThreeClicked(false);
                  setObjectFourClicked(false);
                  // setObjectFiveClicked(true)
                  setObjectSixClicked(false);
                  setObjectSevenClicked(false);
                  setObjectEightClicked(true);
                  setObjectNineClicked(false)
                  setObjectTenClicked(false)
                  setObjectElevenClicked(false)
                  setObjectTwelveClicked(false)
                  setObjectThirteenClicked(false)
                  setObjectFourteenClicked(false)
                }}
              >
                {/* <p style={{ position: 'absolute', fontSize: '28px', top: '10px', backgroundColor: 'gold', padding: '5px', borderRadius: '5px', color: '#454545' }}>{language ? 'uskoro' : 'soon'}</p> */}
                <span className="building-icon">
                  <BsHouseDoor color="gold" size={45} />
                </span>
                <div className="object8"></div>
                <p>
                  {language
                    ? "Komiža, najstarija kuća na Otoku Visu 105m²"
                    : "Komiža, the oldest house on the island of Vis 105m²"}
                </p>
                <p className="price">440.000€</p>
              </span>
              <span
                className="estate-section"
                onClick={() => {
                  setObjectOneClicked(false);
                  setObjectTwoClicked(false);
                  setObjectThreeClicked(false);
                  setObjectFourClicked(false);
                  // setObjectFiveClicked(true)
                  setObjectSixClicked(false);
                  setObjectSevenClicked(false);
                  setObjectEightClicked(false);
                  setObjectNineClicked(true)
                  setObjectTenClicked(false)
                  setObjectElevenClicked(false)
                  setObjectTwelveClicked(false)
                  setObjectThirteenClicked(false)
                  setObjectFourteenClicked(false)
                }}
              >
                <span className="building-icon">
                  <BsHouseDoor color="gold" size="45" />
                </span>
                <div className="object9"></div>
                <p>
                  {language ? "Osijek-Tenja" : "Osijek-Tenja"}
                </p>
                <p className="price">63.000€</p>
              </span>
              <span
                className="estate-section"
                onClick={() => {
                  setObjectOneClicked(false);
                  setObjectTwoClicked(false);
                  setObjectThreeClicked(false);
                  setObjectFourClicked(false);
                  // setObjectFiveClicked(true)
                  setObjectSixClicked(false);
                  setObjectSevenClicked(false);
                  setObjectEightClicked(false);
                  setObjectNineClicked(false)
                  setObjectTenClicked(true)
                  setObjectElevenClicked(false)
                  setObjectTwelveClicked(false)
                  setObjectThirteenClicked(false)
                  setObjectFourteenClicked(false)
                }}
              >
                <span className="building-icon">
                  <BsHouseDoor color="gold" size="45" />
                </span>
                <div className="object10"></div>
                <p>
                  {language ? "Otok Vis - Plisko Polje" : "Island of Vis - Plisko Polje"}
                </p>
                <p className="price">100.000€</p>
              </span>
              <span
                className="estate-section"
                onClick={() => {
                  setObjectOneClicked(false);
                  setObjectTwoClicked(false);
                  setObjectThreeClicked(false);
                  setObjectFourClicked(false);
                  // setObjectFiveClicked(true)
                  setObjectSixClicked(false);
                  setObjectSevenClicked(false);
                  setObjectEightClicked(false);
                  setObjectNineClicked(false)
                  setObjectTenClicked(false)
                  setObjectElevenClicked(true)
                  setObjectTwelveClicked(false)
                  setObjectThirteenClicked(false)
                  setObjectFourteenClicked(false)
                }}
              >
                <span className="building-icon">
                  <MdOutlinePlace color="gold" size="45" />
                </span>
                <div className="object11"></div>
                <p>
                  {language ? "Plac - Otok Vis - Dobra Luka" : "Peace of land - Island of Vis - Dobra Luka"}
                </p>
                <p className="price">93.000€</p>
              </span>
              <span
                className="estate-section"
                onClick={() => {
                  setObjectOneClicked(false);
                  setObjectTwoClicked(false);
                  setObjectThreeClicked(false);
                  setObjectFourClicked(false);
                  // setObjectFiveClicked(true)
                  setObjectSixClicked(false);
                  setObjectSevenClicked(false);
                  setObjectEightClicked(false);
                  setObjectNineClicked(false)
                  setObjectTenClicked(false)
                  setObjectElevenClicked(false)
                  setObjectTwelveClicked(true)
                  setObjectThirteenClicked(false)
                  setObjectFourteenClicked(false)
                }}
              >
                <span className="building-icon">
                  <MdOutlinePlace color="gold" size="45" />
                </span>
                <div className="object12"></div>
                <p>
                  {language ? "Plac - Otok Vis" : "Peace of land - Island of Vis"}
                </p>
                <p className="price">64.000€</p>
              </span>
              <span
                className="estate-section"
                onClick={() => {
                  setObjectOneClicked(false);
                  setObjectTwoClicked(false);
                  setObjectThreeClicked(false);
                  setObjectFourClicked(false);
                  // setObjectFiveClicked(true)
                  setObjectSixClicked(false);
                  setObjectSevenClicked(false);
                  setObjectEightClicked(false);
                  setObjectNineClicked(false)
                  setObjectTenClicked(false)
                  setObjectElevenClicked(false)
                  setObjectTwelveClicked(false)
                  setObjectThirteenClicked(true)
                  setObjectFourteenClicked(false)
                }}
              >
                <span className="building-icon">
                  <HiOutlineBuildingOffice2 color="gold" size="45" />
                </span>
                <div className="object13"></div>
                <p>
                  {language ? "Vis-Srebrna plaža" : "Island of Vis-Srebrna plaža"}
                </p>
                <p className="price">450.000€</p>
              </span>
              <span
                className="estate-section"
                onClick={() => {
                  setObjectOneClicked(false);
                  setObjectTwoClicked(false);
                  setObjectThreeClicked(false);
                  setObjectFourClicked(false);
                  // setObjectFiveClicked(true)
                  setObjectSixClicked(false);
                  setObjectSevenClicked(false);
                  setObjectEightClicked(false);
                  setObjectNineClicked(false)
                  setObjectTenClicked(false)
                  setObjectElevenClicked(false)
                  setObjectTwelveClicked(false)
                  setObjectThirteenClicked(false)
                  setObjectFourteenClicked(true)
                }}
              >
                <span className="building-icon">
                  <HiOutlineBuildingOffice2 color="gold" size="45" />
                </span>
                <div className="object14"></div>
                <p>
                  {language ? "Vis-Apartman odmah iza Konobe Dudo" : "Island of Vis-Apartment right behind Konoba Dudo"}
                </p>
                <p className="price">130.000€</p>
              </span>
            </div>
          </span>
        )}
      {objectOneClicked && (
        <Object1
          setObjectOneClicked={setObjectOneClicked}
          setRealEstateActive={setRealEstateActive}
          setRealEstateContact={setRealEstateContact}
          language={language}
        />
      )}
      {objectTwoClicked && (
        <Object2
          setObjectTwoClicked={setObjectTwoClicked}
          setRealEstateActive={setRealEstateActive}
          setRealEstateContact={setRealEstateContact}
          language={language}
        />
      )}
      {objectThreeClicked && (
        <Object3
          setObjectThreeClicked={setObjectThreeClicked}
          setRealEstateActive={setRealEstateActive}
          setRealEstateContact={setRealEstateContact}
          language={language}
        />
      )}
      {objectFourClicked && (
        <Object4
          setObjectFourClicked={setObjectFourClicked}
          setRealEstateActive={setRealEstateActive}
          setRealEstateContact={setRealEstateContact}
          language={language}
        />
      )}
      {objectFiveClicked && (
        <Object5
          setObjectFiveClicked={setObjectFiveClicked}
          setRealEstateActive={setRealEstateActive}
          setRealEstateContact={setRealEstateContact}
          language={language}
        />
      )}
      {objectSixClicked && (
        <Object6
          setObjectSixClicked={setObjectSixClicked}
          setRealEstateActive={setRealEstateActive}
          setRealEstateContact={setRealEstateContact}
          language={language}
        />
      )}
      {objectSevenClicked && (
        <Object7
          setObjectSevenClicked={setObjectSevenClicked}
          setRealEstateActive={setRealEstateActive}
          setRealEstateContact={setRealEstateContact}
          language={language}
        />
      )}
      {objectEightClicked && (
        <Object8
          setObjectEightClicked={setObjectEightClicked}
          setRealEstateActive={setRealEstateActive}
          setRealEstateContact={setRealEstateContact}
          language={language}
        />
      )}
      {objectNineClicked && (
        <Object9
          setObjectNineClicked={setObjectNineClicked}
          setRealEstateActive={setRealEstateActive}
          setRealEstateContact={setRealEstateContact}
          language={language}
        />
      )}
      {objectTenClicked && (
        <Object10
          setObjectTenClicked={setObjectTenClicked}
          setRealEstateActive={setRealEstateActive}
          setRealEstateContact={setRealEstateContact}
          language={language}
        />
      )}
      {objectElevenClicked && (
        <Object11
          setObjectElevenClicked={setObjectElevenClicked}
          setRealEstateActive={setRealEstateActive}
          setRealEstateContact={setRealEstateContact}
          language={language}
        />
      )}
      {objectTwelveClicked && (
         <Object12
          setObjectTwelveClicked={setObjectTwelveClicked}
          setRealEstateActive={setRealEstateActive}
          setRealEstateContact={setRealEstateContact}
          language={language}
        />
      )}
      {objectThirteenClicked && (
         <Object13
          setObjectThirteenClicked={setObjectThirteenClicked}
          setRealEstateActive={setRealEstateActive}
          setRealEstateContact={setRealEstateContact}
          language={language}
        />
      )}
      {objectFourteenClicked && (
         <Object14
          setObjectFourteenClicked={setObjectFourteenClicked}
          setRealEstateActive={setRealEstateActive}
          setRealEstateContact={setRealEstateContact}
          language={language}
        />
      )}
      <span className="close-modal" onClick={() => setRealEstateActive(false)}>
        <RiCloseCircleFill size={45} color="gold" />
      </span>
    </div>
  );
}
