import React from 'react';
import Landing from '../components/Landing';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Intro from '../components/Intro';
import WhyChooseUs from '../components/WhyChooseUs';
import Subsidiaries from '../components/Subsidiaries';
import YourVision from '../components/YourVision';
import Partnership from '../components/Partnership';
import OurTeam from '../components/OurTeam';
import Footer from '../components/Footer';
import BottomFooter from '../components/BottomFooter';

const HomePage = () => {
  return (
    <>
      <Landing />
      <AboutUs />
      <Services />
      <Intro />
      <WhyChooseUs />
      <Subsidiaries />
      <YourVision />
      <Partnership />
      <OurTeam />
      <Footer />
      <BottomFooter />
    </>
  );
};

export default HomePage;
