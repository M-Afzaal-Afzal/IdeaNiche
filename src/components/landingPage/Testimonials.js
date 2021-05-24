import React from 'react';
import {Box, Container, makeStyles, Typography} from "@material-ui/core";
import HeadingWithDash from "../common/HeadingWithDash";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);

const useStyles = makeStyles(theme => ({
    mainReviews: {
        padding: '80px 0',
    },
    pageContainer: {
        paddingRight: '153px',
        paddingLeft: '153px',
        width: '100%',
        margin: 'auto',
        marginBottom: '60px',
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
    container: {
        [theme.breakpoints.down('sm')]: {
            padding: 0,
        }
    },
    slide: {
        position: 'relative',
        padding: '8rem 0 4rem',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            padding: '8rem 0 4rem',

        },
        [theme.breakpoints.down('xs')]: {
            padding: '6rem 0 4rem',

        }
    },
    slideContent: {
        padding: '50px',
        maxWidth: '700px',
        width: '60%',
        height: '320px',
        marginLeft: '5rem',
        border: '1px solid #f3f3f6',
        background: '#fff',
        display: "flex",
        justifyContent: 'space-between',
        flexDirection: 'column',
        zIndex: 50,

        [theme.breakpoints.down('xs')]: {
            marginLeft: '0',
            padding: '30px',
            width: '80%',
            height: '230px',
        }

    },
    imageContainer: {
        // width: '45%',
        height: '100%',
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -10,
        [theme.breakpoints.down('sm')]: {
            height: '35%',

        },
        [theme.breakpoints.down('xs')]: {
            height: '25%',

        }
        // position: 'relative',
    },
    image: {
        height: ' 100%',
        width: 'auto',
    },
    quote: {
        [theme.breakpoints.down('sm')]: {
            width: '30px',
            height: 'auto',
        },
        [theme.breakpoints.down('xs')]: {
            width: '20px',

        }
    },
    mainText: {
        fontSize: '1.25rem',
        marginTop: '2rem',
        fontWeight: '500',
        textAlign: 'justify',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem',
            marginTop: '1.5rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '.5rem',
            fontSize: '1rem',
        }
    },
    bottomContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomRightContent: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            alignItems: 'center',
        }
    },
    bottomLogoImg: {
        width: '50px',
        marginBottom: '10px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '0px',
            marginRight: '15px',
        }
    },
    reviewStars: {
        display: 'flex',
        alignItems: 'center',
    },
    fiveStars: {

    },
    ratingNumber: {
        marginRight: '10px',
        fontSize: '.9rem',
        fontWeight: 'bolder',
        marginTop: '2px',
    },
    bottomLeftLogoContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    bottomLeftContent: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    userInfo: {
        // display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },

        [theme.breakpoints.down('sm')]: {
            marginTop: '-12rem',
            marginLeft: '17rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '-6rem',
            marginLeft: '8rem',
        },

    }

}))

