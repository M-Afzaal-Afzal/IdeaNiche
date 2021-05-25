import React from 'react';
import {Box, Container, makeStyles, Typography} from "@material-ui/core";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const useStyles = makeStyles(theme => ({
    pageContainer: {
        paddingRight: '153px',
        paddingLeft: '153px',
        // paddingTop: '80px',
        // paddingBottom: '80px',
        width: '100%',
        margin: 'auto',
        [theme.breakpoints.down('md')]: {
            paddingRight: '120px',
            paddingLeft: '120px',
        },
        [theme.breakpoints.down('sm')]: {
            paddingRight: '50px',
            paddingLeft: '50px',
        },
        [theme.breakpoints.down('xs')]: {
            paddingRight: '15px',
            paddingLeft: '15px',
        }
    },
    textBoxSlider: {
        // paddingTop: '55px',
        paddingBottom: '55px',
        overflow: 'hidden',
    },
    textBoxSliderLineBox: {
        height: '30px',
        width: '100%',
        position: 'relative',
        paddingBottom: '55px',
    },
    textBoxSliderCircle: {
        width: '30px',
        height: '30px',
        border: '1px solid #d2d2d2',
        borderRadius: '50%',
        background: '#fff',
    },
    textBoxSliderLine: {
        position: 'absolute',
        zIndex: '-1',
        height: '1px',
        width: '100%',
        borderTop: '1px solid #d2d2d2',
        top: '15px',
    },
    slide: {
        // width: '450px',
        // minWidth: '450px',
        // marginRight: '60px',
        position: 'relative',
        overflow: 'visible',
    },
    slideDot: {
        position: 'relative',
        left: '12px',
        top: 'calc(-43px)',
        width: "7px",
        height: '7px',
        borderRadius: '50%',
        backgroundColor: '#f81d3d',
    },
    slides: {
        overflow: 'visible',
    },
    sliderItemTitle: {
        fontSize: '24px',
        fontWeight: 'bold',
        lineHeight: '1.1',
        textTransform: 'uppercase',
        marginBottom: '24px',
    },
    heading: {
        fontSize: '24px',
        fontWeight: "bold",
        lineHeight: "1.1",
        textTransform: 'uppercase',
        marginBottom: '24px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px',
        }
    },
    description: {
        fontSize: '16px',
        lineHeight: '1.6',
        marginBottom: '8rem',
        marginRight: '8rem',
        [theme.breakpoints.down('xs')]: {
            marginRight: '1rem',
        }
    }

}))

const TextBlockSlider = () => {

    const classes = useStyles();

    return (
        <Box className={classes.textBoxSlider}>

            <Box className={classes.textBoxSliderLineBox}>
                <Box className={classes.pageContainer}>
                    <Container maxWidth={'lg'} disableGutters>
                        <Box className={classes.textBoxSliderCircle}/>
                    </Container>
                </Box>
                <Box className={classes.textBoxSliderLine}/>
            </Box>

            <Box className={classes.pageContainer}>
                <Container maxWidth={'lg'} disableGutters>
                    <Swiper
                        slidesPerView={'1'}
                        // spaceBetween={30}
                        // loop={true}
                        pagination={{
                            "clickable": true
                        }}
                        navigation={true}
                        className={classes.slides}
                    >

                        <SwiperSlide className={classes.slide}>
                            <Box className={classes.slideDot}/>
                            <Typography className={classes.heading} variant={'h2'}>
                                01.PLANNING
                            </Typography>

                            <Typography variant={'body1'} className={classes.description}>
                                We analyze your vision and find out everything about your goals, product, industry,
                                audience, and competitors. Then we translate our learnings into product specification,
                                wireframes, and other project documents.
                            </Typography>

                        </SwiperSlide>

                        {/*    slide 2*/}
                        <SwiperSlide className={classes.slide}>
                            <Box className={classes.slideDot}/>
                            <Typography className={classes.heading} variant={'h2'}>
                                02.DESIGN

                            </Typography>

                            <Typography variant={'body1'} className={classes.description}>
                                Based on the app strategy we created during the research phase, we prepare the
                                interactive prototype that responds to user interactions. We then design the user
                                interface of your product.
                            </Typography>

                        </SwiperSlide>

                        {/*    slide 3*/}
                        <SwiperSlide className={classes.slide}>
                            <Box className={classes.slideDot}/>
                            <Typography className={classes.heading} variant={'h2'}>
                                03. DEVELOPMENT

                            </Typography>

                            <Typography variant={'body1'} className={classes.description}>
                                We follow agile development methodologies and master the latest technologies for iOS and
                                Android to provide an efficient and effective collaboration.

                            </Typography>

                        </SwiperSlide>


                        {/*    slide 4*/}
                        <SwiperSlide className={classes.slide}>
                            <Box className={classes.slideDot}/>
                            <Typography className={classes.heading} variant={'h2'}>

                                04. TESTING
                            </Typography>

                            <Typography variant={'body1'} className={classes.description}>

                                We thoroughly test the performance of every project we take on to ensure its
                                responsiveness, user-friendliness, and bulletproof security.
                            </Typography>

                        </SwiperSlide>

                        {/*    slide 5*/}
                        <SwiperSlide className={classes.slide}>
                            <Box className={classes.slideDot}/>
                            <Typography className={classes.heading} variant={'h2'}>
                                05. LAUNCH & SUPPORT
                            </Typography>

                            <Typography variant={'body1'} className={classes.description}>
                                You can count on our post-release support because we aim for long-term success. We are
                                constantly
                            </Typography>

                        </SwiperSlide>


                    </Swiper>
                </Container>
            </Box>

        </Box>
    );
};

export default TextBlockSlider;
