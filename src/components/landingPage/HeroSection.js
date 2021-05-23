import React from 'react';
import Container from '@material-ui/core/Container';
import {Box, Hidden, makeStyles, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import Typed from "react-typed";
import {motion} from "framer-motion";

const useStyles = makeStyles(theme => ({
    heroSectionContainer: {
        margin: '10rem auto',
        padding: '0 120px',
        [theme.breakpoints.down('md')]: {
            margin: '8rem auto',
            padding: '0 80px',
        }  ,
        [theme.breakpoints.down('sm')]: {
            margin: '5rem auto',
            padding: '0 60px',
        }  ,
        [theme.breakpoints.down('xs')]: {
            margin: '3rem auto',
            padding: '0 40px',
        }  ,
    },
    subHeading: {
        fontSize: '36px',
        lineHeight: '1.4',
        fontWeight: '400',
        [theme.breakpoints.down('md')]: {
            fontSize: '36px'
        }  ,
        [theme.breakpoints.down('sm')]: {
            fontSize: '32px'
        }  ,
        [theme.breakpoints.down('xs')]: {
            fontSize: '24px'
        }  ,
    },
    subHeading1: {},
    subHeading2: {},
    typistText: {
        display: 'inline-block',
        color: theme.palette.primary.main,
    },
    mainHeadingsContainer: {
        maxWidth: '740px',
    },
    mainScreenScroll: {
        position: 'absolute',
        right: 0,
        bottom: '130px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '20px',
        height: '152px',
    },
    mouse: {
        width: '14px',
        height: '21px',
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerDot: {
        width: '2px',
        height: '5px',
        display: 'block',
        borderRadius: '7px',
        background: `${theme.palette.primary.main}`
    },
    headingContainer: {
        [theme.breakpoints.down('md')]: {
            fontSize: '72px',
        }  ,
      [theme.breakpoints.down('sm')]: {
          fontSize: '60px',
      }  ,
        [theme.breakpoints.down('xs')]: {
            fontSize: '40px',
        }  ,
    },
//     font-size: 16px;
// font-weight: 400;
// line-height: 20px;
// display: block;
// color: #000;
// padding-bottom: 70px;
// writing-mode: vertical-lr;
// text-orientation: mixed;
    bottomMouseText: {
        fontSize: '16px',
        fontWeight: '400px',
        lineHeight: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: '#000',
        paddingBottom: '70px',
        writingMode: 'vertical-lr',
        textOrientation: 'mixed',
    },
//     content: '';
//     width: 1px;
//     height: 56px;
//     background-color: #000;
// position: absolute;
// left: 50%;
// bottom: 0;
    bottomLine: {
      content: '',
        width: '1px',
        height: '56px',
        position: 'absolute',
        left: '50%',
        bottom: 0,
        background: '#000',
    }

}))

const mouseBallVariants = {
    animateOne: {
        y: [-4, 4],
        transition: {
            y: {
                yoyo: Infinity,
                duration: .5,
            }
        }
    }
}

const HeroSection = () => {

    const theme = useTheme();

    const classes = useStyles();

    return (
        <Box className={classes.heroSectionContainer}>
            <Container style={{position: 'relative'}} disableGutters maxWidth={'lg'}>

                {/* main heading container*/}
                <Box className={classes.mainHeadingsContainer}>


                    <Box>
                        <Typography gutterBottom variant={'h1'} className={classes.headingContainer}>
                            Breathing tech into your ideas
                        </Typography>
                    </Box>

                    {/* sub heading container*/}
                    <Box>
                        <Typography className={`${classes.subHeading} ${classes.subHeading1}`} variant={'h2'}>
                            We build &nbsp;
                            <Typed
                                className={classes.typistText}
                                strings={[" ui design", "iot apps", "mobile apps", "web apps", "iOS and Android apps"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />
                        </Typography>

                        <Typography className={`${classes.subHeading} ${classes.subHeading2}`} variant={'h2'}>
                            that people love
                        </Typography>

                    </Box>
                </Box>

                <Hidden smDown>
                    <Box className={classes.mainScreenScroll}>
                        <Box className={classes.mouse}>
                            <motion.span variants={mouseBallVariants} animate={'animateOne'}
                                         className={classes.innerDot}>

                            </motion.span>
                        </Box>
                        <Box className={classes.bottomMouseText}>
                            <Box>
                            Scroll
                            </Box>
                        <Box className={classes.bottomLine}/>
                        </Box>
                    </Box>
                </Hidden>
            </Container>
        </Box>
    );
};

export default HeroSection;