import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Container,
    Hidden, IconButton,
    makeStyles,
    Toolbar, useTheme
} from "@material-ui/core";
// import {useDispatch, useSelector} from "react-redux";
// import {selectIsDarkMode, toggleDarkMode} from "../../store/darkMode/darkModeSlice";
// import Image from "next/image";
// import {Link} from 'react-scroll'

import Link from '../../utils/Link';
import OutLineButton from "../buttons/OutLineButton";
import RoundedButton from "../buttons/RoundedButton";

import {FaFacebookF, FaLinkedinIn, FaInstagram, FaDribbble, FaBehance} from "react-icons/fa";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import {AnimatePresence, motion} from "framer-motion";

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    leftIconsContainer: {
        textAlign: "left",
        display: 'flex',
        alignItems: 'center',
    },
    rightIconsContainer: {
        textAlign: "right",
        display: "flex",
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    centerIconsContainer: {
        textAlign: "center",
    },
    imageContainer: {
        position: 'relative',
        width: '200px',
        height: '50px',
    },
    logoLink: {
        display: "inline-block",
        cursor: 'pointer',
        // height: '100%'
    },
    list: {
        width: 250,
    },

    headerButton: {
        letterSpacing: '1px',
        fontWeight: 'normal',
        fontSize: '20px',
    },
    btn: {
        margin: '0 .7rem',
    },
    getAQuote: {
        marginRight: '15px',
    },
    drawer: {
        position: 'fixed',
        width: '100%',
        minHeight: '100vh',
        background: 'white',
        zIndex: '40',
        marginTop: theme.mixins.toolbar.margin,
        padding: '6rem 0'
    },
    drawerButton: {
        margin: '1.5rem 0',
    },
    drawerButtonsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawerIconsContainer: {
        display: 'flex',
        justifyContent: 'center',
        padding: '4rem 1rem 0',
    },
    drawerIcon: {
        margin: '0 2rem',
        [theme.breakpoints.down('xs')]: {
            margin: '0 1rem',
        }
    },
    boxShadow: {
        boxShadow: "rgb(196 196 196 / 22%) 0px 24px 24px",
    },
    link: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        textDecoration: 'none !important'
    }

}))

const drawerVariants = {
    hidden: {
        y: '-100vh'
    },
    visible: {
        y: 0,
        transition: {
            type: 'tween',
            ease: 'easeInOut',
            duration: .7
        }
    },
    exit: {
        y: '-100vh',
        transition: {
            type: 'tween',
            ease: 'easeInOut',
            duration: .2
        }
    }
}

