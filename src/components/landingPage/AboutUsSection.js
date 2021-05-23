import React from 'react';
import {Box, Container, makeStyles, Typography} from "@material-ui/core";
import HeadingWithDash from "../common/HeadingWithDash";

const useStyles = makeStyles(theme => ({
    aboutUsSectionContainer: {
        background: '#F8F8F8',
        margin: '10rem auto',
        padding: '80px 120px',
        [theme.breakpoints.down('md')]: {
            margin: '8rem auto',
            padding: '60px 80px',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '5rem auto',
            padding: '60px 40px',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '3rem auto',
            padding: '60px 20px',
        },
    },
    headingContainer: {
        marginBottom: '34px',
        [theme.breakpoints.down('md')]: {
            padding: '0 120px',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '0 100px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: '0 80px',
        },
    },
    aboutUsParagraph: {
        marginRight: '80px',
        fontSize: '24px',
        fontWeight: 600,
        lineHeight: '42px',
        color: '#000',
        [theme.breakpoints.down('sm')]: {
            marginRight: '0',
        },
    },
    imp: {
        color: theme.palette.primary.main,
    },
    aboutUsLogos: {
        marginTop: '80px',
        display: 'flex',
        justifyContent: 'flex-end',
        overflow: 'hidden',
    },
    '@keyframes moveLogoHorizontal': {
        '0%': {
            marginRight: '-1968.5px'
        },
        '100%': {
            marginRight: 0
        }
    },
    aboutUsLogosBox: {
        marginRight: '-1968.5px',
        display: 'flex',
        willChange: 'transform',
        flexWrap: 'nowrap',
        alignItems: 'center',
        animation: '$moveLogoHorizontal 45s linear infinite'
    },
    aboutUsAdidas: {
        width: '96px',
        height: '67px',
        background: 'url("https://img.orangesoft.co/static/client-logos/adidas.png")',
        '&:hover': {
            backgroundPosition: '96px 0'
        }
    },
    aboutUsCinemood :{
        width: '175.5px',
        height: '50px',
        backgroundImage: 'url("https://img.orangesoft.co/static/client-logos/cinemood.png")',
        '&:hover': {
            backgroundPosition: '175.5px 0',
        }
    },
    aboutUsCoachNow :{
        width: '197px',
        height: '41px',
        backgroundImage: 'url("https://img.orangesoft.co/static/client-logos/coach-now.png")',
        '&:hover': {
            backgroundPosition: '197px 0',
        }
    },
    aboutUsEuropaPlus :{
        width: '140px',
        height: '50px',
        backgroundImage: 'url("https://img.orangesoft.co/static/client-logos/europa-plus.png")',
        '&:hover': {
            backgroundPosition: '140px 0',
        }
    },
    aboutUsHamleys :{
        width: '129px',
        height: '75px',
        backgroundImage: 'url("https://img.orangesoft.co/static/client-logos/hamleys.png")',
        '&:hover': {
            backgroundPosition: '129px 0',
        }
    },
    aboutUsIkea :{
        width: '130px',
        height: '31px',
        backgroundImage: 'url("https://img.orangesoft.co/static/client-logos/ikea.png")',
        '&:hover': {
            backgroundPosition: '130px 0',
        }
    },
    aboutUsLife :{
        width: '110px',
        height: '61px',
        backgroundImage: 'url("https://img.orangesoft.co/static/client-logos/life.png")',
        '&:hover': {
            backgroundPosition: '110px 0',
        }
    },
    aboutUsBarcodes :{
        width: '135px',
        height: '50px',
        backgroundImage: 'url("https://img.orangesoft.co/static/client-logos/liquid-barcodes.png")',
        '&:hover': {
            backgroundPosition: '135px 0',
        }
    },
    aboutUsPhilips :{
        width: '140px',
        height: '34px',
        backgroundImage: 'url("https://img.orangesoft.co/static/client-logos/philips.png")',
        '&:hover': {
            backgroundPosition: '140px 0',
        }
    },
    aboutUsYukon :{
        width: '116px',
        height: '74px',
        backgroundImage: 'url("https://img.orangesoft.co/static/client-logos/yukon.png")',
        '&:hover': {
            backgroundPosition: '116px 0',
        }
    },
    allSet: {
        flexShrink: 0,
        marginRight: '30px',
        backgroundSize: '200%',
        backgroundPosition: '0 0',
    }
}))

const AboutUsSection = () => {

    const classes = useStyles();

    return (
        <Box className={classes.aboutUsSectionContainer}>
            <Container maxWidth={'lg'} disableGutters>
                <Box className={classes.headingContainer}>
                    <HeadingWithDash>
                        About us
                    </HeadingWithDash>
                </Box>
                <Box>
                    <Typography gutterBottom variant={'body1'} className={classes.aboutUsParagraph}>
                        Orangesoft was founded in early <span className={classes.imp}>2011</span> as a mobile & web app
                        development company. The company has successfully developed more than <span
                        className={classes.imp}>300</span> projects.
                    </Typography>

                    <Typography variant={'body1'} className={classes.aboutUsParagraph}>
                        Our goal is to provide our partners with service <span
                        className={classes.imp}>par excellence</span> . We've done it before. And we can do it again.
                    </Typography>
                </Box>

                <Box className={classes.aboutUsLogos}>
                    <Box className={classes.aboutUsLogosBox}>
                        <Box className={`${classes.aboutUsAdidas} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsCinemood} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsCoachNow} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsEuropaPlus} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsHamleys} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsIkea} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsLife} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsBarcodes} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsPhilips} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsYukon} ${classes.allSet}`}/>

                        <Box className={`${classes.aboutUsAdidas} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsCinemood} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsCoachNow} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsEuropaPlus} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsHamleys} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsIkea} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsLife} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsBarcodes} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsPhilips} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsYukon} ${classes.allSet}`}/>

                        <Box className={`${classes.aboutUsAdidas} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsCinemood} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsCoachNow} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsEuropaPlus} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsHamleys} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsIkea} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsLife} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsBarcodes} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsPhilips} ${classes.allSet}`}/>
                        <Box className={`${classes.aboutUsYukon} ${classes.allSet}`}/>

                    </Box>
                </Box>

            </Container>
        </Box>
    );
};

export default AboutUsSection;