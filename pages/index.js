import React from 'react';
import {Box} from "@material-ui/core";
import HeroSection from "../src/components/landingPage/HeroSection";
import AboutUsSection from "../src/components/landingPage/AboutUsSection";
import DevelopmentServices from "../src/components/landingPage/DevelopmentServices";

export default function Index() {
  return (
      <Box>
        <HeroSection/>
          <AboutUsSection/>
          <DevelopmentServices/>
      </Box>
  );
}
