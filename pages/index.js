import React from 'react';
import {Box} from "@material-ui/core";
import HeroSection from "../src/components/landingPage/HeroSection";
import AboutUsSection from "../src/components/landingPage/AboutUsSection";
import DevelopmentServices from "../src/components/landingPage/DevelopmentServices";
import PortfolioSection from "../src/components/landingPage/PortfolioSection";
import Testimonials from "../src/components/landingPage/Testimonials";
import AwwardsSection from "../src/components/landingPage/AwwardsSection";
import ContactusSection from "../src/components/landingPage/ContactusSection";

export default function Index() {
  return (
      <Box>
        <HeroSection/>
          <AboutUsSection/>
          <DevelopmentServices/>
          <PortfolioSection/>
          <Testimonials/>
          <AwwardsSection/>
          <ContactusSection/>
      </Box>
  );
}
