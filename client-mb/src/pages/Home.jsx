// import { useEffect, useState } from "react";
import Banner from "~/components/Banner";
import MainMenu from "~/components/MainMenu";
import Header from "~/components/Header";
import Navigate from "~/components/Navigate";
import Notify from "~/components/Notify";
import Section from "~/components/Section";

function Home() {
  return (
    <div className="w-full">
      <Header />
      <Banner />
      <Notify />
      <Section />

      <Navigate />
      <MainMenu />
    </div>
  );
}

export default Home;