const Header = (props) => {

    const classes = useStyles();

    const theme = useTheme();
    // const isDarkMode = useSelector(selectIsDarkMode);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // const dispatch = useDispatch();
    //
    // const darkModeHandler = () => {
    //     dispatch(toggleDarkMode());
    // }

    // const toggleDrawer = () => {
    //     setIsDrawerOpen(!isDrawerOpen);
    // }

    const closeDrawer = () => {
        setIsDrawerOpen(false)
    }

    const openDrawer = () => {
        setIsDrawerOpen(true);
    }

    return (

        <Box>

            <AppBar color={'white'} elevation={0} className={!isDrawerOpen ? classes.boxShadow : ' '}
                    position={'fixed'}>
                <Container maxWidth={'lg'} style={{position: 'relative'}}>
                    <Toolbar color={'gray'} disableGutters>

                        {/* Left Icons*/}

                        <Box className={`${classes.grow} ${classes.leftIconsContainer}`}>

                            {/*<Hidden mdUp>*/}
                            <Box className={classes.logoLink} onClick={closeDrawer}>
                                <Box component={Link} href={'/'}
                                     style={{textDecoration: 'none'}}
                                     className={classes.headerButton} size={'large'}>
                                    IdeaNiche
                                </Box>
                            </Box>

                        </Box>

                        {/* Right Icons*/}

                        <Box className={`${classes.grow} ${classes.rightIconsContainer}`}>
                            <Hidden smDown>

                                <OutLineButton className={classes.btn}
                                               to={'contact'} smooth={'true'}
                                               size={'small'}
                                >
                                    Services
                                </OutLineButton>

                                <Box className={classes.link} component={Link} href={'/about'}>
                                        <OutLineButton className={classes.btn} to={'contact'} smooth={'true'}
                                                       size={'small'}
                                        >
                                            About
                                        </OutLineButton>
                                </Box>

                                <OutLineButton className={classes.btn}
                                               size={'small'}
                                >
                                    Work
                                </OutLineButton>

                                <OutLineButton className={classes.btn} size={'small'}
                                >
                                    Blog
                                </OutLineButton>

                                <Box component={Link} href={'/contact'}>
                                    <Box>
                                        <RoundedButton className={classes.btn}>
                                            Contact us
                                        </RoundedButton>
                                    </Box>
                                </Box>

                            </Hidden>

                            <Hidden mdUp>
                                {/*<IconButton onClick={toggleDrawer}>*/}
                                <OutLineButton
                                    className={classes.btn}
                                    to={'contact'}
                                    smooth={'true'}
                                    size={'12px'}
                                    color={theme.palette.primary.main}
                                >
                                    Get a quote
                                </OutLineButton>
                                <div>

                                    {
                                        !isDrawerOpen ? (
                                            <IconButton onClick={openDrawer} className={classes.navigationIcon}>
                                                <HiOutlineMenuAlt3 size={30}/>
                                            </IconButton>
                                        ) : (
                                            <IconButton onClick={closeDrawer} className={classes.navigationIcon}>
                                                <HiOutlineMenuAlt3 size={30}/>
                                            </IconButton>
                                        )
                                    }

                                    {/*    <UseAnimations*/}
                                    {/*        animation={menu4}*/}
                                    {/*        animationKey="menu4"*/}
                                    {/*        onClick={toggleDrawer}*/}
                                    {/*        size={35}*/}
                                    {/*        reverse={isDrawerOpen}*/}
                                    {/*        style={{padding: 100}}*/}
                                    {/*    />*/}

                                </div>
                                {/*</IconButton>*/}
                            </Hidden>

                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>
            {/* drawer*/}
            <AnimatePresence>

                {
                    isDrawerOpen ? (
                        <Box
                            component={motion.div}
                            variants={drawerVariants}
                            initial={'hidden'}
                            animate={'visible'}
                            exit={'exit'}
                            className={classes.drawer}>
                            <Box className={classes.drawerButtonsContainer}>
                                <OutLineButton
                                    className={classes.drawerButton}
                                    size={'24px'}
                                    color={theme.palette.primary.main}
                                >
                                    Services
                                </OutLineButton>
                                <Box component={Link} href={'/about'}>
                                    <Box onClick={closeDrawer}>
                                <OutLineButton
                                    className={classes.drawerButton}
                                    size={'24px'}
                                    color={theme.palette.primary.main}
                                >
                                    About
                                </OutLineButton>
                                    </Box>
                                </Box>

                                <OutLineButton
                                    className={classes.drawerButton}
                                    size={'24px'}
                                    color={theme.palette.primary.main}
                                >
                                    Work
                                </OutLineButton>

                                <OutLineButton
                                    className={classes.drawerButton}
                                    size={'24px'}
                                    color={theme.palette.primary.main}
                                >
                                    Blog
                                </OutLineButton>

                                <Box component={Link} href={'/contact'}>
                                    <Box onClick={closeDrawer}>
                                        <RoundedButton size={'24px'} color={''} className={classes.drawerButton}>
                                            Contact us
                                        </RoundedButton>
                                    </Box>
                                </Box>
                            </Box>

                            <Box className={classes.drawerIconsContainer}>
                                <Box className={classes.drawerIcon}>
                                    <FaLinkedinIn size={20}/>
                                </Box>

                                <Box className={classes.drawerIcon}>
                                    <FaInstagram size={20}/>
                                </Box>

                                <Box className={classes.drawerIcon}>
                                    <FaFacebookF size={20}/>
                                </Box>

                                <Box className={classes.drawerIcon}>
                                    <FaBehance size={20}/>
                                </Box>

                                <Box className={classes.drawerIcon}>
                                    <FaDribbble size={20}/>
                                </Box>

                            </Box>

                        </Box>
                    ) : null
                }


            </AnimatePresence>
        </Box>
    );
};

export default Header;
