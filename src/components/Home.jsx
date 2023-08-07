import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";

export default function Home(props) {
  const { language, setLanguage, sideBarActive, setSideBarActive } = props;

  return (
    <>
      <Header language={language} />
      <Menu language={language} setLanguage={setLanguage} />
      {sideBarActive && (
        <SideBar setSideBarActive={setSideBarActive} language={language} />
      )}
      <Content language={language} />
    </>
  );
}