const Testimonials = () => {

    const classes = useStyles();

    return (
        <Box className={classes.mainReviews}>
            <Container className={classes.container}>
                <Box className={classes.pageContainer}>
                    <HeadingWithDash>
                        Our Client Says
                    </HeadingWithDash>
                </Box>

                <Swiper slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            "clickable": true
                        }}
                        navigation={true}
                        className="mySwiper"
                >
                    {/*slide one*/}
                    <SwiperSlide className={classes.slide}>
                        <Box className={classes.slideContent}>
                            <Box>
                                <img className={classes.quote} alt={'quote'}
                                     src={'https://orangesoft.co/ui/quotes.svg'}/>
                                <Box className={classes.mainText}>
                                    They were very flexible and accommodating to our sometimes rather unusual needs and
                                    circumstances. Unlike many other vendors I have experience with, they are very
                                    trusting and prepared to take risks for the sake of building a solid business
                                    relationship.
                                </Box>
                            </Box>

                            <Box className={classes.bottomContent}>

                                <Box className={classes.bottomLeftContent}>
                                    <Typography gutterBottom variant={'body1'}>
                                        Michael Sender
                                    </Typography>

                                    <Typography variant={'body1'}>
                                        CEO, COMPRADO, SWEDEN
                                    </Typography>
                                </Box>

                                <Box className={classes.bottomRightContent}>
                                    <Box className={classes.bottomLeftLogoContainer}>
                                        <img className={classes.bottomLogoImg} src={'https://orangesoft.co/ui/clutchlogo.svg'} alt=""/>
                                    </Box>

                                    <Box className={classes.reviewStars}>
                                        <span className={classes.ratingNumber}>5.00</span>
                                        <img className={classes.fiveStart} src={'https://orangesoft.co/ui/5stars.svg'} alt=""/>
                                    </Box>
                                </Box>

                            </Box>
                        </Box>

                        <Box className={classes.imageContainer}>
                            <img
                                className={classes.image}
                                alt={'user image'}
                                src={'https://img.orangesoft.co/reviews/michael.png'}
                            />
                            <Box className={classes.userInfo}>
                                <Typography gutterBottom variant={'body1'}>
                                    Michael Sender
                                </Typography>

                                <Typography variant={'body1'}>
                                    CEO, COMPRADO, SWEDEN
                                </Typography>
                            </Box>
                        </Box>
                    </SwiperSlide>

                {/*    slide two*/}
                    <SwiperSlide className={classes.slide}>
                        <Box className={classes.slideContent}>
                            <Box>
                                <img className={classes.quote} alt={'quote'}
                                     src={'https://orangesoft.co/ui/quotes.svg'}/>
                                <Box className={classes.mainText}>
                                    Orangesoft delivered a compelling app with superior operability and continues to produce deliverables that satisfy expectations. The team manages deadlines adeptly and provides tools that encourage collaboration and transparency.
                                </Box>
                            </Box>

                            <Box className={classes.bottomContent}>

                                <Box className={classes.bottomLeftContent}>
                                    <Typography gutterBottom variant={'body1'}>
                                        Mats Danielsen
                                    </Typography>
                                    <Typography variant={'body1'}>
                                        CEO, LIQUID BARCODES, NORWAY
                                    </Typography>
                                </Box>

                                <Box className={classes.bottomRightContent}>
                                    <Box className={classes.bottomLeftLogoContainer}>
                                        <img className={classes.bottomLogoImg}
                                             src={'https://orangesoft.co/ui/clutchlogo.svg'} alt=""/>
                                    </Box>

                                    <Box className={classes.reviewStars}>
                                        <span className={classes.ratingNumber}>5.00</span>
                                        <img className={classes.fiveStart} src={'https://orangesoft.co/ui/5stars.svg'} alt=""/>
                                    </Box>
                                </Box>

                            </Box>
                        </Box>

                        <Box className={classes.imageContainer}>
                            <img
                                className={classes.image}
                                alt={'user image'}
                                src={'https://img.orangesoft.co/reviews/mats.png'}
                            />
                            <Box className={classes.userInfo}>
                                <Typography gutterBottom variant={'body1'}>
                                    Mats Danielsen
                                </Typography>

                                <Typography variant={'body1'}>
                                    CEO, LIQUID BARCODES, NORWAY
                                </Typography>
                            </Box>
                        </Box>
                    </SwiperSlide>

                {/*    slide three*/}
                    <SwiperSlide className={classes.slide}>
                        <Box className={classes.slideContent}>
                            <Box>
                                <img className={classes.quote} alt={'quote'}
                                     src={'https://orangesoft.co/ui/quotes.svg'}/>
                                <Box className={classes.mainText}>
                                    The guys from Orangesoft deliver quality results through a collaborative process, taking an active role in feedback cycles. They are fast, flexible, communicative, and always striving to do everything necessary to help the customer.
                                </Box>
                            </Box>

                            <Box className={classes.bottomContent}>

                                <Box className={classes.bottomLeftContent}>
                                    <Typography gutterBottom variant={'body1'}>
                                        Giordano Rubino
                                    </Typography>

                                    <Typography variant={'body1'}>
                                        CEO, WHplus GmbH, GERMANY
                                    </Typography>
                                </Box>

                                <Box className={classes.bottomRightContent}>
                                    <Box className={classes.bottomLeftLogoContainer}>
                                        <img className={classes.bottomLogoImg} src={'https://orangesoft.co/ui/clutchlogo.svg'} alt=""/>
                                    </Box>

                                    <Box className={classes.reviewStars}>
                                        <span className={classes.ratingNumber}>5.00</span>
                                        <img className={classes.fiveStart} src={'https://orangesoft.co/ui/5stars.svg'} alt=""/>
                                    </Box>
                                </Box>

                            </Box>
                        </Box>

                        <Box className={classes.imageContainer}>
                            <img
                                className={classes.image}
                                alt={'user image'}
                                src={'https://img.orangesoft.co/reviews/giordano.png'}
                            />
                            <Box className={classes.userInfo}>
                                <Typography gutterBottom variant={'body1'}>
                                    Giordano Rubino
                                </Typography>

                                <Typography variant={'body1'}>
                                    CEO, WHplus GmbH, GERMANY
                                </Typography>
                            </Box>
                        </Box>
                    </SwiperSlide>

                </Swiper>

            </Container>
        </Box>
    );
};

export default Testimonials;