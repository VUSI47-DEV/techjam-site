import React from "react";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Video from "../../components/Video";
import Games from "../../components/Games";
import NextMatch from "../../components/NextMatch";
import Promo from "../../components/Promo";
import Team from "../../components/Team";
import PreOrder from "../../components/PreOrder";
import LatestNews from "../../components/LatestNews";
import Footer from "../../components/Footer";
import TechHero from "../../components/TechHero/TechHero";
import BannerModal from "../../components/BannerModal/BannerModal";
import EventsComponent from "../../components/EventsComponent/EventsComponent";
import EventImagesSlider from "../../components/EventImagesSlider/EventImagesSlider";
import HomeVideo from "../../components/HomeVideo/HomeVideo";
import UpCommingEvents from "../../components/UpCommingEvents/UpCommingEvents";
import Sponers from "../../components/Sponsers/Sponers";
import AboutHomeSection from "../../components/AboutHomeSection/AboutHomeSection";
import Testimonials from "../../components/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <>
      <Header />
      <TechHero/>
      <HomeVideo/>
      <UpCommingEvents/>
      <Sponers/>
      <Testimonials/>

      {/* <EventImagesSlider/> */}
      {/* <Hero /> */}
      {/* <Video /> */}
      {/* <Games /> */}
      {/* <NextMatch /> */}
      {/* <Promo /> */}
      {/* <Team /> */}
      {/* <PreOrder /> */}
      {/* <LatestNews /> */}
      <Footer />
    </>
  );
};
export default HomePage;
