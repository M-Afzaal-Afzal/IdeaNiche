import React from 'react';
import {Box, Container, makeStyles, Typography} from "@material-ui/core";
import HeadingWithDash from "../common/HeadingWithDash";

const useStyles = makeStyles(theme => ({
    pageContainer: {
        paddingRight: '153px',
        paddingLeft: '153px',
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
    subtitleBig: {
        marginTop: '30px',
        fontSize: '2.25rem',
        fontWeight: 700,
        lineHeight: 1.3,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.7rem',

        }
    },
    awwardsHeadingContainer: {
        marginLeft: '32%',
        color: '#000',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        }
    },
    mainAwwardsLogos: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '55px',
        [theme.breakpoints.down('lg')]: {
            justifyContent: 'space-around',
            flexWrap: 'wrap',
        }
    },
    logoContainer: {
        textDecoration: 'none',
        cursor: 'pointer',
        margin: '6px',
    },
    logoImage: {
        width: '126px',
        filter: 'grayscale(100%)',
        transition: 'filter 0.3s',
        '&:hover': {
            filter: "grayscale(0%)"
        }
    }
}))

const AwwardsSection = () => {

    const classes = useStyles();

    return (
        <Box className={classes.pageContainer}>
            <Container>
                <Box className={classes.awwardsHeadingContainer}>
                    <HeadingWithDash>
                        Awards
                    </HeadingWithDash>
                    <Typography variant={'h3'} className={classes.subtitleBig}>
                        Our awards represent the fire we bring to the work that we love
                    </Typography>
                </Box>
                {/* logos*/}
                <Box className={classes.mainAwwardsLogos}>

                    <Box className={classes.logoContainer}>
                        <img
                            className={classes.logoImage}
                            src={'https://img.orangesoft.co/static/awards/goodfirms.png'}
                            alt="logo"
                        />
                    </Box>

                    <Box className={classes.logoContainer}>
                        <img
                            className={classes.logoImage}
                            src={'https://img.orangesoft.co/static/awards/appfuture.png'}
                            alt="logo"
                        />
                    </Box>

                    <Box className={classes.logoContainer}>
                        <img
                            className={classes.logoImage}
                            src={'https://img.orangesoft.co/static/awards/topdevelopers.png'}
                            alt="logo"
                        />
                    </Box>

                    <Box className={classes.logoContainer}>
                        <img
                            className={classes.logoImage}
                            src={'https://img.orangesoft.co/static/awards/wadline.png'}
                            alt="logo"
                        />
                    </Box>

                    <Box className={classes.logoContainer}>
                        <img
                            className={classes.logoImage}
                            src={'https://img.orangesoft.co/static/awards/clutch.png'}
                            alt="logo"
                        />
                    </Box>

                    <Box className={classes.logoContainer}>
                        <img
                            className={classes.logoImage}
                            src={'https://img.orangesoft.co/static/awards/bussinesofapp.png'}
                            alt="logo"
                        />
                    </Box>

                </Box>
            </Container>
        </Box>
    );
};

export default AwwardsSection;