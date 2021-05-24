import React from 'react';
import {Box, Container, makeStyles} from "@material-ui/core";
import HeadingWithDash from "../common/HeadingWithDash";
import OutLineButton from "../buttons/OutLineButton";
import {motion} from "framer-motion";

const useStyles = makeStyles(theme => ({
    portfolioBlock: {
        color: 'white',
        background: '#212121',
        padding: '80px 0',
    },
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
    portfolioHeadingBlock: {
        maxWidth: '630px',
        marginTop: '30px',
        fontSize: '2.25rem',
        fontWeight: 700,
        lineHeight: 1.3,
    },
    portfolioBlockContent: {
        marginTop: '30px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            justifyContent: 'center',
        }
    },
    portfolioItem: {

        minHeight: '600px',
        maxWidth: '462px',
        width: '48%',
        padding: '30px 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',

        [theme.breakpoints.down('sm')]: {
            width: '100%',
            justifyContent: 'center',
        }
    },
    portfolioItemTitle: {
        fontSize: '1.5rem',
        lineHeight: 1.3,
        marginTop: '20px',
        fontWeight: 500,
        color: '#fff',
    },
    imageContainer: {
        width: '100%',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        '& img': {
            width: '100%',
            height: 'auto',
        }
    },
    moreProjectsContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '80px',
    }
}))

const imageAnimateVariants = {
    initial: {
        scale: 1,
        transition: {
            type: 'tween',
            ease: 'easeInOut',
            duration: .5,
        }
    },
    hover: {
        scale: 1.02,
        transition: {
            type: 'linear',
            ease: 'easeInOut',
        }
    }
}

const PortfolioSection = () => {

    const classes = useStyles();

    return (
        <Box className={`${classes.portfolioBlock} ${classes.pageContainer}`}>
            <Container maxWidth={'lg'}>
                <Box>
                   <HeadingWithDash>
                       Portfolio
                   </HeadingWithDash>
                </Box>
                <Box className={classes.portfolioHeadingBlock}>
                    Take a look at some of the apps we’ve developed since 2011
                </Box>

                <Box className={classes.portfolioBlockContent}>


                    <Box className={`${classes.portfolioItem}`}>
                        <Box component={motion.div} initial={'initial'} variants={imageAnimateVariants} whileHover={'hover'}  className={classes.imageContainer}>
                            <img src={'https://img.orangesoft.co/media/warehousing-app.png'} alt={'portfolio item'}/>
                        </Box>
                        <OutLineButton bottomLineColor={'white'} color={'white'} size={'24px'} className={classes.portfolioItemTitle}>
                            WearHouse
                        </OutLineButton>
                    </Box>


                    <Box className={`${classes.portfolioItem}`}>
                        <Box component={motion.div} initial={'initial'} variants={imageAnimateVariants} whileHover={'hover'}  className={classes.imageContainer}>
                            <img src={'https://img.orangesoft.co/media/recipies-app.png'} alt={'portfolio item'} />
                        </Box>
                        <OutLineButton bottomLineColor={'white'} color={'white'} size={'24px'} className={classes.portfolioItemTitle}>
                            WearHouse
                        </OutLineButton>
                    </Box>


                    <Box className={`${classes.portfolioItem}`}>
                        <Box component={motion.div} initial={'initial'} variants={imageAnimateVariants} whileHover={'hover'}  className={classes.imageContainer}>
                            <img src={'https://img.orangesoft.co/media/freshconnect-ios-app.png'} alt={'portfolio item'} />
                        </Box>
                        <OutLineButton bottomLineColor={'white'} color={'white'} size={'24px'} className={classes.portfolioItemTitle}>
                            Fresh Content
                        </OutLineButton>
                    </Box>


                    <Box className={`${classes.portfolioItem}`}>
                        <Box component={motion.div} initial={'initial'} variants={imageAnimateVariants} whileHover={'hover'} className={classes.imageContainer}>
                            <img src={'https://img.orangesoft.co/media/ghost-hunt-app.png'} alt={'portfolio item'} />
                        </Box>
                        <OutLineButton bottomLineColor={'white'} color={'white'} size={'24px'} className={classes.portfolioItemTitle}>
                            Ghost Hunt
                        </OutLineButton>
                    </Box>


                </Box>

                <Box className={classes.moreProjectsContainer}>
                    <OutLineButton size={'18.4px'} color={'white'} bottomLineColor={'white'}>
                        More Projects
                    </OutLineButton>
                </Box>

            </Container>
        </Box>
    );
};

export default PortfolioSection;