import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import SideBar from "./components/SideBar";
import { useEffect } from "react";
import RealEstate from "./components/RealEstate";

function App() {
  const [sideBarActive, setSideBarActive] = useState(false);
  const [realEstateActive, setRealEstateActive] = useState(false);
  const [realEstateContact, setRealEstateContact] = useState(false);
  const [language, setLanguage] = useState("croatian");

  useEffect(() => {
    if (!realEstateActive) {
      setTimeout(() => setSideBarActive(true), 10000);
    }
  }, []);

  return (
    <div className="App">
      <Header language={language} />
      <Menu
        setRealEstateActive={setRealEstateActive}
        language={language}
        setLanguage={setLanguage}
      />
      {realEstateActive && (
        <RealEstate
          setRealEstateActive={setRealEstateActive}
          setRealEstateContact={setRealEstateContact}
          setSideBarActive={setSideBarActive}
          language={language}
        />
      )}
      {sideBarActive && !realEstateActive && (
        <SideBar
          setRealEstateActive={setRealEstateActive}
          setSideBarActive={setSideBarActive}
          realEstateActive={realEstateActive}
          language={language}
        />
      )}
      <Content realEstateContact={realEstateContact} language={language} />
    </div>
  );
}

export default App;
