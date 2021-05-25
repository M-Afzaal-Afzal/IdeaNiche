import React from 'react';
import {Box, Container, makeStyles, Typography, useTheme} from "@material-ui/core";
import OutLineButton from "../buttons/OutLineButton";
import {RiArrowRightSLine} from "react-icons/ri";
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
    servicesBlock: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
    },
    servicesBlockTitle: {
        fontSize: '36px',
        fontWeight: 700,
        lineHeight: '46px',
        width: '330px',
        [theme.breakpoints.down('sm')]: {
           width: '100%',
            fontSize: '24px',
            lineHeight: '36px',
            marginBottom: '15px',
        }
    },
    servicesBlockList: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'start',
        marginLeft: '10%',
        [theme.breakpoints.down('md')]: {
            marginLeft: '7%',
        },

        [theme.breakpoints.down('sm')]: {
            marginLeft: '0',
        }
    },
    service: {
        position: 'relative',
        color: '#000',
        fontSize: '24px',
        fontWeight: '300px',
        lineHeight: '1.35',
        padding: '10px 18px 10px 0',
        display: 'flex',
        alignItems: 'center',
    },
    titleWithLineContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '60px 0',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'flex-start',
            marginLeft: 0,
            padding: '40px 0',
        }
    },
    mainTechnologies: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '160px',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'start',
            flexDirection: 'column',
        },
        [theme.breakpoints.down('xs')]: {
            paddingBottom: '80px',
        }
    },
    technologyBox: {
        maxWidth: '370px',
    },
    techBoxHeading: {
        marginBottom: '15px',
        fontWeight: 'bold',
    },
    techName: {
        fontSize: '1.15rem',
        fontWeight: 400,
        lineHeight: 1.7,

    },
    mainTechnologyBoxRight: {
        marginLeft: '50px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0',
            marginTop: '30px',
        }
    },
    headingWithDash: {
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0',
        }
    }

}))

const DevelopmentServices = ({heading,services,bottomTech}) => {

    const theme = useTheme();
    const classes = useStyles();

    return (
        <div className={classes.pageContainer}>
            <Container disableGutters maxWidth={'lg'}>
                <Box className={classes.servicesBlock}>
                    <Typography variant={'h3'} className={classes.servicesBlockTitle}>
                        {heading}
                    </Typography>
                    <Box className={classes.servicesBlockList}>
                        {
                            services.map(service => (
                                <Box className={classes.service}>
                                    <OutLineButton size={24}>
                                        {service.heading}
                                    </OutLineButton>
                                    <RiArrowRightSLine
                                        style={{display: "inline-block", width: '20px',height: '20px', marginBottom: '4px', marginLeft: '10px'}}
                                        size={20} color={theme.palette.primary.main}/>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>

                {/*    title with line*/}

                {
                    bottomTech && (
                        <>
                            <Box className={classes.titleWithLineContainer}>
                                <HeadingWithDash className={classes.headingWithDash} style={{marginLeft: 'auto'}}>
                                    We excel at quality app development
                                </HeadingWithDash>
                            </Box>

                            <Box className={classes.mainTechnologies}>

                                <Box className={classes.technologyBox}>
                                    <Typography className={classes.techBoxHeading} variant={'h3'}>
                                        Web technologies
                                    </Typography>
                                    <span className={classes.techName}>
                            PHP &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>

                                    <span className={classes.techName}>
                            Javascript &nbsp; <span style={{color: theme.palette.primary.main}}>/ &nbsp;</span>
                        </span>

                                    <span className={classes.techName}>
                            Node.JS &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>
                                    <span className={classes.techName}>
                            Express &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>
                                    <span className={classes.techName}>
                            React &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>
                                    <span className={classes.techName}>
                            Symfony &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>
                                    <span className={classes.techName}>
                           Laravel &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>
                                    <span className={classes.techName}>
                            Redis &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>
                                    <span className={classes.techName}>
                           MongoDB &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>
                                    <span className={classes.techName}>
                            PostgreSQL &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>
                                    <span className={classes.techName}>
                            MySql &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>
                                </Box>

                                <Box className={`${classes.technologyBox} ${classes.mainTechnologyBoxRight}`}>
                                    <Typography className={classes.techBoxHeading} variant={'h3'}>
                                        Mobile technologies
                                    </Typography>
                                    <span className={classes.techName}>
                            Swift &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>
                                    <span className={classes.techName}>
                            Java &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>
                                    <span className={classes.techName}>
                            Kotlin &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>
                                    <span className={classes.techName}>
                            Objective-C &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>
                                    <span className={classes.techName}>
                           RxJava &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>
                                    <span className={classes.techName}>
                           Alamofire &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>
                                    <span className={classes.techName}>
                           RxSwift &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>
                                    <span className={classes.techName}>
                           Firebase &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>
                                    <span className={classes.techName}>
                           SQLite &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>
                                    <span className={classes.techName}>
                           Realm &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>
                                    <span className={classes.techName}>
                           CoreData &nbsp; <span style={{color: theme.palette.primary.main}}>/&nbsp;</span>
                        </span>
                                </Box>
                            </Box>
                        </>
                    )
                }


            </Container>
        </div>
    );
};

export default DevelopmentServices;