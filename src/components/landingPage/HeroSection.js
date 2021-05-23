import React from 'react';
import Container from '@material-ui/core/Container';
import {Box, makeStyles, Typography} from "@material-ui/core";
import Typed from "react-typed";

const useStyles = makeStyles(theme => ({
    heroSectionContainer: {
        margin: '10rem auto',
        padding: '0 120px'
    },
    headingContainer: {
        maxWidth: '740px',
    },
    subHeading: {
        fontSize: '36px',
        lineHeight: '1.4',
        fontWeight: '400',
    },
    subHeading1: {

    },
    subHeading2: {

    },
    typistText: {
        display: 'inline-block',
        color: theme.palette.primary.main,
    }
}))

const HeroSection = () => {

    const classes = useStyles();

    return (
        <Box className={classes.heroSectionContainer}>
            <Container disableGutters maxWidth={'lg'}>

                {/* main heading container*/}
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
                                strings={[" ui design", "iot apps", "mobile apps","web apps","iOS and Android apps"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            />
                        </Typography>

                        <Typography className={`${classes.subHeading} ${classes.subHeading2}`} variant={'h2'}>
                            that people love
                        </Typography>

                </Box>

            </Container>
        </Box>
    );
};

export default HeroSection;