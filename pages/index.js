import React from 'react';
import {Box} from "@material-ui/core";
import HeroSection from "../src/components/landingPage/HeroSection";
import AboutUsSection from "../src/components/landingPage/AboutUsSection";
import DevelopmentServices from "../src/components/landingPage/DevelopmentServices";
import PortfolioSection from "../src/components/landingPage/PortfolioSection";
import Testimonials from "../src/components/landingPage/Testimonials";
import AwwardsSection from "../src/components/landingPage/AwwardsSection";
import ContactusSection from "../src/components/landingPage/ContactusSection";
import {client} from "../prismic-configuration";
import Prismic from "prismic-javascript";

const Index = ({works}) => {
    return (
        <Box>
            <HeroSection/>
            <AboutUsSection/>
            <DevelopmentServices
                bottomTech
                heading={'Full cycle of development services'}
                services={
                    [
                        {
                            heading: 'iOS Development',
                            link: '',
                        },
                        {
                            heading: 'Android Development',
                            link: '',
                        },
                        {
                            heading: 'Web App Development',
                            link: '',
                        },
                        {
                            heading: 'UI/UX Design',
                            link: '',
                        },
                        {
                            heading: 'Quality Assurance',
                            link: '',
                        },
                        {
                            heading: 'Tech Consulting',
                            link: '',
                        },
                    ]
                }
            />
            <PortfolioSection works={works}/>
            <Testimonials/>
            <AwwardsSection/>
            <ContactusSection/>
        </Box>
    );
}

export async function getStaticProps(context) {
    const works = await client().query(
        Prismic.Predicates.at('document.type', 'work')
    )

    console.log(works);

    return {
        props: {
            works
        },
        revalidate: 10,
    }
}

export default Index;